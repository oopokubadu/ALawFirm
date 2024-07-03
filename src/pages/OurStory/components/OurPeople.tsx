import React from "react";
import { FaLinkedin } from "react-icons/fa";
import {
  Abiba,
  Augustina,
  Emmanuel,
  Kofi,
  Jude,
  Vanessa,
  Naa,
  KofiModal,
  EmmanuelModal,
  AugustinaModal,
  VanessaModal,
  AbibaModal,
  JudeModal,
  NaaModal,
} from "../../../assets";
import { GoDotFill } from "react-icons/go";
import { IoCloseCircle, IoCloseCircleOutline } from "react-icons/io5";
import { BsArrowUpRightCircle } from "react-icons/bs";

const OurPeople = () => {
  const [openModalIndex, setOpenModalIndex] = React.useState<number | null>(
    null
  );
  const BoardMembers = [
    {
      name: "Kofi Owusu-Nhyira",
      image: Kofi,
      email: "mailto:info@theeightgeeks.com",
      modalImage: KofiModal,
      position: "Founding Partner",
      portfolio: "https://www.linkedin.com/in/kofiowusu-nhyira/",
      bio1: "Kofi Owusu-Nhyira is a highly skilled technology lawyer, problem solver, and fintech entrepreneur with over 16 years of professional experience and expertise in the promotion, support, and regulation of Technology Innovation and Digital Financial Services across Africa.",
      bio2: "Prior to his role at Eight Geeks, he had affiliations with AB & David and Roman Levi Associates. Kofi is a barrister and solicitor of the Supreme Court of Ghana.",
      experience1:
        "Through the Chamber of Technology (Ghana), as both a founding and governing council member, made significant contributions to, amongst other things, the Ghanaian payment systems regulatory regime as defined by the Payment Systems and Services Act, 2019 (ACT 987) through continued stakeholder engagement and advocacy",
      experience2:
        "Provided advisory services, as a member of Bank of Ghana’s Payment Systems Advisory Committee, for the regulation and oversight of payment systems, including operations and technical standards, and related matters affecting payment services.",
      experience3:
        "Consulted for the United Nations Capital Development Fund (UNCDF) as a National Expert in Policy and Legal Compliance, to provide assistance to select companies for expansion into the Ghanaian market and for achieving regulatory compliance objectives.",
      experience4:
        "Provided support to clients for company set-up or restructuring, towards obtaining licences within the Ghanaian technology industry.",
    },
    {
      name: "Emmanuel Saah",
      image: Emmanuel,
      modalImage: EmmanuelModal,
      email: "mailto:e.saah@theeightgeeks.com",
      position: "Managing Partner",
      portfolio: "https://www.linkedin.com/in/emmanuel-saah-4a451a222/",
      bio1: "Emmanuel Saah is the attorney in charge of corporate and commercial practice at EGL.",
      bio2: "In that capacity, he has provided legal and commercial support to several technology companies both in the debt and equity capital markets and also in the banking, and the securities markets. Emmanuel is a dual qualified attorney, called to the bar both in Ghana and New York",
      bio3: "",
      experience1:
        "Acted as legal advisor for a Dubai based investor on its acquisition of shares in MTN South Sudan",
      experience2:
        "Acted as counsel for Ghanaian venture capital fund on its investment in a Nigerian identity verification platform.",
      experience3:
        "Undertook a corporate reorganisation for a cross border digital payment platform with a valuation of over USD 1 billion.",
      experience4:
        "Assisted an American based investment firm on its convertible note investment in a Ghanaian company specialized in greenhouse farming.",
      experience5:
        "Undertook legal due diligence on behalf of a Nigerian digital platform on its proposed acquisition of a value-added service provider in Ghana.",
      experience6:
        "Advised a digital credit management company on the legal regime governing debt buying in Ghana.",
      experience7:
        "Advised a cross border payment platform on foreign exchange trading in Ghana.",
    },
    {
      name: "Augustina Odame",
      image: Augustina,
      modalImage: AugustinaModal,
      email: "mailto:a.odame@theeightgeeks.com",
      position: "Consultant",
      portfolio: "https://www.linkedin.com/in/augustinaodame/",
      bio1: "Dr. Augustina Odame is an economist (PhD) and consultant with broad experience and expertise in business set-up and regulatory compliance processes for technology firms across several African markets.",
      bio2: "As senior consultant at Eight Geeks at Law, Augustina spearheads compliance support for technology companies looking to innovate and expand successfully into Ghana and other African markets",
      experience1:
        "Oversaw the initial set-up and licensing efforts of over a dozen financial technology companies in key African markets.",
      experience2:
        "Provided crucial local insights and contextualisation for multinational and Global technology firms with technology applications from digital transport to blockchain in their market entry and business expansion efforts in Ghana.",
      experience3:
        "Developed tailor-made compliance programs for technology clients.",
      experience4:
        "Provided regulatory support for two digital payment platforms with a valuation of USD 1 billion",
      experience5:
        "Advised clients on changes to regulatory regimes and provided support for updates to internal compliance programs to maintain compliance.",
      experience6:
        "Provided advisory support services to the central banks of a number of African countries in the development, establishment, and management of fit-for-purpose regulatory regimes for financial technology companies.",
    },

    {
      name: "Vanesa Akuetteh",
      image: Vanessa,
      modalImage: VanessaModal,
      email: "mailto:v.akuetteh@theeightgeeks.com",
      position: "Associate",
      portfolio: "https://www.linkedin.com/in/vanesa-akuetteh/",
      bio1: "Vanesa Akuetteh is an Associate at Eight Geeks at Law with over 5 years of experience in the legal space. She specializes in transactional law and works across the corporate and commercial, licensing and regulatory and Intellectual Property teams. ",
      bio2: "Vanesa is the principal of the Artificial Intelligence Desk at Eight Geeks and is certified in document automation and generative artificial intelligence. She holds a master’s degree in Law, Business, and Management from the University of Law (London Moorgate) and is a graduate of the University of London and the University of Ghana.",
      bio3: "She is Trained as a solicitor of England and Wales and called as a Barrister and Solicitor of the Supreme Court of Ghana.",
      experience1:
        "Advised a pan -African technology incubator on the strategic incorporation of local subsidiaries for its portfolio companies and provided foundational legal support, including drafting contracts like founders' agreements and legal clinics to discuss preliminary legal issues.",
      experience2:
        "Acted as counsel for Ghanaian venture capital fund on its investment in a Nigerian identity verification platform.",
      experience3:
        "Advised a continental identity verification solutions provider on the private liquidation of its local subsidiary.",
      experience4:
        "Advised a continental identity verification solutions provider on the refinement and restructuring of its suite of corporate and commercial agreements including its terms and conditions, data processing agreements, privacy policy and reseller agreements.",
      experience5:
        "Provided transaction advisory on the acquisition of an enhanced payment service provider in Ghana.",
      experience6:
        "Brokered a strategic partnership between an auto loan rental company and a finance house to facilitate the provision of loans and provided comprehensive legal support throughout the transaction.",
    },

    {
      name: "Abiba Tornia",
      image: Abiba,
      modalImage: AbibaModal,
      email: "mailto:a.tornia@theeightgeeks.com",
      position: "Associate",
      portfolio: "https://www.linkedin.com/in/abiba-tornia-a026a766/",
      bio1: "Abiba Tornia is an associate at Eight Geeks at Law. Her practice is mainly on regulatory and licensing with a focus on Telecommunication Law. She was the winner of best student in Jurisprudence and Evidence from the University of Buckingham and remains very passionate about electronic evidence and demystifying the admissibility of electronic evidence.",
      bio2: "Abiba is called to the Bar as a Barrister and Solicitor of the Supreme Court of Nigeria and Ghana. Prior to joining the firm, she worked as a pupil at Ampofo, Oppong and Associates.",
      bio3: "Abiba is the principal of the internet of things desk at Eight Geeks at Law",
      experience1:
        "Acted as legal counsel to US based company in the restructuring of its Ghanaian subsidiary to facilitate a crowdfunding partnership in Ghana.",
      experience2:
        "Represented a multinational payment processor in its dispute resolution cases and license compliance.",
      experience3:
        "Acted as legal advisor for Egyptian payment processor on its application for an enhanced payment service provider license",
      experience4:
        "Acted as legal advisor for asset lending company on its application for a Finance House license from the Bank of Ghana.",
      experience5:
        "Acted as legal advisor for multinational payment service provider on its Ghana Investment Promotion Center (GIPC) license and renewal.",
      experience6:
        "Acted as legal advisor for US based company seeking a payment and financial technology service license from the Bank of Ghana.",
    },
    {
      name: "Jude Serbeh Boateng",
      image: Jude,
      modalImage: JudeModal,
      email: "mailto:j.serbehboateng@theeightgeeks.com",
      position: "Associate",
      portfolio: "https://www.linkedin.com/in/jude-serbeh-boateng-816033149/",
      bio1: "Jude Serbeh-Boateng is an Associate at Eight Geeks at Law. His focus areas are Regulatory  and  Licensing,  Mergers  and Acquisitions,  Corporate  Restructuring,  Corporate  Finance, Strategic Advisory and Compliance. Since joining Eight Geeks, Jude has played a vital role in helping Tech Companies develop new business models in alignment with existing domestic and international regulations.",
      bio2: "He is also the principal for the Blockchain and Cryptocurrency desk at the firm.",
      experience1:
        "Advised an American based money transfer operator (MTO) on aligning its Ghanaian operations with the inward remittance regulations for cross-border payments",
      experience2:
        "Ghanaian counsel for the restructuring of a Ghanaian-based payment service provider to ensure compliance with local equity participation under Ghanaian law",
      experience3:
        "Advised an American based crypto exchange on launching a potential product model in Ghana",
      experience4:
        "Advised a foreign-based company on their acquisition of a Ghanaian technology company",
      experience5:
        "Advised a leading e-hailing company on various aspects of its operations in Ghana",
      experience6:
        "Advised an African-based Unicorn on their strategic partnerships in Ghana",
    },
    {
      name: "Princess Judith Allotey",
      image: Naa,
      modalImage: NaaModal,
      position: "Associate",
      email: "mailto:p.allotey@theeightgeeks.com",
      portfolio:
        "https://www.linkedin.com/in/princess-judith-n-a-allotey-0469a41a0/",
      bio1: "Princess Allotey is an associate at Eight Geeks at Law with interests in various areas and fields of law. Her work at Eight Geeks spans corporate and commercial issues including mergers and acquisitions, corporate restructuring and advisory, regulatory and licensing and intellectual property protection. She also has interest in digital health, artificial intelligence and blockchain technology.",
      bio2: "She graduated with first class honours from the University of Ghana. ",
      bio3: "Princess is the principal of the digital health desk of Eight Geeks at Law.",
      experience1:
        "Assisted in provision of general advisory services for an e-hailing company",
      experience2:
        "Assisted in provision of advisory services for a Singapore based crypto exchange ",
      experience3:
        "Assisted in the provision of transaction advisory services for a continental identity verification solutions provider ",
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
                        className="fixed block z-50 top-12 right-8 lg:top-16 lg:right-40 aspect-square cursor-pointer  rounded-xl border-none border-transparent bg-transparent p-2 font-semibold text-text hover:bg-heading/5 focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text child-svg:h-5 child-svg:w-5"
                      >
                        <span className="sr-only">Close</span>
                        <IoCloseCircleOutline className="h-8 w-8" />
                      </button>
                    </div>
                    {/*content*/}
                    <div className="bg-white border border-gray-200 shadow relative  max-h-[90vh] overflow-y-auto">
                      <div className="bg-[#F9F9F9]">
                        <img
                          className="w-full lg:h-[25rem] object-cover object-center mx-auto"
                          src={data.modalImage}
                          alt=""
                          // style={{ objectPosition: "0rem 20rem" }}
                        />
                      </div>
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
                      </div>
                      <div className="px-10 pb-6">
                        <p className="bg-[#ED1B24] ml-auto w-48 text-center text-white p-3">
                          Selected Experience
                        </p>
                        <hr className="border-hr border-2 border-[#ED1B24]" />
                      </div>
                      <div className="w-full px-10 mb-16 divide-y divide-layer-2 divide-opacity-20 divide-black">
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
                      </div>
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
