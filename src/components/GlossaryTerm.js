import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Tooltip from "./Tooltip";
import { glossary } from "./GlossaryData";

function getLocalizedValue(value, locale) {
  if (!value) return value;
  if (typeof value === "string") return value;
  return value[locale] ?? value.en;
}

export default function GlossaryTerm({ term, children }) {
  const { i18n } = useDocusaurusContext();
  const entry = glossary[term];
  const locale = i18n.currentLocale;
  const localizedLabel = getLocalizedValue(entry?.label, locale);
  const localizedContent = getLocalizedValue(entry?.content, locale);
  const shouldUseChildText = children && children !== term;
  const displayText = shouldUseChildText ? children : localizedLabel || term;

  if (!entry) return <>{displayText}</>;

  return (
    <Tooltip content={localizedContent} link={entry.link}>
      <span className="glossary-term">{displayText}</span>
    </Tooltip>
  );
}
