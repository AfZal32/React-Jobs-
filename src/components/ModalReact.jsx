import ReactModal from "react-modal";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ModalReact = ({
  modalIsOpen,
  afterOpenModal,
  closeModal,
  titleModal,
  modalDescription,
  buttonName,
  handleSubmit,
}) => {
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      className="relative rounded-lg  w-full max-w-md p-6"
      overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center"
    >
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-xl font-bold ">{titleModal}</h2>
        <div className="mt-2">{modalDescription}</div>
        <div className="mt-4 flex justify-end space-x-4">
          <button
            onClick={closeModal}
            className="inline-flex items-center justify-center rounded-md bg-red-500 px-4 py-2 font-bold text-white shadow-sm hover:bg-red-600"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              handleSubmit();
              closeModal();
            }}
            className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 font-bold text-white shadow-sm hover:bg-indigo-700"
          >
            {buttonName}
          </button>
        </div>
      </div>
    </ReactModal>
  );
};

export default ModalReact;
