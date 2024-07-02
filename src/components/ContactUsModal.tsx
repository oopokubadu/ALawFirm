import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { useSendEmailMutation } from "../services/email-service";
import toast from "react-hot-toast";

export const ContactUsModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [formData, setFormData] = useState({
    sender_name: "",
    subject: "Eight Geeks Website",
    message: "",
    recipients: "opokubadu18@gmail.com",
    domain: "newwebsiteeg.netlify.app",
    def_signature: "False",
  });
  const [sendEmail, { isLoading }] = useSendEmailMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("sender_name", formData.sender_name);
    form.append("message", formData.message);
    form.append("subject", formData.subject);
    form.append("recipients", formData.recipients);
    form.append("domain", formData.domain);
    form.append("def_signature", formData.def_signature);

    try {
      await sendEmail(form);
      toast.success("Email sent successfully! We will get back to you soon");
      // toast.success("Confirmation email sent successfully!");
      closeModal();
      setFormData((prev) => ({
        ...prev,
        sender_name: "",
        message: "",
      }));
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error("Failed to send email.");
    }
  };

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

                  <form onSubmit={handleSubmit}>
                    <div className="my-8">
                      <label
                        htmlFor="hs-feedback-post-comment-name-1"
                        className="block mb-2 text-lg font-semibold"
                      >
                        What’s your name?
                      </label>
                      <input
                        type="text"
                        name="sender_name"
                        value={formData.sender_name}
                        onChange={handleChange}
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
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="py-4 px-5 block w-full bg-[#F5F5F5] text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="Email or Phone? Whichever’s your jam."
                      />
                    </div>
                    <div className="flex h-16 flex-shrink-0 items-center mb-5 space-x-2  px-6 ">
                      <button
                        type="submit"
                        disabled={!formData.sender_name || !formData.message}
                        className="inline-flex cursor-pointer w-32 items-center justify-center  bg-red-600 px-4 py-2.5 text-sm font-semibold text-white "
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
