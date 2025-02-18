import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionContainer from "../layout/SectionContainer";
import ProgressBar from "./progressBar";

const About = () => {
  const circleProgressData = [
    { language: "English", progress: 95 },
    { language: "Russian", progress: 100 },
    { language: "Ukrainian", progress: 100 },
  ];

  const progressBarData = [
    { bgcolor: "#A47764", completed: 95, title: "Relaxation Massages" },
    { bgcolor: "#A47764", completed: 90, title: "Hydrating Facials" },
    { bgcolor: "#A47764", completed: 85, title: "Body Scrubs & Wraps" },
    { bgcolor: "#A47764", completed: 95, title: "Aromatherapy Sessions" },
    { bgcolor: "#A47764", completed: 80, title: "Hot Stone Therapy" },
    { bgcolor: "#A47764", completed: 85, title: "Stress Relief Treatments" },
  ];

  const services = [
    {
      desc: "Beautiful minimalist design and great, fast response with support. Highly recommend. Thanks Marketify!.",
      img: "img/testimonials/1.jpg",
      info1: "Alexander Walker",
      info2: "Graphics Designer",
    },
    {
      desc: "I had a little problem and the support was just awesome to quickly solve the situation. And keep going on.",
      img: "img/testimonials/2.jpg",
      info1: "Baraka Clinton",
      info2: "Construction Engineering",
    },
    {
      desc: "These people really know what they are doing! Great customer support availability and supperb kindness.",
      img: "img/testimonials/3.jpg",
      info1: "Armin Van Buuren",
      info2: "Content Manager",
    },
  ];

  return (
    <SectionContainer navName="about">
      <div className="section_inner">
        <div className="cavani_tm_about w-full h-auto clear-both float-left">
          <div className="biography w-full h-auto clear-both float-left mb-[87px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-eb text-[#333] uppercase font-bold tracking-[8px]">
                About us
              </span>
            </div>
            <div className="wrapper w-full h-auto clear-both float-left flex justify-between mt-[55px]">
              <div className="left w-[40%]">
                <p className="mb-[15px]">
                  Welcome to <strong>Lumina Retreat Spa</strong>, your sanctuary for relaxation, rejuvenation, and holistic wellness. 
                  Our dedicated team of professionals is committed to providing an escape from the everyday, helping you recharge your body, mind, and spirit.
                </p>
                <p>
                  At Lumina Retreat Spa, we offer an extensive range of services, from soothing massages and revitalizing facials to luxurious body treatments, 
                  all tailored to your individual needs. Our mission is to create a serene, welcoming environment where you can find peace, balance, and lasting renewal.
                </p>
              </div>
              <div className="right w-[50%]">
                <ul>
                  {/* <li className="mb-[8px] w-full float-left flex">
                    <span className="first inline-block min-w-[100px] font-bold">
                      Name:
                    </span>
                    <span className="second inline-block">Amanda Tregallis</span>
                  </li> */}
                  <li className="mb-[8px] w-full float-left flex">
                    <span className="first inline-block min-w-[100px] font-bold">
                      Address:
                    </span>
                    <span className="second inline-block">
                      22 Champlain Blvd, Dieppe, NB, CA
                    </span>
                  </li>
                  {/* <li className="mb-[8px] w-full float-left flex">
                    <span className="first inline-block min-w-[100px] font-bold">
                      Study:
                    </span>
                    <span className="second inline-block">
                      Beauty Academy "World of Beauty"
                    </span>
                  </li> */}
                  {/* <li className="mb-[8px] w-full float-left flex">
                    <span className="first inline-block min-w-[100px] font-bold">
                      Degree:
                    </span>
                    <span className="second inline-block">
                      Lash and Brow Designer
                    </span>
                  </li> */}
                  <li className="mb-[8px] w-full float-left flex">
                    <span className="first inline-block min-w-[100px] font-bold">
                      Email:
                    </span>
                    <span className="second inline-block">
                      <a
                        className="text-[#7d7789] transition-all duration-300 hover:text-[#333]"
                        href="#"
                      >
                        LuminaSpa@gmail.com
                      </a>
                    </span>
                  </li>
                  <li className="w-full float-left">
                    <span className="first inline-block min-w-[100px] font-bold">
                      Phone:
                    </span>
                    <span className="second inline-block">
                      +1 506 111 1111
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="services w-full h-auto clear-both float-left mb-[87px]">
            <div className="wrapper w-full h-auto clear-both float-left flex justify-between">
              <div className="service_list w-[40%]">
                <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
                  <span className="inline-block relative font-eb text-[#333] uppercase font-bold tracking-[8px]">
                    Services
                  </span>
                </div>
                <div className="list w-full h-auto clear-both float-left mt-[55px]">
                  <ul>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      Relaxation Massages
                    </li>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      Hydrating Facials
                    </li>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      Body Scrubs & Wraps
                    </li>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      Aromatherapy Sessions
                    </li>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      Hot Stone Therapy
                    </li>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      Stress Relief Treatments
                    </li>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      Detox and Rejuvenation
                    </li>
                  </ul>
                </div>
              </div>
              <div className="service_list w-[50%]">
                <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
                  <span className="inline-block relative font-eb text-[#333] uppercase font-bold tracking-[8px]">
                    Interests
                  </span>
                </div>
                <div className="list w-full h-auto clear-both float-left mt-[55px]">
                <ul>
                  <li className="mb-[8px] w-full float-left relative pl-[25px]">
                    Luxury Spa Experiences
                  </li>
                  <li className="mb-[8px] w-full float-left relative pl-[25px]">
                    Holistic Skin Care
                  </li>
                  <li className="mb-[8px] w-full float-left relative pl-[25px]">
                    Personalized Wellness Journeys
                  </li>
                  <li className="mb-[8px] w-full float-left relative pl-[25px]">
                    Precision & Relaxation
                  </li>
                  <li className="mb-[8px] w-full float-left relative pl-[25px]">
                    Rejuvenation & Renewal
                  </li>
                  <li className="mb-[8px] w-full float-left relative pl-[25px]">
                    Transformative Spa Therapies
                  </li>
                  <li className="mb-[8px] w-full float-left relative pl-[25px]">
                    Innovative Beauty Solutions
                  </li>
                </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="skills w-full h-auto clear-both float-left">
            <div className="wrapper w-full h-auto clear-both float-left flex justify-between">
              <div className="programming w-[40%]">
                <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
                  <span className="inline-block relative font-eb text-[#333] uppercase font-bold tracking-[8px]">
                    Special Skills
                  </span>
                </div>
                <div className="cavani_progress w-full h-auto clear-both float-left mt-[55px]">
                  {progressBarData.map((item, idx) => (
                    <ProgressBar
                      key={idx}
                      bgcolor={item.bgcolor}
                      completed={item.completed}
                      title={item.title}
                    />
                  ))}
                </div>
              </div>
              {/* <div className="language w-[50%]">
                <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
                  <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                    Language
                  </span>
                </div>
                <div className="circular_progress_bar w-full h-auto clear-both float-left mt-[62px]">
                  <ul>
                    {circleProgressData.map((item, idx) => (
                      <li key={idx}>
                        <div className="list_inner">
                          <div
                            className="myCircle"
                            style={{ width: 120, height: 120 }}
                          >
                            <CircularProgressbar
                              width={120}
                              value={item.progress}
                              strokeWidth={3}
                              styles={buildStyles({
                                pathColor: "#662D91",
                                trailColor: "rgba(0,0,0,0)",
                              })}
                            />
                            <span className="number">{item.progress}%</span>
                            <div className="title">
                              <span>{item.language}</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
          <div className="resume w-full h-auto clear-both float-left mb-[75px]">
            <div className="wrapper w-full h-auto clear-both float-left flex justify-between">
              <div className="education w-[40%]">
                <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
                  <span className="inline-block relative font-eb text-[#333] uppercase font-bold tracking-[8px]">
                    Education
                  </span>
                </div>
                <div className="list w-full h-auto clear-both float-left">
                  <div className="univ w-full h-auto clear-both float-left mt-[55px]">
                    <ul className="relative inline-block pt-[10px]">
                      <li className="w-full float-left relative pl-[20px] pb-[45px]">
                        <div className="list_inner w-full h-auto clear-both flex relative">
                          <div className="time w-1/2 pr-[20px]">
                            <span className="inline-block py-[5px] px-[25px] bg-F7F4EF rounded-[50px] text-[14px] whitespace-nowrap">
                              2013
                            </span>
                          </div>
                          <div className="place w-1/2 pl-[20px]">
                            <h3 className="text-[16px] mb-[2px] font-semibold">
                              National Spa Academy
                            </h3>
                            <span className="text-[14px]">
                              Advanced Certification in Spa Management
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className="w-full float-left relative pl-[20px] pb-[45px]">
                        <div className="list_inner w-full h-auto clear-both flex relative">
                          <div className="time w-1/2 pr-[20px]">
                            <span className="inline-block py-[5px] px-[25px] bg-F7F4EF rounded-[50px] text-[14px] whitespace-nowrap">
                              2011
                            </span>
                          </div>
                          <div className="place w-1/2 pl-[20px]">
                            <h3 className="text-[16px] mb-[2px] font-semibold">
                              Wellness Institute of America
                            </h3>
                            <span className="text-[14px]">
                              Diploma in Holistic Therapy
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className="w-full float-left relative pl-[20px]">
                        <div className="list_inner w-full h-auto clear-both flex relative">
                          <div className="time w-1/2 pr-[20px]">
                            <span className="inline-block py-[5px] px-[25px] bg-F7F4EF rounded-[50px] text-[14px] whitespace-nowrap">
                              2009
                            </span>
                          </div>
                          <div className="place w-1/2 pl-[20px]">
                            <h3 className="text-[16px] mb-[2px] font-semibold">
                              International Massage Academy
                            </h3>
                            <span className="text-[14px]">
                              Certification in Therapeutic Massage
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="experience w-1/2">
                <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
                  <span className="inline-block relative font-eb text-[#333] uppercase font-bold tracking-[8px]">
                    Experience
                  </span>
                </div>
                <div className="list w-full h-auto clear-both float-left">
                  <div className="univ w-full h-auto clear-both float-left mt-[55px]">
                    <ul className="relative inline-block pt-[10px]">
                      <li className="w-full float-left relative pl-[20px] pb-[45px]">
                        <div className="list_inner w-full h-auto clear-both flex relative">
                          <div className="time w-1/2 pr-[20px]">
                            <span className="inline-block py-[5px] px-[25px] bg-F7F4EF rounded-[50px] text-[14px] whitespace-nowrap">
                              2020 - present
                            </span>
                          </div>
                          <div className="place w-1/2 pl-[20px]">
                            <h3 className="text-[16px] mb-[2px] font-semibold">
                              Lumina Retreat Spa
                            </h3>
                            <span className="text-[14px]">
                              Licensed Spa Therapist
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className="w-full float-left relative pl-[20px] pb-[45px]">
                        <div className="list_inner w-full h-auto clear-both flex relative">
                          <div className="time w-1/2 pr-[20px]">
                            <span className="inline-block py-[5px] px-[25px] bg-F7F4EF rounded-[50px] text-[14px] whitespace-nowrap">
                              2015 - 2017
                            </span>
                          </div>
                          <div className="place w-1/2 pl-[20px]">
                            <h3 className="text-[16px] mb-[2px] font-semibold">
                              Serenity Spa & Wellness
                            </h3>
                            <span className="text-[14px]">
                              Spa Therapist
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className="w-full float-left relative pl-[20px]">
                        <div className="list_inner w-full h-auto clear-both flex relative">
                          <div className="time w-1/2 pr-[20px]">
                            <span className="inline-block py-[5px] px-[25px] bg-F7F4EF rounded-[50px] text-[14px] whitespace-nowrap">
                              2014 - 2015
                            </span>
                          </div>
                          <div className="place w-1/2 pl-[20px]">
                            <h3 className="text-[16px] mb-[2px] font-semibold">
                              Harmony Spa
                            </h3>
                            <span className="text-[14px]">
                              Spa Intern
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="partners w-full h-auto clear-both float-left mb-[92px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                Partners
              </span>
            </div>
            <div className="list w-full clear-both float-left overflow-hidden border-solid border-[#E5EDF4] border-2 mt-[62px]">
              <ul className="mt-[-2px] mr-[-10px] mb-[-2px] ml-[-2px] pt-[2px] float-left pl-[2px]">
                <li className="float-left w-1/4 border-solid border-[#E5EDF4] border-2 text-center h-[130px] leading-[130px] relative mt-[-2px] ml-[-2px] overflow-hidden">
                  <div className="list_inner w-full h-full clear-both float-left opacity-50 transition-all duration-300 hover:opacity-100">
                    <img
                      className="inline-block max-w-[65%] max-h-[65px]"
                      src="assets/img/partners/1.png"
                      alt={true.toString()}
                    />
                    <a className="cavani_tm_full_link" href="#" />
                  </div>
                </li>
                <li className="float-left w-1/4 border-solid border-[#E5EDF4] border-2 text-center h-[130px] leading-[130px] relative mt-[-2px] ml-[-2px] overflow-hidden">
                  <div className="list_inner w-full h-full clear-both float-left opacity-50 transition-all duration-300 hover:opacity-100">
                    <img
                      className="inline-block max-w-[65%] max-h-[65px]"
                      src="assets/img/partners/2.png"
                      alt={true.toString()}
                    />
                    <a className="cavani_tm_full_link" href="#" />
                  </div>
                </li>
                <li className="float-left w-1/4 border-solid border-[#E5EDF4] border-2 text-center h-[130px] leading-[130px] relative mt-[-2px] ml-[-2px] overflow-hidden">
                  <div className="list_inner w-full h-full clear-both float-left opacity-50 transition-all duration-300 hover:opacity-100">
                    <img
                      className="inline-block max-w-[65%] max-h-[65px]"
                      src="assets/img/partners/3.png"
                      alt={true.toString()}
                    />
                    <a className="cavani_tm_full_link" href="#" />
                  </div>
                </li>
                <li className="float-left w-1/4 border-solid border-[#E5EDF4] border-2 text-center h-[130px] leading-[130px] relative mt-[-2px] ml-[-2px] overflow-hidden">
                  <div className="list_inner w-full h-full clear-both float-left opacity-50 transition-all duration-300 hover:opacity-100">
                    <img
                      className="inline-block max-w-[65%] max-h-[65px]"
                      src="assets/img/partners/4.png"
                      alt={true.toString()}
                    />
                    <a className="cavani_tm_full_link" href="#" />
                  </div>
                </li>
                <li className="float-left w-1/4 border-solid border-[#E5EDF4] border-2 text-center h-[130px] leading-[130px] relative mt-[-2px] ml-[-2px] overflow-hidden">
                  <div className="list_inner w-full h-full clear-both float-left opacity-50 transition-all duration-300 hover:opacity-100">
                    <img
                      className="inline-block max-w-[65%] max-h-[65px]"
                      src="assets/img/partners/5.png"
                      alt={true.toString()}
                    />
                    <a className="cavani_tm_full_link" href="#" />
                  </div>
                </li>
                <li className="float-left w-1/4 border-solid border-[#E5EDF4] border-2 text-center h-[130px] leading-[130px] relative mt-[-2px] ml-[-2px] overflow-hidden">
                  <div className="list_inner w-full h-full clear-both float-left opacity-50 transition-all duration-300 hover:opacity-100">
                    <img
                      className="inline-block max-w-[65%] max-h-[65px]"
                      src="assets/img/partners/1.png"
                      alt={true.toString()}
                    />
                    <a className="cavani_tm_full_link" href="#" />
                  </div>
                </li>
                <li className="float-left w-1/4 border-solid border-[#E5EDF4] border-2 text-center h-[130px] leading-[130px] relative mt-[-2px] ml-[-2px] overflow-hidden">
                  <div className="list_inner w-full h-full clear-both float-left opacity-50 transition-all duration-300 hover:opacity-100">
                    <img
                      className="inline-block max-w-[65%] max-h-[65px]"
                      src="assets/img/partners/2.png"
                      alt={true.toString()}
                    />
                    <a className="cavani_tm_full_link" href="#" />
                  </div>
                </li>
                <li className="float-left w-1/4 border-solid border-[#E5EDF4] border-2 text-center h-[130px] leading-[130px] relative mt-[-2px] ml-[-2px] overflow-hidden">
                  <div className="list_inner w-full h-full clear-both float-left opacity-50 transition-all duration-300 hover:opacity-100">
                    <img
                      className="inline-block max-w-[65%] max-h-[65px]"
                      src="assets/img/partners/3.png"
                      alt={true.toString()}
                    />
                    <a className="cavani_tm_full_link" href="#" />
                  </div>
                </li>
              </ul>
            </div>
          </div> */}
          {/* <div className="testimonials w-full h-auto clear-both float-left mb-[90px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                Testimonials
              </span>
            </div>
            <div className="list w-full h-auto clear-both float-left mt-[75px]">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                }}
                className="cursor-e-resize custom-class"
              >
                <SwiperSlide>
                  <div className="list_inner w-full h-auto clear-both float-left relative">
                    <div className="text w-full h-auto clear-both float-left relative border-solid border-[#E5EDF4] border-2 p-[40px] mb-[30px]">
                      <i className="icon-quote-left absolute z-[1] text-[30px] top-[-29px] left-[50px]" />
                      <p>
                        Beautiful minimalist design and great, fast response
                        with support. Highly recommend. Thanks Marketify!
                      </p>
                    </div>
                    <div className="details w-full h-auto clear-both float-left flex items-center pl-[20px]">
                      <div className="image relative w-[60px] h-[60px]">
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full"
                          data-img-url="assets/img/testimonials/1.jpg"
                        />
                      </div>
                      <div className="info pl-[20px]">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Alexander Walker
                        </h3>
                        <span className="text-[14px]">Graphic Designer</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="list_inner w-full h-auto clear-both float-left relative">
                    <div className="text w-full h-auto clear-both float-left relative border-solid border-[#E5EDF4] border-2 p-[40px] mb-[30px]">
                      <i className="icon-quote-left absolute z-[1] text-[30px] top-[-29px] left-[50px]" />
                      <p>
                        These people really know what they are doing! Great
                        customer support availability and supperb kindness.
                      </p>
                    </div>
                    <div className="details w-full h-auto clear-both float-left flex items-center pl-[20px]">
                      <div className="image relative w-[60px] h-[60px]">
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full"
                          data-img-url="assets/img/testimonials/2.jpg"
                        />
                      </div>
                      <div className="info pl-[20px]">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Armin Van Buuren
                        </h3>
                        <span className="text-[14px]">Content Manager</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="list_inner w-full h-auto clear-both float-left relative">
                    <div className="text w-full h-auto clear-both float-left relative border-solid border-[#E5EDF4] border-2 p-[40px] mb-[30px]">
                      <i className="icon-quote-left absolute z-[1] text-[30px] top-[-29px] left-[50px]" />
                      <p>
                        I had a little problem and the support was just awesome
                        to quickly solve the situation. And keep going on.
                      </p>
                    </div>
                    <div className="details w-full h-auto clear-both float-left flex items-center pl-[20px]">
                      <div className="image relative w-[60px] h-[60px]">
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full"
                          data-img-url="assets/img/testimonials/3.jpg"
                        />
                      </div>
                      <div className="info pl-[20px]">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Baraka Clinton
                        </h3>
                        <span className="text-[14px]">English Teacher</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div> */}
        </div>
      </div>
    </SectionContainer>
  );
};
export default About;
