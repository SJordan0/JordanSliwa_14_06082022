import React from "react";

import { normalizeText } from "../../utils/utils";

export default function Search({
  data,
  handleDisplayedData,
  handleIsSearching,
}) {
  const handleSearch = (evt) => {
    const value = normalizeText(evt.target.value);
    if (value.length > 0) {
      const dataToDisplay = data.filter((elt) => {
        const values = Object.values(elt)
          .map((val) => normalizeText(val))
          .join(" ");
        return values.includes(value);
      });
      handleDisplayedData(dataToDisplay);
      handleIsSearching(true);
    } else {
      handleDisplayedData(data);
      handleIsSearching(false);
    }
  };

  return (
    <div className="table-utils-2">
      <label htmlFor="dtb-search">{`Search: `}</label>
      <input
        type="search"
        id="dtb-search"
        name="dtb-search"
        onChange={(evt) => handleSearch(evt)}
      />
    </div>
  );
}