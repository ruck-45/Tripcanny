import Intro from "../../globalSubComponents/Intro";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { updateTab } from "../../store/curTabSlice";
import EmailForm from "./subElements/EmailForm";
import Map from "./subElements/Map";
import ContactCard from "./subElements/ContactCard";
import Subscribe from "../../globalSubComponents/Subscribe";
const title = { des: "Contact Us" };

const Contact = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Contact"));

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <div>
      <Intro des={title.des} />
      <div className="grid lg:grid-cols-3 bg-white gap-5 p-[1rem] md:p-[2rem] md:px-[8rem]">
        <ContactCard heading="Email" value="support@tripcanny.com" icon={<MdEmail />} />
        <ContactCard heading="Phone" value="+1 (888) 891-7176" icon={<MdPhone />} />
        <ContactCard heading="Address" value="16616 Woodruff Ave, Bellflower, CA 90706, USA" icon={<FaAddressBook />} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-start">
        <EmailForm />
        <Map />
      </div>
      <Subscribe />
    </div>
  );
};

export default Contact;
