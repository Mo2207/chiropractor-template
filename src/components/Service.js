import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Modal from "react-modal";
import SectionContainer from "../layout/SectionContainer";
import { imgToSvg } from "../utils";
// import { urlFor } from "@/libs/sanity";
// import { PortableText } from "@portabletext/react";

const Service = () => {

  useEffect(() => {
    imgToSvg();
  }, []);

  const services = [
    {
      img: "/assets/img/service/spine-adjustment.jpg",
      icon: "/assets/img/service/spine.svg",
      text: "Realign and revitalize your spine with our expert adjustments.",
      date: "Updated: January 3, 2025",
      title: "Spinal Adjustments",
      text1:
        "Experience relief from pain and improved mobility with our spinal adjustment services. Our chiropractors use precise techniques to restore alignment and function.",
      text2:
        "Spinal adjustments can reduce discomfort, improve posture, and enhance your overall well-being.",
      text3:
        "Whether you’re dealing with chronic pain or simply want to maintain optimal health, our adjustments are tailored to your needs.",
    },
    {
      img: "/assets/img/service/posture.jpg",
      icon: "/assets/img/service/posture-corrector.svg",
      text: "Improve your alignment and confidence with posture correction therapy.",
      date: "Updated: January 3, 2025",
      title: "Posture Correction",
      text1:
        "Our posture correction treatments are designed to help you stand taller and feel better. We address alignment issues through targeted adjustments and exercises.",
      text2:
        "Good posture reduces strain on your body, preventing long-term discomfort and improving your overall health.",
      text3:
        "Let us help you achieve a confident, balanced posture that supports your daily activities.",
    },
    {
      img: "/assets/img/service/pain-management.jpg",
      icon: "/assets/img/service/body-massage.svg",
      text: "Alleviate chronic pain with our comprehensive pain management services.",
      date: "Updated: January 3, 2025",
      title: "Pain Management Therapy",
      text1:
        "Our pain management solutions target the root cause of your discomfort, providing lasting relief and improved quality of life.",
      text2:
        "Through a combination of chiropractic adjustments, therapeutic exercises, and lifestyle guidance, we address a wide range of conditions.",
      text3:
        "Regain your comfort and mobility with personalized care from our expert team.",
    },
    {
      img: "/assets/img/service/rehabilitation.jpg",
      icon: "/assets/img/service/rehabilitation.svg",
      text: "Recover strength and function with our tailored rehabilitation therapies.",
      date: "Updated: January 3, 2025",
      title: "Rehabilitation Therapy",
      text1:
        "Whether recovering from an injury or surgery, our rehabilitation therapy helps restore strength and mobility.",
      text2:
        "We create personalized recovery plans to help you get back to your daily activities quickly and safely.",
      text3:
        "Trust our experienced team to guide your recovery journey with care and precision.",
    },
    {
      img: "/assets/img/service/sports-injury.jpg",
      icon: "/assets/img/service/shoes.svg",
      text: "Get back in the game with our sports injury recovery treatments.",
      date: "Updated: January 3, 2025",
      title: "Sports Injury Recovery",
      text1:
        "Our specialized sports injury recovery services combine chiropractic care and therapeutic exercises to expedite your healing process.",
      text2:
        "We address sports-related strains, sprains, and other injuries to help you regain your strength and performance.",
      text3:
        "Maximize your recovery and return to the activities you love with confidence.",
    },
    {
      img: "/assets/img/service/wellness.jpg",
      icon: "/assets/img/service/heart.svg",
      text: "Stay proactive with our wellness maintenance services.",
      date: "Updated: January 3, 2025",
      title: "Wellness Maintenance",
      text1:
        "Our wellness maintenance programs focus on preventing issues and optimizing your health.",
      text2:
        "Regular chiropractic care helps you stay active, pain-free, and ready to take on life’s challenges.",
      text3:
        "Maintain balance and well-being with our proactive, holistic approach to health care.",
    },
  ];   

  const [isOpen7, setIsOpen7] = useState(false);
  const [modalContent, setModalContent] = useState({});

  function toggleModalFour() {
    setIsOpen7(!isOpen7);
  }

  return (
    <Fragment>
      <SectionContainer className="cavani_tm_section" navName="service">
        <div className="section_inner">
          <div className="cavani_tm_service w-full h-auto clear-both float-left mb-[70px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                Services
              </span>
            </div>
            <div className="service_list w-full h-auto clear-both float-left mt-[60px]">
              <ul className="ml-[-50px] flex flex-wrap">
                {services?.map((item, i) => (
                  <li className="mb-[50px] w-1/2 pl-[50px]" key={i}>
                    <div className="list_inner w-full h-full clear-both float-left relative border-solid border-[#b9b8c3] border py-[70px] px-[40px] text-center transition-all duration-300 hover:bg-[#333] rounded-xl">
                      <Image
                        // className="svg inline-block max-w-[60px] max-h-[60px] w-full h-full text-[#333] mb-[27px] transition-all duration-300"
                        className="inline-block w-[60px] h-[60px] text-[#333] mb-[27px] transition-all duration-300 mx-auto"
                        src={item.icon}
                        alt={true.toString()}
                        width={60}
                        height={60}
                      />
                      <h3 className="title font-medium text-[24px] text-[#333] mb-[15px] transition-all duration-300">
                        {item.title}
                      </h3>
                      <p className="text transition-all duration-300">
                        {item.text1}
                      </p>
                      <a
                        className="cavani_tm_full_link"
                        href="#"
                        onClick={() => {
                          setModalContent(item);
                          toggleModalFour();
                        }}
                      />
                      {/* Modalbox Info Start */}
                      {/* <img
                        className="popup_service_image opacity-0 invisible hidden absolute z-[-111]"
                        src={urlFor(item?.image)?.url()}
                        alt={true.toString()}
                      /> */}
                    </div>
                  </li>
                ))}
                {/* {services.map((item, i) => (
                  <li className="mb-[50px] w-1/2 pl-[50px]" key={i}>
                    <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[#b9b8c3] border py-[70px] px-[40px] text-center transition-all duration-300 hover:bg-[#333]">
                      <img
                        className="svg inline-block w-[60px] h-[60px] text-[#333] mb-[27px] transition-all duration-300"
                        src={item.icon}
                        alt={true.toString()}
                      />
                      <h3 className="title font-medium text-[24px] text-[#333] mb-[15px] transition-all duration-300">
                        {item.title}
                      </h3>
                      <p className="text transition-all duration-300">
                        {item.text}
                      </p>
                      <a
                        className="cavani_tm_full_link"
                        href="#"
                        onClick={() => {
                          setModalContent(item);
                          toggleModalFour();
                        }}
                      />
                      <img
                        className="popup_service_image opacity-0 invisible hidden absolute z-[-111]"
                        src={item.img}
                        alt={true.toString()}
                      />
                    </div>
                  </li>
                ))} */}
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>
      {modalContent?.title && (
        <Modal
          isOpen={isOpen7}
          onRequestClose={toggleModalFour}
          contentLabel="My dialog"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={300}
          openTimeoutMS={300}
        >
          <div className="cavani_tm_modalbox opened">
            <div className="box_inner">
              <div className="close">
                <a href="#" onClick={toggleModalFour}>
                  <i className="icon-cancel" />
                </a>
              </div>
              <div className="description_wrap">
                <div className="service_popup_informations w-full h-auto clear-both float-left">
                  <div className="image">
                    <img src="assets/img/thumbs/4-2.jpg" alt={true.toString()} />
                    {modalContent?.img && (
                      <div
                        className="main"
                        // data-img-url={urlFor(modalContent?.image)?.url()}
                        style={{
                          backgroundImage: `url(${modalContent.img})`,
                        }} // hard-coded background image
                      />
                    )}
                  </div>
                  <div className="main_title">
                    <h3>{modalContent.title}</h3>
                  </div>
                  <div className="descriptions w-full float-left">
                    <p className="mb-[15px]">{modalContent.text1}</p>
                    <p className="mb-[15px]">{modalContent.text2}</p>
                    <p>{modalContent.text3}</p>
                    {/* <PortableText
                      value={modalContent?.content}
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </Fragment>
  );
};
export default Service;
