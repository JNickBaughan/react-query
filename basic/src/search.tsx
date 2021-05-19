import React from "react";

const Search = ({ name, onType }: { name: string; onType: any }) => {
  return (
    <input
      value={name}
      onChange={(e) => {
        onType(e.target.value);
      }}
    />
  );
};

export default Search;
