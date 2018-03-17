import React from "react";

export const A = ({href, target, children}) => (

    <a href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined}>{children}</a>
);