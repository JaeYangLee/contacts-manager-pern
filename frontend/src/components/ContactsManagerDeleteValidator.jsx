import React from "react";

function ContactsManagerDeleteValidator({
  contact,
  onDelete,
  isDeleteValidatorOpen,
  onDeleteValidatorClose,
}) {
  if (!isDeleteValidatorOpen) return null;

  return (
    <>
      <div
        className="p-2 fixed top-0 z-60 bg-black/60 w-screen h-screen flex flex-col items-center justify-center"
        onClick={onDeleteValidatorClose}
      >
        <div
          className="p-2 bg-[#fff2e9] flex flex-col items-center justify-center gap-8 rounded"
          onClick={(e) => e.stopPropagation()}
        >
          <section className="flex flex-col items-center justify-center text-center gap-2">
            <h1 className="font-bold text-lg">
              Delete
              <span className="text-red-500"> {contact}</span> from your
              contacts?
            </h1>
            <p className="text-base font-light">There's no going back...</p>
          </section>

          <section className="flex flex-row items-center justify-center gap-2">
            <button
              className="border-1 px-2 rounded bg-red-400 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)]"
              onClick={onDelete}
            >
              Delete
            </button>
            <button
              className="border-1 px-2 rounded text-black/60 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)]"
              onClick={onDeleteValidatorClose}
            >
              Cancel
            </button>
          </section>
        </div>
      </div>
    </>
  );
}

export default ContactsManagerDeleteValidator;
