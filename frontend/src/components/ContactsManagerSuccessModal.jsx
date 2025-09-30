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
        className="fixed top-0 flex flex-col items-center justify-center w-screen h-screen z-60 fix bg-black/70 p-2"
        onClick={onSuccessModalClose}
      >
        <div
          className="text-center bg-[#fff2e9] flex flex-col items-center justify-center gap-2 py-2 px-4 rounded shadow-sm shadow-black"
          onClick={(e) => e.stopPropagation()}
        >
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="text-sm">
            <span className="font-bold">{contact}</span> {message}
          </p>
          <section>
            <button
              onClick={onSuccessModalClose}
              className="px-2 text-sm bg-green-400 rounded border-1"
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
