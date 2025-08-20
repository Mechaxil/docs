import React, { useState, useEffect } from "react";

const Checklist = ({project, items, storageKey = "my-checklist" }) => {
  const namespacedKey = `${storageKey}:${project}`;
  const [checked, setChecked] = useState({});

  // Load saved state on mount
  useEffect(() => {
    const saved = localStorage.getItem(namespacedKey);
    if (saved) setChecked(JSON.parse(saved));
  }, [namespacedKey]);

  // Save whenever checked changes
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
    <div className="checklist">
      {items.map((item) => (
        <label key={item} style={{ display: "block", margin: "4px 0" }}>
          <input
            type="checkbox"
            checked={!!checked[item]}
            onChange={() => toggleItem(item)}
          />
          {item}
        </label>
      ))}
    </div>
  );
};

export default Checklist;


// TODO later add universal items such as microcontroller, cables, etc. since not all projects will have the same items but some will be common