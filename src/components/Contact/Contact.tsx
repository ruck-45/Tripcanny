import React from "react";
import Intro from "../../globalSubComponents/Intro";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { updateTab } from "../../store/curTabSlice";
import EmailForm from "./subElements/EmailForm";
import Map from "./subElements/Map";
import CTA from "./subElements/CTA";
import ContactCard from "./subElements/ContactCard";
const title = { des: "Contact Us" };

const Contact = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Contact"));
  return (
    <div>
      <Intro des={title.des} />
      <div className="grid lg:grid-cols-3 bg-white gap-5 p-[1rem] md:p-[2rem] md:px-[5rem]">
        <ContactCard heading="Email" value="sachin@gmail.com" icon={<MdEmail />} />
        <ContactCard heading="Phone" value="+91 8777666767" icon={<MdPhone />} />
        <ContactCard heading="Address" value="Flat 57 Near Bhopal" icon={<FaAddressBook />} />
      </div>
      <div className="grid lg:grid-cols-2">
        <EmailForm />
        <Map />
      </div>
      <CTA text="Want To Book Flight ?" color="warning" showArrow={true} text2="Call Us Now !" to="../Contact" />
    </div>
  );
};

export default Contact;
