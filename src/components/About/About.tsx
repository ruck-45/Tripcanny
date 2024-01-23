// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import Mission from "../../globalSubComponents/Mission";
import Specialization from "./subComponents/Specialization";
import Intro from "../../globalSubComponents/Intro";

const About = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("About"));

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <div>
      <Intro/>
      <Specialization/>
      <Mission />
     
      
    </div>
  );
};

export default About;
