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
      icon: "/assets/img/service/stone-massage.svg",
      text: "Realign and revitalize your spine with our expert adjustments.",
      date: "Updated: January 3, 2025",
      title: "Hot Stone Massage",
      text1:
        "A soothing therapy where heated stones are placed on key points of the body, combined with massage techniques to relieve tension, improve circulation, and promote deep relaxation.",
      text2:
        "Experience the gentle power of heated stones as they work in harmony with expert massage techniques to ease tension and improve overall well-being.",
      text3:
        "Let the warmth of the stones and skilled hands rejuvenate your body, improve circulation, and promote a sense of calm and relaxation."
    },
    {
      img: "/assets/img/service/posture.jpg",
      icon: "/assets/img/service/body-scrubs.svg",
      text: "Improve your alignment and confidence with posture correction therapy.",
      date: "Updated: January 3, 2025",
      title: "Body Scrubs",
      text1:
        "Revitalize your skin with our rejuvenating body scrubs, designed to exfoliate, hydrate, and leave your skin feeling soft and smooth.",
      text2:
        "Our body scrubs gently remove dead skin cells, promoting healthy circulation and a radiant glow from head to toe.",
      text3:
        "Experience the ultimate skin renewal as our expertly crafted scrubs cleanse, nourish, and rejuvenate your body, leaving you refreshed and revitalized."
    },
    {
      img: "/assets/img/service/pain-management.jpg",
      icon: "/assets/img/service/oxygen-therapy.svg",
      text: "Alleviate chronic pain with our comprehensive pain management services.",
      date: "Updated: January 3, 2025",
      title: "Oxygen Therapy",
      text1:
        "Immerse yourself in the rejuvenating effects of oxygen therapy, designed to enhance your body's natural healing processes and promote overall wellness.",
      text2:
        "By delivering concentrated oxygen, this therapy helps improve circulation, boost energy levels, and support cellular regeneration for optimal health.",
      text3:
      "Experience the revitalizing benefits of oxygen therapy as it helps to reduce stress, enhance mental clarity, and restore your body's balance."
    },
    {
      img: "/assets/img/service/rehabilitation.jpg",
      icon: "/assets/img/service/infrared-sauna.svg",
      text: "Recover strength and function with our tailored rehabilitation therapies.",
      date: "Updated: January 3, 2025",
      title: "Infrared Sauna",
      text1:
        "Step into our infrared sauna and let the soothing heat penetrate deep into your body, relieving tension, detoxifying your skin, and promoting overall wellness.",
      text2:
        "The gentle infrared warmth helps to relax muscles, boost circulation, and support natural detoxification, leaving you feeling rejuvenated and refreshed.",
      text3:
        "Experience a tranquil escape as the infrared sauna's therapeutic heat works to improve your well-being and revitalize your energy."
    },
    {
      img: "/assets/img/service/rehabilitation.jpg",
      icon: "/assets/img/service/rehabilitation.svg",
      text: "Rejuvenate your body and mind with our soothing spa recovery treatments.",
      date: "Updated: January 3, 2025",
      title: "Spa Recovery Therapy",
      text1:
        "Our specialized recovery therapies combine relaxing techniques and therapeutic treatments to refresh your body and spirit.",
      text2:
        "We focus on easing tension, improving circulation, and promoting overall relaxation to restore your well-being.",
      text3:
        "Let our expert team help you recharge and feel your best with tailored recovery sessions.",
    },
    {
      img: "/assets/img/service/rehabilitation.jpg",
      icon: "/assets/img/service/rehabilitation.svg",
      text: "Enhance your well-being with our holistic spa maintenance services.",
      date: "Updated: January 3, 2025",
      title: "Wellness Spa Maintenance",
      text1:
        "Our wellness spa maintenance programs are designed to keep you relaxed, rejuvenated, and balanced.",
      text2:
        "Regular spa sessions help reduce stress, improve skin health, and support your overall well-being.",
      text3:
        "Stay refreshed and centered with our proactive approach to spa wellness, tailored just for you.",
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
              <span className="inline-block relative font-eb uppercase font-bold tracking-[8px]">
                Services
              </span>
            </div>
            <div className="service_list w-full h-auto clear-both float-left mt-[60px]">
              <ul className="ml-[-50px] flex flex-wrap">
                {services?.map((item, i) => (
                  <li className="mb-[50px] w-1/2 pl-[50px]" key={i}>
                    <div className="list_inner w-full h-full clear-both float-left relative border-solid border-[#b9b8c3] border py-[70px] px-[40px] text-center transition-all duration-300 hover:bg-[#333] rounded-xl"
                    style={{
                      background: "#F7F4EF",
                    }}>
                      <Image
                        // className="svg inline-block max-w-[60px] max-h-[60px] w-full h-full text-[#333] mb-[27px] transition-all duration-300"
                        className="inline-block w-[60px] h-[60px] mb-[27px] transition-all duration-300 mx-auto"
                        src={item.icon}
                        alt={true.toString()}
                        width={60}
                        height={60}
                      />
                      <h3 className="title font-eb font-semimedium text-[24px] mb-[15px] transition-all duration-300">
                        {item.title}
                      </h3>
                      <p className="text font-light transition-all duration-300">
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
                    <h3 className="font-eb font-semimedium">{modalContent.title}</h3>
                  </div>
                  <div className="font-light descriptions w-full float-left">
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
