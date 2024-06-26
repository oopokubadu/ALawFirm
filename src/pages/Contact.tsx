import React, { useState } from "react";
import { SafeImg } from "../assets";
import { useSendEmailMutation } from "../services/email-service";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Eight Geeks Website",
    message: "",
  });
  const [sendEmail, { isLoading, isError, isSuccess }] = useSendEmailMutation();

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
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.subject);
    form.append("message", formData.message);

    try {
      await sendEmail(form);
      alert("Email sent successfully!");
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send email.");
    }
  };
  return (
    <div className="overflow-x-hidden">
      <div className=" bg-white">
        <div className="max-w-[85rem] mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:pb-14 pt-32">
          <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-8">
            <div>
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-duration="1000"
                data-aos-once="true"
                data-aos-delay="200"
                className="mt-4 md:mb-12 max-w-sm"
              >
                <h1 className="mb-4 font-semibold text-[#262626] text-4xl lg:text-5xl ">
                  Contact Us
                </h1>
                <p className="text-[#262626] font-medium mb-3">
                  Email, call, or complete the form to reach Eight Geeks at Law
                  easily.
                </p>
                <p className="text-[#262626] font-medium mb-3">
                  info@theeightgeeks.com
                </p>
                <p className="text-[#262626] font-medium">
                  +233 302 954 064 | +233 302 954 104
                </p>
              </div>
            </div>

            <div
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-delay="400"
            >
              <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
                <div className="p-4 sm:p-7 flex flex-col bg-white">
                  <h1 className="text-2xl font-bold">Get in touch</h1>
                  <form onSubmit={handleSubmit}>
                    <div className="my-8">
                      <label
                        htmlFor="hs-feedback-post-comment-name-1"
                        className="block mb-2 text-lg font-semibold"
                      >
                        What’s your name?
                      </label>
                      <input
                        name="name"
                        value={formData.name}
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
                        Enter your email
                      </label>
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="py-4 px-5 block w-full bg-[#F5F5F5] text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="bestclient@gmail.com"
                      />
                      <textarea
                        placeholder="How can we help?"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="py-4 px-3 my-4 block w-full h-36 bg-[#F5F5F5] text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                      />
                    </div>
                  </form>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-[#ED1B24] rounded-lg focus:shadow-outline hover:bg-[#ed1b26c7]"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F9F9F9]">
        <div className="max-w-[85rem] mx-auto py-10 flex  w-full justify-center flex-wrap lg:flex-nowrap gap-y-6 gap-x-32 items-center p-5">
          <iframe
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-delay="200"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1985.2176846023895!2d-0.14739396383064737!3d5.649981139431007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9d89c30a16fb%3A0xf06418245dd16bc2!2sEight%20Geeks%20%40%20Law!5e0!3m2!1sen!2sgh!4v1717323537447!5m2!1sen!2sgh"
            width="500"
            height="450"
            style={{ border: "0" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div>
            <div
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-delay="200"
            >
              <h3 className="text-3xl font-semibold mb-4 text-[#262626]">
                Our location
              </h3>
              <h3 className="text-4xl font-semibold mb-4 text-[#262626]">
                Headquarters
              </h3>
              <p className="text-[#262626] text-base my-2">
                East Legon - Nii Afutu Tsuru Street <br /> GD-185-4362 <br />{" "}
                Accra, Ghana
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
