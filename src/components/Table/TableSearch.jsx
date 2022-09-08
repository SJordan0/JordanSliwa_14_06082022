import React from "react";
import PropTypes from "prop-types";

import { normalizeText } from "../../utils/utils";

// Search in every entries

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

Search.propTypes = {
  data: PropTypes.array.isRequired,
  handleDisplayedData: PropTypes.func.isRequired,
  handleIsSearching: PropTypes.func.isRequired,
};
