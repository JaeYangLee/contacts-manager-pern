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
          className="p-2 bg-[#fff2e9] flex flex-col items-center justify-center gap-8"
          onClick={(e) => e.stopPropagation()}
        >
          <section>
            <h1 className="text-center">
              Are you sure you want to delete <span>{contact}</span> from you
              contacts?
            </h1>
            <p className="text-center">There's no going back...</p>
          </section>

          <section className="flex flex-row items-center justify-center gap-2">
            <button
              className="border-1 px-2 rounded bg-red-400"
              onClick={onDelete}
            >
              Delete
            </button>
            <button
              className="border-1 px-2 rounded opacity-60"
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
