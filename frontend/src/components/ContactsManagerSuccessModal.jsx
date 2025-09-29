import React from "react";

function ContactsManagerSuccessModal({
  contact,
  isSuccessModalOpen,
  onSuccessModalClose,
  title,
  message,
}) {
  if (!isSuccessModalOpen) return null;
  return (
    <>
      <div
        className="fixed top-0 flex flex-col items-center justify-center w-screen h-screen z-60 fix bg-black/70"
        onClick={onSuccessModalClose}
      >
        <div
          className="bg-[#fff2e9] flex flex-col items-center justify-center gap-2 py-2 px-4 rounded shadow-sm shadow-black"
          onClick={(e) => e.stopPropagation()}
        >
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="text-sm">
            <span className="font-bold">{contact}</span> {message}
          </p>
          <section>
            <button
              onClick={onSuccessModalClose}
              className="border-1 px-2 rounded bg-green-400 text-sm"
            >
              Okay
            </button>
          </section>
        </div>
      </div>
    </>
  );
}

export default ContactsManagerSuccessModal;
