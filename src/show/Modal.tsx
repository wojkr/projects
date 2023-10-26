import React, { Dispatch, SetStateAction } from "react";

interface ModalProps {
  link: string;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}
const Modal: React.FC<ModalProps> = ({ link, setShowModal }) => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
        <div className="relative mx-auto my-6 w-auto max-w-3xl">
          {/*content*/}
          <div className="relative flex w-full flex-col border-0 bg-white shadow-lg outline-none focus:outline-none">
            {/*header*/}
            <div className="border-blueGray-200 flex items-start justify-between p-5">
              <h3 className="text-3xl font-semibold">Warning</h3>
              <button
                className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black opacity-5 outline-none focus:outline-none"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                <span className="block h-6 w-6 bg-transparent text-2xl text-black opacity-5 outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative flex-auto p-6">
              <p className="my-4 text-lg leading-relaxed">
                The website you'll be redirected to may load slowly or appear
                not ready. Once the content is loaded, it will be ready for use:
                please refresh the website (press F5) and then start to explore.
                <br></br>Please note that the server may spin down after 15
                minutes of inactivity and will require another spin-up.{" "}
                <br></br>Thank you for your patience!
              </p>
            </div>
            {/*footer*/}
            <div className="border-blueGray-200 flex items-center justify-end p-6">
              <button
                className="background-transparent mb-1 mr-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                className="mb-1 mr-1 bg-emerald-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
                type="button"
                onClick={() => {
                  setShowModal(false);
                  window.open(link);
                }}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  );
};

export default Modal;
