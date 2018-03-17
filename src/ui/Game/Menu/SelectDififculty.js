import React from "react";

export const SelectDifficulty = ({activeValue, options, onSelect}) => (
    <select className={"SelectDifficulty"} value={activeValue} onChange={e => onSelect(e.target.value)}>
        {options.map(value => (
            <option key={value} value={value}>{value}</option>
        ))}
    </select>
);

export default SelectDifficulty;