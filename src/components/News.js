import { Fragment, useEffect, useState } from "react";
import Modal from "react-modal";
// import { urlFor } from "@/libs/sanity";
// import { PortableText } from "@portabletext/react";
import SectionContainer from "../layout/SectionContainer";

const newsData = [
  {
    title: "Introducing Luxury Pedicure Services",
    date: "March 17, 2025",
    tag: "Services",
    image: "",
    content: [
      "Relax and rejuvenate with our new luxury pedicure services at Artisan Nails.",
      "Enjoy a spa-quality experience featuring exfoliation, massage, and expert nail care, leaving your feet soft and refreshed.",
      "Visit us to learn more about this pampering service and schedule your appointment today.",
    ],
  },
  {
    title: "Nail Art & Design Special Offer",
    date: "March 3, 2025",
    tag: "Promotions",
    image: "",
    content: [
      "Unleash your creativity with our limited-time offer on nail art and design services.",
      "Our skilled nail artists create stunning, custom designs to reflect your unique style and personality.",
      "Don’t miss this chance to elevate your nails – book your appointment today!",
    ],
  },
  {
    title: "Exclusive Bridal Nail Packages",
    date: "February 26th, 2025",
    tag: "Promotions",
    image: "",
    content: [
      "Make your big day even more special with our exclusive bridal nail packages at Artisan Nails.",
      "From timeless French manicures to custom nail art that matches your wedding theme, we ensure your nails are picture-perfect for the occasion.",
      "Contact us today to schedule your consultation and let us help you shine on your special day.",
    ],
  },
  {
    title: "Grand Opening of Artisan Nails",
    date: "February 20, 2025",
    tag: "Events",
    image: "",
    content: [
      "We are thrilled to announce the grand opening of Artisan Nails! Celebrate this exciting milestone with us and enjoy exclusive promotions and giveaways.",
      "Experience premium nail care services, from classic manicures to intricate nail art, all tailored to your style.",
      "Book your appointment today and join the Artisan Nails family for a luxurious self-care journey!",
    ],
  },
];



const News = () => {

  useEffect(() => {
    var lists = document.querySelectorAll(".news_list > ul > li");
    // let box = document.querySelector(".cavani_fn_moving_box");
    // if (!box) {
    //   let body = document.querySelector("body");
    //   let div = document.createElement("div");
    //   div.classList.add("cavani_fn_moving_box");
    //   body.appendChild(div);
    // }

    // lists.forEach((list) => {
    //   list.addEventListener("mouseenter", (event) => {
    //     box.classList.add("opened");
    //     var imgURL = list.getAttribute("data-img");
    //     box.style.backgroundImage = `url(${imgURL})`;
    //     box.style.top = event.clientY - 50 + "px";

    //     if (imgURL === "") {
    //       box.classList.remove("opened");
    //       return false;
    //     }
    //   });
    //   list.addEventListener("mouseleave", () => {
    //     box.classList.remove("opened");
    //   });
    // });
  }, []);

  const [isOpen4, setIsOpen4] = useState(false);
  const [modalContent, setModalContent] = useState({});

  function toggleModalFour(value) {
    setIsOpen4(!isOpen4);
    setModalContent(value);
  }

  return (
    <Fragment>
      <SectionContainer navName="news">
        <div className="section_inner">
          <div className="cavani_tm_news w-full h-auto clear-both float-left mb-[70px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                Latest News
              </span>
            </div>
            <div className="news_list w-full h-auto clear-both float-left mt-[60px]">
              <ul className="relative z-[2]">
                {newsData?.map((item, i) => {
                  return (
                    <li
                      className="w-full py-[29px] px-0"
                      // data-img={urlFor(item?.image)?.url()}
                      key={i}
                    >
                      <div className="list_inner w-full clear-both h-auto flex items-center">
                        <span className="number w-[50px] min-w-[50px] h-[50px] text-center leading-[50px] inline-block rounded-full bg-[#b9b8c3] text-[#333] text-[16px] font-semibold font-poppins">
                          {`${i <= 9 ? 0 : ""}${i + 1}`}
                        </span>
                        <div className="details relative pl-[30px] ml-[29px]">
                          <div className="extra_metas">
                            <ul className="flex items-center flex-wrap mb-[2px]">
                              <li className="relative mr-[10px]">
                                <span className="text-[15px] text-[#777]">
                                  {item.date}
                                </span>
                              </li>
                              <li className="relative mr-[10px]">
                                <span className="text-[15px] text-[#777] pl-[10px]">
                                  <a
                                    className="text-[#777] transition-all duration-300 hover:text-[#000]"
                                    href="#"
                                    onClick={() => toggleModalFour(item)}
                                  >
                                    {item.tag}
                                  </a>
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="post_title">
                            <h3 className="m-0 p-0 leading-[1] font-semibold">
                              <a href="#" onClick={() => toggleModalFour(item)}>
                                {item.title}
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>
      {modalContent && (
        <Modal
          isOpen={isOpen4}
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
              <div className="description_wrap rounded-xl">
                <div className="news_popup_informations w-full h-auto clear-both float-left">
                  {modalContent?.image && (
                    <div className="image">
                      <img 
                      src={modalContent.image} 
                      alt={true.toString()} 
                      />
                      <div
                        className="main"
                        // data-img-url={urlFor(modalContent?.image)?.url()}
                        style={{ backgroundImage: `url(${modalContent.image})`}} // hard-coded background image
                      />
                    </div>
                  )}
                  <div className="details">
                    {modalContent?.date && (
                      <div className="meta">
                        <ul className="flex items-center flex-wrap mb-[2px]">
                          <li className="relative mr-[10px]">
                            <span className="text-[15px] text-[#777]">
                            {modalContent.date}
                            </span>
                          </li>
                          <li className="relative mr-[10px]">
                            <span className="text-[15px] text-[#777] pl-[10px]">
                              <a
                                className="text-[#777] transition-all duration-300 hover:text-[#000]"
                                href="#"
                              >
                                {modalContent.tag}
                              </a>
                            </span>
                          </li>
                        </ul>
                      </div>
                    )}
                    <div className="title">
                      <h3>{modalContent.title}</h3>
                    </div>
                    <div />
                  </div>
                  <div className="text w-full float-left">
                    {/* <p className="mb-[15px]">{modalContent.text1}</p>
                    <p className="mb-[15px]">{modalContent.text2}</p>
                    <p>{modalContent.text3}</p> */}
                    {/* <PortableText
                      value={modalContent?.content}
                    /> */}
                    {modalContent.content};
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
export default News;
