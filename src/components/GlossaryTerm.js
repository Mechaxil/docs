import React from "react";
import Tooltip from "./Tooltip";
import { glossary } from "./Glossary";

export default function GlossaryTerm({ term, children }) {
  const entry = glossary[term];
  if (!entry) return <>{children || term}</>; // fallback: just render text

  return (
    <Tooltip content={entry.content} link={entry.link}>
      <span className="glossary-term">{children || term}</span>
    </Tooltip>
  );
}