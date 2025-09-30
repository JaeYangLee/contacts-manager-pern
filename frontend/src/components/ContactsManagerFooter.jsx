import React from "react";

function ContactsManagerFooter() {
  return (
    <>
      <footer className="flex flex-col items-center justify-center p-2 text-center text-white bg-black md:flex-row md:justify-between">
        <p className="text-xs text-white/80">
          © {new Date().getFullYear()} Jian Lee Ramos. All rights Reserved.
        </p>
        <p className="text-xs md:flex text-white/80">Built with PERN.</p>
      </footer>
    </>
  );
}

export default ContactsManagerFooter;
