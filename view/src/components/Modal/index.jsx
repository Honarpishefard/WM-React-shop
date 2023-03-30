import { Button } from "components";
import { Modal } from "flowbite-react";
import React, { useState } from "react";

export const ModalComponent = ({
  cancel,
  submit,
  onClick,
  children,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <React.Fragment>
      <Button classes="mx-6 mb-6 self-end" onClick={() => setVisible(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-trash3-fill"
          viewBox="0 0 16 16"
        >
          <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
        </svg>
      </Button>
      <Modal
        show={visible}
        size="md"
        popup={true}
        onClose={() => setVisible(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center flex flex-col items-center">
            {children}
            <div className="flex justify-center gap-4">
              <button
                onClick={onClick}
                className="bg-red-700 text-white px-3 py-1 rounded-md"
              >
                {submit}
              </button>
              <button
                className="text-gray-400 px-5 py-1 border rounded-md"
                onClick={() => setVisible(false)}
              >
                {cancel}
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};
