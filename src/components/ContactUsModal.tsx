import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { BsArrowUpRightCircle } from "react-icons/bs";

export const ContactUsModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-duration="1000"
        data-aos-once="true"
        data-aos-delay="400"
        onClick={openModal}
        className="inline-flex cursor-pointer group transition ease-in-out delay-150  duration-300 items-center justify-center  bg-[#ED1B24] px-4 py-3 text-xl font-light text-white"
      >
        <span className="group-hover:underline"> Talk to us </span>
        <BsArrowUpRightCircle className="ml-5 h-5 w-5 group-hover:rotate-45" />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 backdrop-blur-lg bg-gray/50 z-50 transition-opacity" />
          </Transition.Child>

          <div className="fixed z-50 inset-0 flex min-h-screen items-end justify-center overflow-hidden px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative inline-flex w-full transform flex-col overflow-hidden bg-white  text-left align-bottom  transition-all sm:my-8 md:my-32 sm:max-w-lg sm:align-middle">
                <div className="absolute top-4 right-5">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="inline-flex aspect-square cursor-pointer items-center justify-center rounded-xl border-none border-transparent bg-transparent p-2 font-semibold text-text hover:bg-heading/5 focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text child-svg:h-5 child-svg:w-5"
                  >
                    <span className="sr-only">Close</span>
                    <IoCloseCircleOutline className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex-1 px-6 py-5 sm:py-6">
                  <Dialog.Title as="h3" className="text-2xl font-bold">
                    We’ll reach out momentarily.
                  </Dialog.Title>

                  <form>
                    <div className="my-8">
                      <label
                        htmlFor="hs-feedback-post-comment-name-1"
                        className="block mb-2 text-lg font-semibold"
                      >
                        What’s your name?
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="py-4 px-5 block w-full bg-[#F5F5F5] text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="What should we call you?"
                      />
                    </div>
                    <div className="mt-8">
                      <label
                        htmlFor="hs-feedback-post-comment-name-1"
                        className="block mb-2 text-lg font-semibold"
                      >
                        How should we reach you?
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="py-4 px-5 block w-full bg-[#F5F5F5] text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="Email or Phone? Whichever’s your jam."
                      />
                    </div>
                  </form>
                </div>

                <div className="flex h-16 flex-shrink-0 items-center mb-5 space-x-2  px-6 ">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="inline-flex cursor-pointer w-32 items-center justify-center  bg-red-600 px-4 py-2.5 text-sm font-semibold text-white "
                  >
                    Submit
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
