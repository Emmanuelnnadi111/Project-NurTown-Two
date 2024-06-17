import { React, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { navLinks } from "./navlinks";
import Header from "../../header/Header";

const Home = () => {
  return (
    <div className="contain font-Roboto  lg:p-0">
      <Header />
      {/* first-section */}
      <div className="first-section w-[100%] lg:w-[80%]  m-auto p-4  ">
        <div className="first-section-text flex flex-col md:flex-row lg:flex-row justify-between">
          <div className="w-[72%] flex items-start justify-center flex-col ">
            <div>
              <h1 className="text-Grey text-5xl sm:text-7xl font-light">
                PROJECT
              </h1>
              <h1 className="text-5xl sm:text-7xl font-bold text-Gray1 text-start">
                Lorum
              </h1>
            </div>
            <div className="arrow flex mt-20 gap-9">
              <button className=" px-6 py-4 border text-offBlack">
                <i class="bx bx-arrow-back"></i>
              </button>
              <button className="px-6 py-4 bg-btnBg text-offBlack">
                <i class="bx bx-right-arrow-alt"></i>
              </button>
            </div>
            <div className="num flex  space-x-16 mt-10 text-2xl text-Grey">
              <div className="num1">
                <p>0</p>
                <p>1</p>
              </div>
              <p>/</p>
              <p>02</p>
            </div>
          </div>
          <div className="first-section-image w-[100%] relative">
            <img src="./image/Rectangle 6.png" alt="" className="w-[100%]" />
            <button className="bg-white tracking-extraWide p-6 pr-6 text-Gray1 text-xs absolute bottom-0 ">
              VIEW PROJECT <i class="bx bx-right-arrow-alt"></i>
            </button>
          </div>
        </div>
      </div>
      {/* second-section */}
      <div className="second-section w-[100%] lg:w-[80%] py-20 m-auto p-4">
        <div className="wrap flex flex-col lg:flex-row w-[100%] lg:w-[85%] m-auto  lg:space-x-9 bg-sectionBg  ">
          <div className="wrap-image w-[100%] md:w-[90] m-auto lg:w-[40%]  ">
            <div className="image1 w-[100%]">
              <img src="./image/Rectangle 8.png" alt="" className="w-[100%]" />
              <img
                src="./image/Rectangle 10.png"
                alt=""
                className="w-[100%] mt-10"
              />
            </div>
          </div>
          <div className="second-section-text w-[100%] mt-14 flex flex-col lg:flex-row lg:space-x-9 ">
            <div className="image2 w-[100%]  lg:w-[60%]">
              <img src="./image/Rectangle 9.png" alt="" className="w-[100%]" />
            </div>
            <div className="w-[100%] lg:w-[90%]">
              <h1 className="text-Grey text-5xl  relative  lg:bottom-14 sm:text-7xl font-light">
                About
              </h1>
              <p className="text-offBlack text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <button className="bg-white tracking-extraWide p-6 pr-6 text-Gray1 text-xs mt-14  ">
                READ MORE <i class="bx bx-right-arrow-alt"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* section-three */}
      <div className="section-three py-10 p-4">
        <h1 className="w-[100%] lg:w-[80%] text-Grey text-3xl sm:text-7xl m-auto font-light">
          Main Focus/Mission Statement
        </h1>
        <div className="section w-[100%] lg:w-[80%] m-auto flex flex-col lg:flex-row py-20 ">
          <div className="sec1 flex space-x-3 lg:space-x-10 w-[100%]">
            <img src="./image/1.png" alt="" className="w-[10%] h-32 " />
            <p className="text-2xl pr-0 sm:text-2xl sm:pr-60">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur, lectus et facilisis placerat.
            </p>
          </div>
          <div className="sec2 flex space-x-3 mt-5 lg:mt-0 lg:space-x-10 w-[100%] ">
            <img src="./image/2.png" alt="" className="w-[10%] h-32 " />
            <p className="text-xl md:text-3xl lg:text-2xl pr-0 sm:pr-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur, lectus et facilisis placerat, magna mauris porttitor
              tortor, a auctor est felis ut nisl.
            </p>
          </div>
        </div>
      </div>
      {/* section-four */}
      <div className="section-four py-10 p-4">
        <div className="contain w-[100%] lg:w-[80%] m-auto">
          <h1 className="text-5xl sm:text-7xl text-Grey font-light">
            Our Projects
          </h1>
          <div className="image-flex1  flex flex-col sm:flex-row gap-4 lg:space-x-5 w-[100%] mt-10 ">
            <div className="backdrop-image relative w-[100%]">
              <img src="./image/Rectangle 12.png" alt="" className="w-[100%]" />
              <div className="backdrop bg-bgFooter w-full h-full absolute top-0 bg-opacity-50 p-10  ">
                <div className="">
                  <h1 className="text-2xl sm:text-6xl  text-white">Sample</h1>
                  <h1 className="text-2xl sm:text-6xl  text-white">Project</h1>
                  <button className=" tracking-extraWide mt-4 sm:mt-10 text-white text-xs ">
                    VIEW MORE <i class="bx bx-right-arrow-alt"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="w-[100%]">
              <img src="./image/image 15.png" alt="" className="w-[100%]" />
            </div>
          </div>
          <div className="image-flex2 flex flex-col gap-5  sm:flex-row lg:space-x-5 mt-10 w-[100%]">
            <img
              src="./image/image 16.png"
              alt=""
              className="w-[100%] md:w-[35%] lg:w-[50%]"
            />
            <img
              src="./image/image 17.png"
              alt=""
              className="w-[100%] md:w-[30%] lg:w-[90%]"
            />
            <img
              src="./image/image 18.png"
              alt=""
              className="w-[100%] md:w-[30%] lg:w-[60%]"
            />
          </div>
          <button className="float-right mt-10 bg-bgFooter text-center text-xs px-6 py-7 text-white tracking-extraWide  ">
            ALL PROJECTS <i class="bx bx-right-arrow-alt"></i>
          </button>
        </div>
      </div>
      {/* contactUs */}
      <div className="contactU py-10 mt-10 p-4">
        <div className="contain w-[100%] mt-10 md:w-[90%] lg:w-[80%] m-auto ">
          <h1 className="text-Grey text-5xl sm:text-7xl ">Contact Us</h1>
          <div className="wrap-form flex flex-col lg:flex-row justify-between gap-9 lg:space-x-5 mt-10 ">
            <div className="form flex flex-col w-[100%] lg:w-[70%]">
              <form action="" className="flex flex-col w-[100%] gap-4">
                <input
                  type="text"
                  name="text"
                  id="text-form"
                  className=" p-3 bg-formBg rounded-md"
                  placeholder="Name"
                />
                <input
                  type="number"
                  name="number"
                  id="number-form"
                  className=" p-3 bg-formBg rounded-md"
                  placeholder="Phone Number*"
                />
                <input
                  type="email"
                  name="email"
                  id="email-form"
                  className=" p-3 bg-formBg rounded-md"
                  placeholder="E-mail*"
                />
                <input
                  type="text"
                  name="interested"
                  id="interest"
                  className=" p-3 bg-formBg rounded-md"
                  placeholder="Interested In"
                />
                <textarea
                  name="message"
                  id="message"
                  className="p-3 h-[110px] bg-formBg rounded-md"
                  placeholder="Message*"
                ></textarea>
              </form>
            </div>
            <div className="form-image w-[100%]">
              <img
                src="./image/image 12.png"
                alt=""
                className="w-[100%] h-full "
              />
            </div>
          </div>
          <button className=" bg-bgFooter text-white tracking-extraWide  text-center text-xs px-7  py-7 mt-10 ">
            SEND EMAIL <i class="bx bx-right-arrow-alt"></i>
          </button>
        </div>
      </div>
      {/* footer */}
      <footer className="bg-bgFooter  py-10">
        <div className="contain-footer p-4 w-[100%] lg:w-[80%] m-auto flex flex-col lg:flex-row justify-between  text-white">
          <div className="w-[30%] lg:w-[10%]">
            <img src="./image/Group 11 1.png" alt="" className="w-[100%]" />
          </div>

          <div className="text-info flex flex-col gap-5 mt-10">
            <h2>Information</h2>
            <p>Main</p>
            <p>Gallery</p>
            <p>Projects</p>
            <p>Certifications</p>
            <p>Contacts</p>
          </div>
          <div className="contact-info flex flex-col gap-10 mt-10">
            <h2>Contacts</h2>
            <div className="location flex space-x-10">
              <i class="bx bxs-location-plus"></i>
              <div className="location-text">
                <p>1234 Sample Street</p>
                <p>Austin Texas 78704</p>
              </div>
            </div>
            <div className="phone-number flex space-x-10">
              <i class="bx bx-phone"></i>
              <p>512.333.2222</p>
            </div>
            <div className="email-info flex space-x-10">
              <i class="bx bx-envelope"></i>
              <p>sampleemail@gmail.com</p>
            </div>
          </div>
          <div className="socials flex flex-col gap-10 mt-10">
            <h2>Social Media</h2>
            <div className="icons flex space-x-10 text-3xl">
              <i class="bx bxl-facebook"></i>
              <i class="bx bxl-twitter"></i>
              <i class="bx bxl-linkedin-square"></i>
              <i class="bx bxl-pinterest-alt"></i>
            </div>
          </div>
        </div>
        <div className="user-info text-center py-5 mt-10 ">
          <p className="text-xs text-colorCopy">
            &copy; 2021 All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
