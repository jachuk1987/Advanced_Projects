import React from 'react';

const checklistData = {
    Electronics: {
        "Mobile phones": ["iPhone", "Android"],
        Laptops: ["MacBook", "Surface Pro"]
    },
    Books: ["Fiction", "Non-fiction"],
    Toys: ["Toys"]
};

const CheckList = () => {
    return (
            <div style={{ padding: "20px" }}>
      <h2>Product Checklist</h2>

      {/* Iterate categories like Electronics, Books, Toys */}
      {Object.entries(checklistData).map(([category, subItems]) => (
        <div key={category}>
          <h2>{category}</h2>

          {/* If array (Books or Toys), render directly */}
          {Array.isArray(subItems) ? (
            subItems.map((item) => (
              <div key={item} style={{ marginLeft: "20px" }}>
                <label>
                  <input type="checkbox" /> {item}
                </label>
              </div>
            ))
          ) : (
            // If object (like Electronics), render each section (Mobile phones, Laptops)
            Object.entries(subItems).map(([mainHeading, items]) => (
              <div key={mainHeading} style={{ marginLeft: "20px" }}>
                <h3>{mainHeading}</h3>
                {items.map((item) => (
                  <div key={item} style={{ marginLeft: "20px" }}>
                    <label>
                      <input type="checkbox" /> {item}
                    </label>
                  </div>
                ))}
              </div>
            ))
          )}
        </div>
      ))}
    </div>
    )
}

export default CheckList
