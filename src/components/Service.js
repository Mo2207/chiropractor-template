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
      img: "/assets/img/service/manicure-service.jpg",
      icon: "/assets/img/service/manicure.svg",
      text: "Pamper your hands with our luxurious classic manicure services.",
      date: "Updated: January 3, 2025",
      title: "Classic Manicures",
      text1:
        "At Artisan Nails, we specialize in classic manicures that leave your hands looking and feeling their best. Our skilled technicians focus on shaping, buffing, and polishing your nails to perfection.",
      text2:
        "A classic manicure is the foundation of elegant hands. Enjoy a relaxing experience that revitalizes your nails and cuticles.",
      text3:
        "Whether it’s for a special occasion or everyday beauty, our manicures ensure your nails are always on point.",
    },
    {
      img: "/assets/img/service/gel-polish-service.jpg",
      icon: "/assets/img/service/nail-polish.svg",
      text: "Achieve long-lasting shine with our expert gel polish applications.",
      date: "Updated: January 3, 2025",
      title: "Gel Polish Applications",
      text1:
        "Our gel polish services are perfect for those who want vibrant, long-lasting nails. Choose from a wide range of colors and finishes to match your personal style.",
      text2:
        "Our expert technicians ensure a flawless application that resists chipping and keeps your nails looking stunning for weeks.",
      text3:
        "Whether you prefer bold colors or neutral tones, we’ve got the perfect gel polish for you.",
    },
    {
      img: "/assets/img/service/nail-art-service.jpg",
      icon: "/assets/img/service/nail-art.svg",
      text: "Express yourself with custom nail art and designs.",
      date: "Updated: January 3, 2025",
      title: "Nail Art & Designs",
      text1:
        "Unleash your creativity with our personalized nail art services. From simple patterns to intricate designs, we bring your vision to life.",
      text2:
        "Our skilled nail artists use precision techniques to ensure every detail is perfect, creating nails that are truly one of a kind.",
      text3:
        "Let your nails be a reflection of your unique personality and style.",
    },
    {
      img: "/assets/img/service/acrylic-nails-service.jpg",
      icon: "/assets/img/service/acrylic.svg",
      text: "Enhance your nails with durable acrylic solutions.",
      date: "Updated: January 3, 2025",
      title: "Acrylic Nail Enhancements",
      text1:
        "Our acrylic nail services are designed to add strength, length, and beauty to your natural nails. Perfect for creating bold, long-lasting styles.",
      text2:
        "We tailor each application to your preferences, ensuring your nails look natural and feel comfortable.",
      text3:
        "Enjoy the perfect blend of durability and elegance with our acrylic enhancements.",
    },
    {
      img: "/assets/img/service/pedicure-service.jpg",
      icon: "/assets/img/service/foot.svg",
      text: "Relax and rejuvenate with our luxurious pedicure treatments.",
      date: "Updated: January 3, 2025",
      title: "Luxury Pedicures",
      text1:
        "Indulge in a spa-quality pedicure experience that soothes tired feet and leaves your nails perfectly groomed.",
      text2:
        "Our pedicure treatments include exfoliation, massage, and polish for a complete rejuvenation.",
      text3:
        "Whether it’s for self-care or a special occasion, our pedicures will have you stepping out in style.",
    },
    {
      img: "/assets/img/service/bridal-nail-service.jpg",
      icon: "/assets/img/service/diamond-ring.svg",
      text: "Prepare for your big day with our bridal nail packages.",
      date: "Updated: January 3, 2025",
      title: "Bridal Nail Packages",
      text1:
        "Make your wedding day even more special with nails that are perfectly tailored to your style. From timeless elegance to show-stopping designs, we’ve got you covered.",
      text2:
        "Our bridal packages include consultations to ensure your nails are exactly as you envision for your big day.",
      text3:
        "Let our team help you shine from head to fingertips on your wedding day.",
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
                    <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[#b9b8c3] border py-[70px] px-[40px] text-center transition-all duration-300 hover:bg-[#333] rounded-xl">
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
