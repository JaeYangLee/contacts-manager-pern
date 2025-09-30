import React from "react";

function ContactManagerSearchBar({ search, setSearch }) {
  return (
    <>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search contacts..."
          className="px-2 rounded border-1"
        />
      </div>
    </>
  );
}

export default ContactManagerSearchBar;
