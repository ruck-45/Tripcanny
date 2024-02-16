// Dependencies
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Local Files
import NavBar from "./globalSubComponents/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Auth from "./components/Auth/Auth";
import Footer from "./globalSubComponents/Footer";
import { RootState } from "./store/store";
import Contact from "./components/Contact/Contact";
import { Privacy } from "./globalSubComponents/Privacy";
import Refund from "./globalSubComponents/Refund";
import Page from "./globalSubComponents/FlightPage/Page";
import { Disclaimer } from "./globalSubComponents/Disclaimer";
import RegionFlights from "./globalSubComponents/FlightPage/RegionFlights";


function App() {
  const curTab = useSelector((state: RootState) => state.curTab.value);

  return (
    <>
      {curTab === "Auth" ? null : <NavBar />}
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Disclaimer" element={<Disclaimer />} />
        <Route path="/Refund" element={<Refund />} />
        <Route path="/flight/:name" element={<Page />} />
        <Route path="/destination/:place" element={<RegionFlights />} />
        <Route path="*" element={<Navigate to="/Home" />} />
      </Routes>
      {curTab === "Auth" ? null : <Footer />}
    </>
  );
}

export default App;
