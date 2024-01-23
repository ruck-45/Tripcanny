// Dependencies
import { Divider, Image, Button, Listbox, ListboxItem } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { SiFacebook } from "react-icons/si";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { FaSquareXTwitter, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

// Local Files
import "./Footer.css";
import logo from "../globalAssets/logo.svg";

const contactInfo = [
  {
    name: "Phone",
    value: "+1 (844) 671-7473",
    icon: <FaPhone />,
  },
  {
    name: "Email",
    value: "support@charlsolutions.com",
    icon: <MdEmail />,
  },
  {
    name: "Address",
    value: "London Eye, UK",
    icon: <IoLocation />,
  },
];

const footerLinks = [
  {
    type: "Navigation",
    data: [
      { key: "home", value: "Home" },
      { key: "about", value: "About" },
      { key: "contact", value: "Contact" },
      { key: "faq", value: "FAQ" },
    ],
  },
  {
    type: "Quick Links",
    data: [
      { key: "investment", value: "Investment" },
      { key: "crypto", value: "Crypto" },
      { key: "options", value: "Options" },
      { key: "retirement", value: "Retirement" },
    ],
  },
];

const Footer = () => {
  return (
    <div>
      <div className=" lg:h-[25rem] md:[50rem] sm:h-[80rem] flex flex-col md:flex-col items-center justify-between bg-black text-white p-20">
        <div className="flex flex-row items-start justify-between gap-5 p-5">
          <div className="text-2xl">
            <SiFacebook/>
          </div >
          <div className="text-2xl">
            <SiFacebook/>
          </div>
          <div className="text-2xl">
            <SiFacebook/>
          </div>
          <div className="text-2xl">
            <SiFacebook/>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-between md:gap-10 gap-3">
          <div className="flex flex-col md:flex-row items-center justify-between">

          <div className="flex flex-col justify-between items-start md:items-center p-5">
            <div>
              <h1 className=" md:text-3xl text-2xl font-semibold ">CONTACT US</h1>
            </div>
            
            <div className="mt-4 ">
            <div>
              <h1 className="text-large font-normal " >123 Second Street Fifth</h1>
            </div>
            <div>
              <h1 className="text-large font-normal" >Avenue,</h1>
            </div>
            <div>
              <h1 className="text-large font-normal" >Manhattan, New York</h1>
            </div>
            <div>
              <h1 className="text-large font-normal" >+987 654 3210</h1>
            </div>

            </div>
          </div>

          <div className="flex flex-col justify-between items-start md:items-center p-5">
            <div>
              <h1 className=" md:text-3xl text-2xl font-semibold ">CONTACT US</h1>
            </div>
            
            <div className="mt-4 ">
            <div>
              <h1 className="text-large font-normal " >123 Second Street Fifth</h1>
            </div>
            <div>
              <h1 className="text-large font-normal" >Avenue,</h1>
            </div>
            <div>
              <h1 className="text-large font-normal" >Manhattan, New York</h1>
            </div>
            <div>
              <h1 className="text-large font-normal" >+987 654 3210</h1>
            </div>

            </div>
          </div>

          </div>

          <div className="flex flex-col md:flex-row items-center justify-between">

          <div className="flex flex-col justify-between items-start md:items-center p-5">
            <div>
              <h1 className=" md:text-3xl text-2xl font-semibold ">CONTACT US</h1>
            </div>
            
            <div className="mt-4 ">
            <div>
              <h1 className="text-large font-normal " >123 Second Street Fifth</h1>
            </div>
            <div>
              <h1 className="text-large font-normal" >Avenue,</h1>
            </div>
            <div>
              <h1 className="text-large font-normal" >Manhattan, New York</h1>
            </div>
            <div>
              <h1 className="text-large font-normal" >+987 654 3210</h1>
            </div>

            </div>
          </div>
          <div className="flex flex-col justify-between items-start md:items-center p-5">
            <div>
              <h1 className=" md:text-3xl text-2xl font-semibold ">CONTACT US</h1>
            </div>
            
            <div className="mt-4 ">
            <div>
              <h1 className="text-large font-normal " >123 Second Street Fifth</h1>
            </div>
            <div>
              <h1 className="text-large font-normal" >Avenue,</h1>
            </div>
            <div>
              <h1 className="text-large font-normal" >Manhattan, New York</h1>
            </div>
            <div>
              <h1 className="text-large font-normal" >+987 654 3210</h1>
            </div>

            </div>
          </div>

          

          </div>

          

          

          

          

          

          
        </div>
      </div>

      <div className="h-[5rem] bg-yellow-500 text-black-400 text-small md:text-large font-extralight flex flex-col items-center justify-center px-[2rem] ">Copyright 2019 All Right Reserved By Free html Templates Distributed By ThemeWagon</div>
    </div>
  );
};

export default Footer;
