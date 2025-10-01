import React from "react";

function ContactsManagerValidatorModal({
  isValidatorModalOpen,
  onValidatorModalClose,
  message,
}) {
  if (!isValidatorModalOpen) return null;
  return (
    <>
      <div
        className="fixed top-0 x-60 w-screen h-screen bg-black/70 flex flex-col items-center justify-center"
        onClick={onValidatorModalClose}
      >
        <div
          onClick={(e) => e.stopPropagation}
          className="py-4 px-5 rounded bg-[#fff2e9] text-center flex flex-col items-center justify-center gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.75)]"
        >
          <section>
            <h1 className="text-2xl font-bold">Invalid format!</h1>
            <p className="text-sm font-light">{message}</p>
          </section>

          <section>
            <button className="border-1 px-2 rounded text-sm bg-green-400 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)]">
              Try Again
            </button>
          </section>
        </div>
      </div>
    </>
  );
}

export default ContactsManagerValidatorModal;
