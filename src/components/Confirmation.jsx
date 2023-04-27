import React from "react";

export default function Confirmation({
  showModal,
  setShowModal,
  deleteData,
  title,
}) {
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center p-7 max-w-xl mx-auto flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div
                  onClick={() => setShowModal(false)}
                  className="flex items-start justify-between p-5 rounded-t"
                >
                  <h3 className="text-2xl font-poppins font-semibold">
                    Are You Sure ?
                  </h3>
                  {/* Cross Button */}
                  <div className="flex justify-center items-center w-10 h-10 border-red-600 border-2 p-2 rounded-full">
                    <span className="text-2xl text-red-600">X</span>
                  </div>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="text-md font-poppins font-normal line-clamp-3 leading-relaxed">
                    Press {<span className="text-red-500">DELETE</span>} Button
                    to delete{" "}
                    <span className=" text-black font-bold"> {title} </span> Job
                    Permanently, otherwise press{" "}
                    {<span className="text-emerald-500">CLOSE</span>} Button to
                    back.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center space-x-4 justify-end p-2 rounded-b">
                  <button
                    className="bg-emerald-500 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow-md shadow-emerald-400 hover:opacity-80 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-red-500 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow-red-400 hover:opacity-80 shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={deleteData}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black">hii</div>
        </>
      ) : null}
    </>
  );
}
