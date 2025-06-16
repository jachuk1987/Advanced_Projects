import React, { useState } from "react";

const checklistData = {
  Electronics: {
    "Mobile phones": ["iPhone", "Android"],
    Laptops: ["MacBook", "Surface Pro"]
  },
  Books: ["Fiction", "Non-fiction"],
  Toys: ["Toys"]
};

const Checklist1 = () => {
  const [selected, setSelected] = useState({});

  // Toggle individual checkbox
  const toggle = (key) => {
    setSelected((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Check if all sub-items are selected
  const areAllSelected = (items) => items.every((item) => selected[item]);

  // Handle parent checkbox (Mobile phones, Laptops)
  const toggleParent = (parent, children) => {
    const shouldSelect = !selected[parent] || !areAllSelected(children);
    const updates = { [parent]: shouldSelect };
    children.forEach((child) => {
      updates[child] = shouldSelect;
    });
    setSelected((prev) => ({ ...prev, ...updates }));
  };

  // Handle child checkbox
  const toggleChild = (child, parent, siblings) => {
    const updated = { ...selected, [child]: !selected[child] };
    const allSiblings = siblings.every((sib) =>
      sib === child ? !selected[sib] : updated[sib]
    );
    updated[parent] = updated[child] || !allSiblings;
    setSelected(updated);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Checklist</h2>
      {Object.entries(checklistData).map(([category, subItems]) => (
        <div key={category}>
          <h2>{category}</h2>

          {Array.isArray(subItems) ? (
            subItems.map((item) => (
              <div key={item} style={{ marginLeft: "20px" }}>
                <label>
                  <input
                    type="checkbox"
                    checked={!!selected[item]}
                    onChange={() => toggle(item)}
                  />{" "}
                  {item}
                </label>
              </div>
            ))
          ) : (
            Object.entries(subItems).map(([section, items]) => (
              <div key={section} style={{ marginLeft: "20px" }}>
                {/* Main parent checkbox */}
                <label>
                  <input
                    type="checkbox"
                    checked={!!selected[section]}
                    onChange={() => toggleParent(section, items)}
                  />{" "}
                  {section}
                </label>

                {/* Sub-items */}
                {items.map((item) => (
                  <div key={item} style={{ marginLeft: "20px" }}>
                    <label>
                      <input
                        type="checkbox"
                        checked={!!selected[item]}
                        onChange={() => toggleChild(item, section, items)}
                      />{" "}
                      {item}
                    </label>
                  </div>
                ))}
              </div>
            ))
          )}
        </div>
      ))}
    </div>
  );
};

export default Checklist1;
