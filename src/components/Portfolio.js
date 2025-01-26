import Isotope from "isotope-layout";
import dynamic from "next/dynamic";
import Modal from "react-modal";
import { Fragment, useEffect, useRef, useState } from "react";
import SectionContainer from "../layout/SectionContainer";
import { dataImage } from "../utils";
import ImageView from "./ImagePopup";
// import { urlFor } from "@/libs/sanity";
import { Detail, Soundcloud } from "./Popup";
// import { PortableText } from "@portabletext/react";

// hard-coded data for portfolio section
const portfolioData = [
  {
    title: "Hot Stone Massage",
    category: "Hot Stone Massage",
    image: "",
    content: [
      "A soothing therapy where heated stones are placed on key points of the body, combined with massage techniques to relieve tension, improve circulation, and promote deep relaxation.",
      "Experience the gentle power of heated stones as they work in harmony with expert massage techniques to ease tension and improve overall well-being.",
      "Let the warmth of the stones and skilled hands rejuvenate your body, improve circulation, and promote a sense of calm and relaxation."
    ],
  },
  {
    title: "Body Scrubs",
    category: "Body Scrubs",
    image: "",
    content: [
      "Revitalize your skin with our rejuvenating body scrubs, designed to exfoliate, hydrate, and leave your skin feeling soft and smooth.",
      "Our body scrubs gently remove dead skin cells, promoting healthy circulation and a radiant glow from head to toe.",
      "Experience the ultimate skin renewal as our expertly crafted scrubs cleanse, nourish, and rejuvenate your body, leaving you refreshed and revitalized."
    ],
  },
  {
    title: "Oxygen Therapy",
    category: "Oxygen Therapy",
    image: "",
    content: [
      "Immerse yourself in the rejuvenating effects of oxygen therapy, designed to enhance your body's natural healing processes and promote overall wellness.",
      "By delivering concentrated oxygen, this therapy helps improve circulation, boost energy levels, and support cellular regeneration for optimal health.",
      "Experience the revitalizing benefits of oxygen therapy as it helps to reduce stress, enhance mental clarity, and restore your body's balance."
    ],
  },
  {
    title: "Infrared Sauna",
    category: "Infrared Sauna",
    image: "",
    content: [
      "Step into our infrared sauna and let the soothing heat penetrate deep into your body, relieving tension, detoxifying your skin, and promoting overall wellness.",
      "The gentle infrared warmth helps to relax muscles, boost circulation, and support natural detoxification, leaving you feeling rejuvenated and refreshed.",
      "Experience a tranquil escape as the infrared sauna's therapeutic heat works to improve your well-being and revitalize your energy."
    ],
  },
  {
    title: "Spa Recovery Therapy",
    category: "Spa Recovery Therapy",
    image: "",
    content: [
      "Our specialized recovery therapies combine relaxing techniques and therapeutic treatments to refresh your body and spirit.",
      "We focus on easing tension, improving circulation, and promoting overall relaxation to restore your well-being.",
      "Let our expert team help you recharge and feel your best with tailored recovery sessions."
    ],
  },
  {
    title: "Wellness Spa Maintenance",
    category: "Wellness Spa Maintenance",
    image: "",
    content: [
      "Our wellness spa maintenance programs are designed to keep you relaxed, rejuvenated, and balanced.",
      "Regular spa sessions help reduce stress, improve skin health, and support your overall well-being.",
      "Stay refreshed and centered with our proactive approach to spa wellness, tailored just for you."
    ],
  },
];

const Portfolio = () => {
  const categories = [
    "Hot Stone Massage",
    "Body Scrubs",
    "Oxygen Therapy",
    "Infrared Sauna",
    "Spa Recovery Therapy",
    "Wellness Spa Maintenance"
  ];

  const ModalVideo = dynamic(
    () => {
      return import("react-modal-video");
    },
    { ssr: false }
  );

  // Isotope
  const isotope = useRef(null);
  const [filterKey, setFilterKey] = useState("*");
  const [isIsotopeInitialized, setIsIsotopeInitialized] = useState(false);

  useEffect(() => {
    const imagesLoaded = require("imagesloaded");
    const portfolioList = document.querySelector(".gallery_zoom");

    if (portfolioList && !isIsotopeInitialized) {
      // Загружаем изображения перед инициализацией Isotope
      var imgLoad = imagesLoaded(".portfolio_list");
      imgLoad.on("done", function () {
        isotope.current = new Isotope(".gallery_zoom", {
          itemSelector: ".item__",
          masonry: {
            columnWidth: ".item__",
          },
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false,
          },
        });
        setIsIsotopeInitialized(true);
      });
    }

    return () => {
      // Очищаем экземпляр Isotope при размонтировании компонента
      if (isotope.current) {
        isotope.current.destroy();
      }
    };
  }, [isIsotopeInitialized]);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };

  const activeBtn = (value) => (value === filterKey ? "active" : "");

  useEffect(() => {
    setTimeout(() => {
      dataImage();
    }, 2000);
  });

  const [modalContent, setModalContent] = useState({});
  const [category, setCategory] = useState(null);
  const filteredData = category ? portfolioData.filter(item => item.category === category) : portfolioData; // replaced sanity {data} with portfolioData
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  // Modal with title, image and content
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal(value) {
    setIsModalOpen(!isModalOpen);
    setModalContent(value);
  }

  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }

  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <Fragment>
      <ImageView />
      <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpen2}
        videoId="337293658"
        animationSpeed={300}
        onClose={() => setIsOpen2(false)}
        modalVideoClose="mfp-close"
      />
      <ModalVideo
        channel="youtube"
        autoplay={true}
        isOpen={isOpen}
        videoId="7e90gBu4pas"
        animationSpeed={300}
        onClose={() => setIsOpen(false)}
        modalVideoClose="mfp-close"
      />
      <Soundcloud isOpen3={isOpen3} toggleModalThree={toggleModalThree} />
      <Detail isOpen4={isOpen4} toggleModalFour={toggleModalFour} />
      <SectionContainer navName="portfolio">
        <div className="section_inner">
          <div className="cavani_tm_portfolio w-full h-auto clear-both float-left mb-[70px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-eb text-[#333] uppercase font-bold tracking-[8px]">
                Creative Portfolio
              </span>
            </div>
            <div className="portfolio_filter w-full h-auto clear-both float-left text-left relative px-0 pt-[55px] pb-[42px]">
              <ul>
                <li className="mr-[40px] inline-block">
                  {/* <a
                    href="#"
                    className={`current text-[#333] font-poppins font-medium transition-all duration-300 ${activeBtn("*")}`}
                    data-filter="*"
                    onClick={handleFilterKeyChange("*")}
                  >
                    All
                  </a> */}
                  <button
                    className={`current font-medium transition-all duration-300 ${category === null && 'underline'}`}
                    onClick={() => setCategory(null)}
                  >
                    All
                  </button>
                </li>
                {/* <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className={`text-[#333] font-poppins font-medium transition-all duration-300 ${activeBtn(
                      "eyebrow-wax"
                    )}`}
                    data-filter=".eyebrow-wax"
                    onClick={handleFilterKeyChange("eyebrow-wax")}
                  >
                    Eyebrow Wax
                  </a>
                </li>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className={`text-[#333] font-poppins font-medium transition-all duration-300 ${activeBtn(
                      "youtube"
                    )}`}
                    data-filter=".youtube"
                    onClick={handleFilterKeyChange("youtube")}
                  >
                    Eyebrow Tint & Shape
                  </a>
                </li>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className={`text-[#333] font-poppins font-medium transition-all duration-300 ${activeBtn(
                      "soundcloud"
                    )}`}
                    data-filter=".soundcloud"
                    onClick={handleFilterKeyChange("soundcloud")}
                  >
                    Eyebrows Lamination
                  </a>
                </li>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className={`text-[#333] font-poppins font-medium transition-all duration-300 ${activeBtn(
                      "image"
                    )}`}
                    data-filter=".image"
                    onClick={handleFilterKeyChange("image")}
                  >
                    Eyelash Lift and Tint
                  </a>
                </li>
                <li className="inline-block">
                  <a
                    href="#"
                    className={`text-[#333] font-poppins font-medium transition-all duration-300 ${activeBtn(
                      "detail"
                    )}`}
                    data-filter=".detail"
                    onClick={handleFilterKeyChange("detail")}
                  >
                    Classic Fill
                  </a>
                </li> */}
                {categories.map((item, i) => (
                  <li key={`category-${i}`} className="inline-block">
                    <button
                      key={`category-${i}`}
                      className={`text-[#333] font-medium transition-all duration-300 ${category === item && 'underline'}`}
                      onClick={() => setCategory(item)}
                    >{item}</button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="portfolio_list w-full h-auto clear-both float-left">
              <ul className="flex flex-wrap">
                {filteredData?.map((item, i) => {
                  return (
                    <li key={`portfolio-${i}`} className="youtube mb-[50px] w-1/2 float-left pl-[50px] item__">
                      <button onClick={() => toggleModal(item)} className="w-full h-full">
                      <div className="list_inner w-full h-full clear-both float-left relative overflow-hidden">
                          <div
                            className="image relative bg-cover bg-center rounded-xl w-full"
                            style={{ 
                              backgroundImage: `url(${item.image})`,
                              height: '230px',
                              backgroundSize: 'cover',
                              backgroundRepeat: 'no-repeat',
                              backgroundPosition: 'center',
                            }}
                          >
                            <div className="details rounded-1xl">
                              <h3 className="text-[16px] mb-[2px] font-semibold">{item.title}</h3>
                            </div>
                          </div>
                      </div>
                      </button>
                    </li> 
                  )
                })}
                {/* <li className="youtube mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt={true.toString()}
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url="assets/img/portfolio/1.jpg"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Ave Brook
                        </h3>
                        <span className="text-[14px]">Youtube</span>
                      </div>
                      <a
                        onClick={() => setIsOpen(true)}
                        className="cavani_tm_full_link popup-youtube"
                        href="#"
                      />
                    </div>
                  </div>
                </li> */}
                {/* Остальные элементы галереи */}
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>
      {modalContent && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={toggleModal}
          contentLabel="Portfolio"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={300}
          openTimeoutMS={300}
        >
          <div className="cavani_tm_modalbox opened">
            <div className="box_inner">
              <div className="close">
                <a href="#" onClick={toggleModal}>
                  <i className="icon-cancel" />
                </a>
              </div>
              <div className="description_wrap rounded-xl">
                <div className="news_popup_informations w-full h-auto clear-both float-left">
                  {modalContent?.image && (
                    <div className="image" style={{
                      backgroundImage: `url(${modalContent.image})`,
                      height: '350px',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      borderRadius: '20px'
                    }} // hard-coded background image 
                      alt={modalContent.title}>
                    </div>
                  )}
                  <div className="details">
                    <div className="title">
                      <h3 className="font-eb font-semimedium">{modalContent.title}</h3>
                    </div>
                    <div />
                  </div>
                  <div className="text w-full font-light float-left">
                    {/* <p className="mb-[15px]">{modalContent.text1}</p>
                    <p className="mb-[15px]">{modalContent.text2}</p>
                    <p>{modalContent.text3}</p> */}
                    {/* <PortableText
                      value={modalContent?.content}
                    /> */}
                    {modalContent.content}
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
export default Portfolio;
