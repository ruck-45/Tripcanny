// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import Mission from "../../globalSubComponents/Mission";
import Specialization from "./subComponents/Specialization";
import Intro from "../../globalSubComponents/Intro";
import Benefit from "../Home/subComponents/Benefit";

const About = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("About"));

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  const title= {des:"About"}

  return (
    <div>
      <Intro des={title.des}/>
      <Specialization/>
      <Benefit/>
      <Mission />
     
      
    </div>
  );
};

export default About;
