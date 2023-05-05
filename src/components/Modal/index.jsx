import { Button } from "components";
import { Modal } from "flowbite-react";
import React, { useState } from "react";

export const ModalComponent = ({ cancel, submit, onClick, svg, classes, buttonClasses, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <React.Fragment>
      <Button classes={`mr-6 mb-6 md:mr-3 md:mb-3 lg:px-5 md:px-3 self-end ${buttonClasses}`} onClick={() => setVisible(true)}>{svg}</Button>
      <Modal show={visible} size="md" popup={true} onClose={() => setVisible(false)}>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center flex flex-col items-center">
            {children}
            <div className="flex justify-center gap-4">
              <button onClick={onClick} onClickCapture={() => setVisible(false)} className={`text-white px-3 py-1 rounded-md ${classes}`}>
                {submit}
              </button>
              <button className="text-gray-500 px-5 py-1 border rounded-md" onClick={() => setVisible(false)}>{cancel}</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};
