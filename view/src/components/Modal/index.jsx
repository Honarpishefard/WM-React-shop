import { Button } from "components";
import { Modal } from "flowbite-react";
import React, { useState } from "react";
import { removeFromCardService } from "api";
import Cookies from "js-cookie";

export const ModalComponent = (ProductId, size, quantity, Click) => {
  const [visible, setVisible] = useState(false);

  const userId = Cookies.get("_id");

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="#979797"
              className="bi bi-exclamation-circle my-6"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
            </svg>
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
              <button
                // onClick={Click}
                className="bg-red-700 text-white px-3 py-1 rounded-md"
                onClick={() => {
                  setVisible(false);
                  removeFromCardService(userId, ProductId, size, quantity);
                }}
              >
                Yes, I'm sure
              </button>
              <button
                className="text-gray-400 px-5 py-1 border rounded-md"
                onClick={() => setVisible(false)}
              >
                No, cancel
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};
