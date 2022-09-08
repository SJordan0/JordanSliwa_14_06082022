import React from "react";

export default function TableFooter({
  minRows,
  maxRows,
  totalEntries,
  isSearching,
  minFilteredShow,
  maxFilteredShow,
  totalEntriesShow,
}) {
  return (
    <div className="table-footer">
      {totalEntries === 0 ? (
        <p className="table-footer-p"></p>
      ) : (
        [
          isSearching ? (
            <span
              key="entries-filtered"
              className="table-footer-p"
            >{`Showing ${minFilteredShow} to ${maxFilteredShow} of ${totalEntriesShow} entries (filtered from ${totalEntries} total entries)`}</span>
          ) : (
            <span
              key="entries"
              className="table-footer-p"
            >{`Showing ${minRows} to ${maxRows} of ${totalEntries} entries`}</span>
          ),
        ]
      )}
    </div>
  );
}
