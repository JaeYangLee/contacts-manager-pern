import React from "react";

function ContactsManagerDuplicateModal({
  isDuplicateModalOpen,
  onDuplicateModalClose,
}) {
  if (!isDuplicateModalOpen) return null;

  return (
    <>
      <div
        className="fixed top-0 flex flex-col items-center justify-center w-screen h-screen bg-black/60"
        onClick={onDuplicateModalClose}
      >
        <div className="p-2 flex flex-col items-center justify-center bg-[#fff2e9] gap-4 rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,0.75)]">
          <h1 className="text-lg font-bold">Contact Already Exists!</h1>
          <button className="px-2 text-base bg-green-400 rounded border-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)]">
            Try Again
          </button>
        </div>
      </div>
    </>
  );
}

export default ContactsManagerDuplicateModal;
