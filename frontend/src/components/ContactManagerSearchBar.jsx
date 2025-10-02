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
          className="px-2 rounded border-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)] placeholder:text-sm tex-sm lg:text-lg"
        />
      </div>
    </>
  );
}

export default ContactManagerSearchBar;
