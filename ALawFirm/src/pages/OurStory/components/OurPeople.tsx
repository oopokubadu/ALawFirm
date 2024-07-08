import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoCloseCircleOutline } from "react-icons/io5";
import { BsArrowUpRightCircle } from "react-icons/bs";

const OurPeople = () => {
  const [openModalIndex, setOpenModalIndex] = React.useState<number | null>(
    null
  );
  const BoardMembers = [
    {
      name: "Kofi Owusu-Nhyira",
      image:
        "https://res.cloudinary.com/djmddrfv2/image/upload/v1720011723/Kofi-Owusu-Nhyira_xc6jz4.webp",
      email: "mailto:info@theeightgeeks.com",
      modalImage:
        "https://res.cloudinary.com/djmddrfv2/image/upload/v1720011713/img_modal_header_kofi_glgvgf.png",
      position: "Founding Partner",
      portfolio: "https://www.linkedin.com/in/kofiowusu-nhyira/",
      bio1: "Kofi Owusu-Nhyira is a highly skilled technology lawyer, problem solver, and fintech entrepreneur with over 16 years of professional experience and expertise in the promotion, support, and regulation of Technology Innovation and Digital Financial Services across Africa.",
      bio2: "Prior to his role at Eight Geeks, he had affiliations with AB & David and Roman Levi Associates. Kofi is a barrister and solicitor of the Supreme Court of Ghana.",
    },
    {
      name: "Emmanuel Saah",
      image:
        "https://res.cloudinary.com/djmddrfv2/image/upload/v1720011700/Esaah_bfmsvh.webp",
      modalImage:
        "https://res.cloudinary.com/djmddrfv2/image/upload/v1720011707/img_modal_header_emmanuel_saah_na4ngf.png",
      email: "mailto:e.saah@theeightgeeks.com",
      position: "Managing Partner",
      portfolio: "https://www.linkedin.com/in/emmanuel-saah-4a451a222/",
      bio1: "Emmanuel is the Managing Partner and Head of the Corporate and Commercial practice group. Emmanuel has provided legal and commercial support to several companies in the debt and equity capital markets, banking, securities markets, restructuring and financial technology transactions.",
      bio2: "Emmanuel has acted for several local and international clients including Citi Bank, Ghana Amalgamated Trust Plc, Uber Inc., Scancom Plc, African Export-Import Bank, Ministry of Finance, Village Capital Llc, Flutterwave, Wave Mobile Money, the United Nations Capital Development Fund and the United Nations Development Programme.",
      bio3: "He has an LLB from the University of Exeter and an LLM from University College London. Emmanuel is a dual qualified attorney, called to the bar both in Ghana and New York",
    },
    {
      name: "Augustina Odame",
      image:
        "https://res.cloudinary.com/djmddrfv2/image/upload/v1720011699/Augustina-Odame_ny62o8.webp",
      modalImage:
        "https://res.cloudinary.com/djmddrfv2/image/upload/v1720011704/img_modal_header_augustina_agrpgj.png",
      email: "mailto:a.odame@theeightgeeks.com",
      position: "Consultant",
      portfolio: "https://www.linkedin.com/in/augustinaodame/",
      bio1: "Dr. Augustina Odame is an economist (PhD) and consultant with broad experience and expertise in business set-up and regulatory compliance processes for technology firms across several African markets.",
      bio2: "As senior consultant at Eight Geeks at Law, Augustina spearheads compliance support for technology companies looking to innovate and expand successfully into Ghana and other African markets",
    },

    {
      name: "Vanesa Akuetteh",
      image:
        "https://res.cloudinary.com/djmddrfv2/image/upload/v1720011729/Vanesa-Akuetteh_h2ufnr.webp",
      modalImage:
        "https://res.cloudinary.com/djmddrfv2/image/upload/v1720011718/img_modal_header_vanessa_gcnyza.png",
      email: "mailto:v.akuetteh@theeightgeeks.com",
      position: "Associate",
      portfolio: "https://www.linkedin.com/in/vanesa-akuetteh/",
      bio1: "Vanesa Akuetteh is an Associate at Eight Geeks at Law with over 5 years of experience in the legal sector. She specializes in transactional law and works across the Corporate & Commercial, Licensing & Regulatory and Intellectual Property teams.",
      bio2: "Vanesa has worked with an array of local and international clients, including Uber, Smile Identity, Autochek, Flutterwave, Hubtel, Nsano, Meltwater Entrepreneurial School of Technology, PayFuture, and Kwarleyz Group. ",
      bio3: "In addition to her advisory work, she heads the Artificial Intelligence Desk at Eight Geeks and is certified in document automation and generative AI.",
      bio4: "Vanesa holds a Master's degree in Law, Business, and Management from the University of Law (London Moorgate). She simultaneously pursued and completed an LLB from the University of London and a BA in Political Science and Chinese from the University of Ghana.",
      bio5: "She is trained as a Solicitor of England and Wales and is called to the Bar as a Barrister and Solicitor of the Supreme Court of Ghana.",
    },

    {
      name: "Abiba Tornia",
      image:
        "https://res.cloudinary.com/djmddrfv2/image/upload/v1720011698/Abiba-Tornia_atbneu.webp",
      modalImage:
        "https://res.cloudinary.com/djmddrfv2/image/upload/v1720011703/img_modal_header_abiba_rlgglx.png",
      email: "mailto:a.tornia@theeightgeeks.com",
      position: "Associate",
      portfolio: "https://www.linkedin.com/in/abiba-tornia-a026a766/",
      bio1: "Abiba Tornia is an Associate at Eight Geeks at Law and a multi-jurisdictional lawyer.",
      bio2: "Her client list includes notable companies such as Paystack, FiClub, Masria Digital Payments, Village Capital LLC, Vivandi Group, Oze Ghana Ltd, and Cellulant Ghana Ltd.",
      bio3: "She also leads the Internet of Things (IoT) desk at Eight Geeks at Law.",
      bio4: "Abiba is currently an associate on the regulatory and licensing team at Eight Geeks at Law and contributed to the commercial team at Michael Ronan and Associates(UK) in the past. ",
      bio5: "She was called to the Ghana Bar in 2022 and the Nigerian Bar in 2021. She holds an MBA from NYU and both an LLB and LLM from the University of Buckingham.",
    },
    {
      name: "Jude Serbeh Boateng",
      image:
        "https://res.cloudinary.com/djmddrfv2/image/upload/v1720011721/Jude_gqersb.webp",
      modalImage:
        "https://res.cloudinary.com/djmddrfv2/image/upload/v1720011710/img_modal_header_jude_borsgx.png",
      email: "mailto:j.serbehboateng@theeightgeeks.com",
      position: "Associate",
      portfolio: "https://www.linkedin.com/in/jude-serbeh-boateng-816033149/",
      bio1: "Jude Serbeh-Boateng is an Associate at Eight Geeks at Law, specialising in Regulatory and Licensing, Mergers and Acquisitions, Corporate Restructuring, Corporate Finance, Strategic Advisory, and Compliance.",
      bio2: "His recent work with the firm includes assisting clients like Remitly, an American-based international money transfer operator, CoinCola, a Singaporean cryptocurrency company, Stellar Development Foundation, an American blockchain company and Flutterwave, an African-based unicorn in the payment space.",
      bio3: "Jude holds a B.A. in English and Political Science from the University of Ghana. He obtained his LLB from the University of Ghana, Legon, and a professional certificate from the Ghana School of Law. He is admitted to practice law in Ghana.",
    
    },
    {
      name: "Princess Judith Allotey",
      image:
        "https://res.cloudinary.com/djmddrfv2/image/upload/v1720011727/Naa_qhjnv4.webp",
      modalImage:
        "https://res.cloudinary.com/djmddrfv2/image/upload/v1720011715/img_modal_header_Naa_kiyc8f.png",
      position: "Associate",
      email: "mailto:p.allotey@theeightgeeks.com",
      portfolio:
        "https://www.linkedin.com/in/princess-judith-n-a-allotey-0469a41a0/",
      bio1: "Princess Allotey is an Associate at Eight Geeks at Law. ",
      bio2: "Her work at the firm spans various areas including corporate restructuring, mergers and acquisitions, and licensing and regulatory compliance. ",
      bio3: "She has assisted on several matters including providing advisory services for Uber, an e-hailing company, CoinCola, a Singapore-based cryptocurrency company and Smile Identity, a continental identity verification and e-KYC (Know Your Customer) company.",
      bio4: "She has an LLB (First class Honours) from the University of Ghana and a Qualifying Law Certificate from the Ghana School of Law.",
      bio5: "She has been admitted to practice law in Ghana and is a member of the Ghana Bar Association.",
  
    },
  ];

  const handleCloseModal = () => setOpenModalIndex(null);

  return (
    <div className="pb-16 mx-auto">
      <h1 className="text-2xl  md:text-3xl font-bold pt-12 pb-10 text-[#262626] ">
        The brains behind the awesomeness
      </h1>

      <div className="grid gap-5 mx-auto sm:grid-cols-2 lg:grid-cols-5 justify-center lg:max-w-screen-xl text-[#262626]">
        {BoardMembers.map((data, index) => (
          <div key={index}>
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-delay={index * 200}
              onClick={() => setOpenModalIndex(index)}
            >
              <div className="relative bg-[#F9F9F9] mb-4 overflow-hidden">
                <img
                  className="h-56 pt-4  mx-auto object-cover transition-all duration-300 hover:scale-110"
                  src={data.image}
                  style={{ objectPosition: "50%" }}
                  alt="Person"
                />
              </div>
              <a href={data.portfolio}>
                <div className="flex flex-row items-center justify-between">
                  <div>
                    <p className="text-sm font-bold">{data.name}</p>
                    <p className="text-sm font-light">{data.position}</p>
                  </div>
                  <FaLinkedin className="text-lg text-[#0076B2]" />
                </div>
              </a>
            </div>
            {openModalIndex === index ? (
              <>
                <div
                  className="justify-center my-4 lg:my-10 items-center flex fixed inset-0 z-50 outline-none focus:outline-none"
                  onClick={handleCloseModal}
                >
                  <div
                    className=" w-auto my-6 mx-auto max-w-7xl"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="relative ">
                      <button
                        type="button"
                        onClick={handleCloseModal}
                        className="absolute  right-0 top-0 z-50  cursor-pointer  rounded-xl border-none border-transparent bg-transparent p-2 font-semibold text-text hover:bg-heading/5 focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text child-svg:h-5 child-svg:w-5"
                      >
                        <span className="sr-only">Close</span>
                        <IoCloseCircleOutline className="h-8 w-8" />
                      </button>
                    </div>
                    {/*content*/}
                    <div className="bg-white border border-gray-200 shadow relative  max-h-[90vh] overflow-y-auto">
                      {/* <div className="bg-[#F9F9F9]">
                        <img
                          className="w-full lg:h-[25rem] object-cover object-center mx-auto"
                          src={data.modalImage}
                          alt=""
                          // style={{ objectPosition: "0rem 20rem" }}
                        />
                      </div> */}
                      <div className="p-5 lg:p-10">
                        <div className="mb-8 flex justify-between items-center flex-wrap sm:flex-nowrap">
                          <div>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                              {data.name}
                            </h5>
                            <p className="mb-8">
                              {" "}
                              {data.position}{" "}
                              <a href={data.portfolio}>
                                <FaLinkedin className="text-lg inline-flex text-[#0076B2]" />
                              </a>
                            </p>
                          </div>

                          <a
                            href={data.email}
                            className="inline-flex cursor-pointer group transition ease-in-out delay-150  duration-300 items-center justify-center  bg-[#262626] px-4 py-3 text-sm text-white"
                          >
                            <span className="group-hover:underline">
                              Send a message
                            </span>
                            <BsArrowUpRightCircle className="ml-5 h-5 w-5 group-hover:rotate-45" />
                          </a>
                        </div>

                        {data.bio1 && (
                          <p className="mb-3 font-normal text-gray-700">
                            {data.bio1}
                          </p>
                        )}
                        {data.bio2 && (
                          <p className="mb-3 font-normal text-gray-700">
                            {data.bio2}
                          </p>
                        )}
                        {data.bio3 && (
                          <p className="mb-3 font-normal text-gray-700">
                            {data.bio3}
                          </p>
                        )}
                        {data.bio4 && (
                          <p className="mb-3 font-normal text-gray-700">
                            {data.bio4}
                          </p>
                        )}
                        {data.bio5 && (
                          <p className="mb-3 font-normal text-gray-700">
                            {data.bio5}
                          </p>
                        )}
                      </div>
                      {/* <div className="px-10 pb-6">
                        <p className="bg-[#ED1B24] ml-auto w-48 text-center text-white p-3">
                          Selected Experience
                        </p>
                        <hr className="border-hr border-2 border-[#ED1B24]" />
                      </div> */}
                      {/* <div className="w-full px-10 mb-16 divide-y divide-layer-2 divide-opacity-20 divide-black">
                        {data.experience1 && (
                          <div className="py-4 flex justify-between space-x-4 ">
                            <GoDotFill className=" text-xs text-black" />
                            <span className="flex-1">{data.experience1}</span>
                          </div>
                        )}
                        {data.experience2 && (
                          <div className="py-4 flex justify-between space-x-4 ">
                            <GoDotFill className=" text-xs text-black" />
                            <span className="flex-1">{data.experience2}</span>
                          </div>
                        )}
                        {data.experience3 && (
                          <div className="py-4 flex justify-between space-x-4 ">
                            <GoDotFill className=" text-xs text-black" />
                            <span className="flex-1">{data.experience3}</span>
                          </div>
                        )}
                        {data.experience4 && (
                          <div className="py-4 flex justify-between space-x-4 ">
                            <GoDotFill className=" text-xs text-black" />
                            <span className="flex-1">{data.experience4}</span>
                          </div>
                        )}
                        {data.experience5 && (
                          <div className="py-4 flex justify-between space-x-4 ">
                            <GoDotFill className=" text-xs text-black" />
                            <span className="flex-1">{data.experience5}</span>
                          </div>
                        )}
                        {data.experience6 && (
                          <div className="py-4 flex justify-between space-x-4 ">
                            <GoDotFill className=" text-xs text-black" />
                            <span className="flex-1">{data.experience6}</span>
                          </div>
                        )}
                        {data.experience7 && (
                          <div className="py-4 flex justify-between space-x-4 ">
                            <GoDotFill className=" text-xs text-black" />
                            <span className="flex-1">{data.experience7}</span>
                          </div>
                        )}
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPeople;
