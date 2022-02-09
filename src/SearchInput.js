import React from "react";

export const SearchInput = ({value, onChange}) => {

    const HadleChange = (event) => {
        onChange(event.target.value);
    }

    return (
        <input className="input-search" placeholder="Search for your favorite anime..." type='search' value={value} onChange={HadleChange} />
    );
}