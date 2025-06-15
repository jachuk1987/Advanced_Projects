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

            {Object.entries(checklistData).map(([category, subItems]) => (
                <div key={category}>
                    <h2>{category}</h2>

                    {Array.isArray(subItems) ? (
                        subItems.map((item) => (
                            <div key={item} style={{ marginLeft: "20px" }}>
                                <label>
                                    <input type="checkbox" /> {item}
                                </label>
                            </div>
                        ))
                    ) : (
                        Object.entries(subItems).map(([section, items]) => (
                            <div key={section} style={{ marginLeft: "20px" }}>
                                {/* Checkbox for Mobile phones / Laptops */}
                                <label>
                                    <input type="checkbox" /> {section}
                                </label>

                                {/* Sub-items like iPhone, Android, etc. */}
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
