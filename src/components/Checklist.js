import React, { useState, useEffect } from "react";
import GlossaryTerm from "./glossaryTerm";

const Checklist = ({ project, items, storageKey = "my-checklist" }) => {
  const namespacedKey = `${storageKey}:${project}`;
  const [checked, setChecked] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem(namespacedKey);
    if (saved) setChecked(JSON.parse(saved));
  }, [namespacedKey]);

  useEffect(() => {
    localStorage.setItem(namespacedKey, JSON.stringify(checked));
  }, [checked, namespacedKey]);

  const toggleItem = (item) => {
    setChecked((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  return (
    <div classname="checklist">
      {items.map((item) => (
        <label
          key={item}
          style={{ display: "flex", alignItems: "center", margin: "6px 0", gap: "8px" }}
        >
          <input
            type="checkbox"
            className="checklist-checkbox"
            checked={!!checked[item]}
            onChange={() => toggleItem(item)}
          />
          <GlossaryTerm term={item}>{item}</GlossaryTerm>
        </label>
      ))}
    </div>
  );
};

export default Checklist;
