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
            {Object.entries(checklistData).map(([category, items]) => (
                <div key={category}>
                    <h3>{category}</h3>
                    {Array.isArray(items) ? (
                        items.map((item) => (
                            <div key={item}>
                                <label>
                                    <input type="checkbox" /> {item}
                                </label>
                            </div>
                        ))
                    ) : (
                        Object.entries(items).map(([subCategory, subItems]) => (
                            <div key={subCategory}>
                                <label>
                                    <input type="checkbox" /> {subCategory}
                                </label>
                                {subItems.map((subItem) => (
                                    <div key={subItem} style={{ marginLeft: "20px" }}>
                                        <label>
                                            <input type="checkbox" /> {subItem}
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
