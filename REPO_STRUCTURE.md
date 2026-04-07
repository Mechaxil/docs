# Repository Structure

This repo mixes Docusaurus site code with project documentation and static assets. Keeping new files in the right place is the simplest way to keep it navigable.

## Top-level layout

- `docs/basics/`: onboarding and "start here" content
- `docs/guides/`: workflow and tooling guides
- `docs/projects/`: project documentation
- `docs/products/`: hardware reference pages
- `src/pages/`: standalone site pages outside the docs plugin
- `src/components/`: reusable React/MDX components
- `static/img/`: images grouped by domain (`guides/`, `products/`, `SVG/`, `mascot/`)
- `scripts/`: maintenance scripts for the docs site

## Project docs

- Prefer one folder per project under `docs/projects/`
- Keep documentation pages together and name them by purpose: `overview`, `bom`, `schematics`, `firmware`, `deployment`
- Keep source assets next to the project only when they are project-specific, such as firmware or CAD files
- If a project is brought in as a submodule, treat it as self-contained and avoid reorganizing it from the parent repo unless that project is being updated directly

## Naming guidance

- Use lowercase file names with hyphens for docs where possible
- Keep slugs and doc IDs stable even if the sidebar organization changes
- Add `_category_.json` when introducing a new docs folder so the sidebar stays readable
