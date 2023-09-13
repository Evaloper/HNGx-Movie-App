import React from "react";

export const Text = ({ type, className, children }) => {
    if (type === "p") {
        return <p className={className}>{children}</p>;
    }
    return <span className={className}>{children}</span>;
};
