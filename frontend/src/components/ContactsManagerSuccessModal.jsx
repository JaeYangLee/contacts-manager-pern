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
        className="fixed top-0 flex flex-col items-center justify-center w-screen h-screen z-60 fix bg-black/50"
        onClick={onSuccessModalClose}
      >
        <div
          className="bg-[#fff2e9] flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <h1>{title}</h1>
          <p>
            {contact.name} {message}
          </p>
          <section>
            <button onClick={onSuccessModalClose}>Okay!</button>
          </section>
        </div>
      </div>
    </>
  );
}

export default ContactsManagerSuccessModal;
