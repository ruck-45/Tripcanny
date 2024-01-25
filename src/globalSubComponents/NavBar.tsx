// Dependencies
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Image,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Accordion,
  AccordionItem,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";

// Local Files
import "./NavBar.css";
import logo from "../globalAssets/CarFxLogo.svg";
import { RootState } from "../store/store";
import { updateNavStatus } from "../store/navOpenStatusSlice";

const menuItems = ["Home", "Services", "About", "Contact", "Log In"];

const NavBar = () => {
  const curTab = useSelector((state: RootState) => state.curTab.value);
  const navOpenStatus = useSelector((state: RootState) => state.navOpenStatus.value);
  const dispatch = useDispatch();

  const setIsMenuOpen = () => {
    dispatch(updateNavStatus(!navOpenStatus));
  };

  return (
    <Navbar
      isMenuOpen={navOpenStatus}
      onMenuOpenChange={setIsMenuOpen}
      className=" bg-white h-[8rem] nav"
      maxWidth="xl"
      shouldHideOnScroll
    >
      <NavbarContent>
        <NavbarMenuToggle aria-label={navOpenStatus ? "Close menu" : "Open menu"} className="lg:hidden text-black" />
        <Link to="../Home">
          <Image width={120} src={logo} alt="logo" radius="none" className="hidden lg:block" />
        </Link>
      </NavbarContent>
      <NavbarContent className="lg:hidden logo">
        <Link to="../Home">
          <Image width={120} src={logo} alt="logo" radius="none" />
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex " justify="center">
        <NavbarItem>
          <Link
            to="../Home"
            className={curTab === "Home" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            to="../About"
            className={curTab === "About" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            to="../Contact"
            className={curTab === "Contact" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
          >
            Contact Us
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link
            to="../FAQ"
            className={curTab === "FAQ" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
          >
            FAQ
          </Link>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link
            to="../Auth"
            className={curTab === "FAQ" ? "active navActive flex flex-col px-[1rem] text-[1rem]" : "notActive px-[1rem]"}
          >
            Sign Up
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link to="../Auth">
            <Button variant="bordered" className="border-black-800 text-[#F59E0B] text-[1.1rem] p-5">
              Login
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-[#28292b] mt-[1rem]">
        {menuItems.map((item, index) => {
          if (item === "Services") {
            return (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Accordion className="p-0" isCompact>
                  <AccordionItem
                    aria-label={item}
                    title={item}
                    classNames={{ title: curTab === item ? "active" : "notActive", content: "text-white" }}
                  >
                    <Listbox aria-label="Services" color="danger">
                      <ListboxItem key="Investment" className="p-0" textValue="Investment">
                        <Link
                          style={{ display: "block", padding: "6px 8px" }}
                          to={"./Investment"}
                          onClick={setIsMenuOpen}
                        >
                          Investment
                        </Link>
                      </ListboxItem>
                      <ListboxItem key="Crypto" className="p-0" textValue="Crypto">
                        <Link style={{ display: "block", padding: "6px 8px" }} to={"./Crypto"} onClick={setIsMenuOpen}>
                          Crypto
                        </Link>
                      </ListboxItem>
                      <ListboxItem key="Options" className="p-0" textValue="Options">
                        <Link style={{ display: "block", padding: "6px 8px" }} to={"./Options"} onClick={setIsMenuOpen}>
                          Options
                        </Link>
                      </ListboxItem>
                      <ListboxItem key="Retirement" className="p-0" textValue="Retirement">
                        <Link
                          style={{ display: "block", padding: "6px 8px" }}
                          to={"./Retirement"}
                          onClick={setIsMenuOpen}
                        >
                          Retirement
                        </Link>
                      </ListboxItem>
                    </Listbox>
                  </AccordionItem>
                </Accordion>
              </NavbarMenuItem>
            );
          } else {
            return (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  className={curTab === item ? "active" : "notActive"}
                  to={index === 5 ? "../Auth" : `../${item}`}
                  onClick={setIsMenuOpen}
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            );
          }
        })}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
