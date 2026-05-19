#!/usr/bin/env python3
import re
import sys
from pathlib import Path

# ---------- extract glossary terms ----------
def extract_terms(glossary_path: Path) -> list[str]:
    text = glossary_path.read_text(encoding="utf-8")
    keys_dbl = re.findall(r'"([^"]+)"\s*:\s*{', text)
    keys_sgl = re.findall(r"'([^']+)'\s*:\s*{", text)
    keys_unquoted = re.findall(r"\b([A-Za-z_][A-Za-z0-9_]*)\s*:\s*{", text)
    return sorted(set(keys_dbl + keys_sgl + keys_unquoted), key=len, reverse=True)

# ---------- patterns ----------
GLOSSARY_TAG_PATTERN = re.compile(
    r'<GlossaryTerm\b[^>]*\/>|<GlossaryTerm\b[^>]*>.*?<\/GlossaryTerm>',
    re.DOTALL,
)

REGION_PATTERN = re.compile(
    r':::GLOSSARY-AUTO\s*\n(.*?)\n:::\s*(?=\n|$)',
    re.DOTALL,
)

def build_term_pattern(term: str):
    return re.compile(
        rf'(?<![A-Za-z0-9]){re.escape(term)}(?![A-Za-z0-9])',
        re.IGNORECASE,
    )


def replace_outside_tags(text: str, pattern: re.Pattern, replacement: str) -> tuple[str, int]:
    parts = re.split(r'(<[^>]*>)', text)
    count = 0
    for i in range(0, len(parts), 2):
        parts[i], num = pattern.subn(replacement, parts[i])
        count += num
    return ''.join(parts), count


def resolve_glossary_data_source(path: Path) -> Path | None:
    text = path.read_text(encoding='utf-8')
    match = re.search(r"from ['\"]\.\/GlossaryData['\"]", text)
    if match:
        candidate = path.parent / 'GlossaryData.js'
        if candidate.exists():
            return candidate
    return None

# ---------- apply inside region ----------
def apply_glossary_in_file(path: Path, terms: list[str]) -> bool:
    original = path.read_text(encoding="utf-8")
    text = original
    changed = False

    def process_region(match: re.Match):
        nonlocal changed
        region = match.group(1)

        # mask existing glossary components
        placeholders = {}
        def mask(m):
            k = f"__GTAG_{len(placeholders)}__"
            placeholders[k] = m.group(0)
            return k

        masked = GLOSSARY_TAG_PATTERN.sub(mask, region)

        # apply replacements outside HTML/JSX tags
        region_changed = False
        for term in terms:
            pat = build_term_pattern(term)
            rep = f'<GlossaryTerm term="{term}" />'
            masked_new, num = replace_outside_tags(masked, pat, rep)
            if num > 0:
                region_changed = True
                masked = masked_new

        # unmask
        for k, v in placeholders.items():
            masked = masked.replace(k, v)

        if region_changed:
            changed = True

        return f":::GLOSSARY-AUTO\n{masked}\n:::"

    new_text = REGION_PATTERN.sub(process_region, text)

    if changed and new_text != original:
        path.write_text(new_text, encoding="utf-8")
        print(f"Updated: {path}")
        return True

    return False

# ---------- walk docs ----------
def iter_markdown_files(root: Path):
    for p in root.rglob("*"):
        if p.is_file() and p.suffix.lower() in {".md", ".mdx"}:
            yield p

def main():
    if len(sys.argv) < 3:
        print("Usage: python apply_glossary_regions.py GlossaryData.js docs [more_dirs]")
        sys.exit(1)

    glossary_path = Path(sys.argv[1])
    terms = extract_terms(glossary_path)

    if len(terms) == 0 and glossary_path.name.lower().startswith('glossaryterm'):
        alt_path = resolve_glossary_data_source(glossary_path)
        if alt_path:
            print(f"No glossary terms found in {glossary_path}. Trying {alt_path} instead...\n")
            glossary_path = alt_path
            terms = extract_terms(glossary_path)

    if len(terms) == 0:
        print(f"Error: no glossary terms found in {glossary_path}.")
        print("Pass the glossary data file containing the glossary object, for example src/components/GlossaryData.js.")
        sys.exit(1)

    print(f"Loaded {len(terms)} glossary terms\n")

    total = 0
    for d in sys.argv[2:]:
        root = Path(d)
        for md in iter_markdown_files(root):
            if apply_glossary_in_file(md, terms):
                total += 1

    print(f"\nDone. Files modified: {total}")

if __name__ == "__main__":
    main()
