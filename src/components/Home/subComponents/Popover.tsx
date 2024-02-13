// Dependencies
import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure, Image } from "@nextui-org/react";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaPhone } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdAddIcCall } from "react-icons/md";

// Local Files
import "./Popover.css";
import { updatePopoverStatus } from "../../../store/popoverStatusSlice";
import { RootState } from "../../../store/store";
import logo from "../../../globalAssets/logo.svg";

const popbtns = ["New Bookings", "Changes", "Cancellations", "Customer Service"];

const Popover = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const PopoverButton = useRef<HTMLButtonElement>(document.createElement("button"));
  const popoverStatus = useSelector((state: RootState) => state.popoverStatus.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!popoverStatus) {
      setTimeout(() => {
        PopoverButton.current.click();
        dispatch(updatePopoverStatus(true));
      }, 500);
    }
  }, []);

  return (
    <>
      <Button onPress={onOpen} className="hidden" ref={PopoverButton}>
        Open Modal
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="sm:hidden zscale" placement="center">
        <a href="tel:+1 (888) 891-7176">
          <ModalContent className="h-auto">
            <ModalHeader className="flex items-center gap-[0.4rem]">
              <Button isIconOnly variant="solid" radius="full" color="warning" className="text-[1rem]">
                <FaPhone />
              </Button>
              <p>Contact Us</p>
            </ModalHeader>
            <ModalBody className="flex flex-col justify-center items-center  py-[1rem]">
              <Image width={100} src={logo} alt="logo" radius="none" />
              <h1 className="text-[1.5rem] leading-[2.2rem] text-center font-bold">24/7 Reservation & Support</h1>
              <div className="grid grid-cols-2 gap-[0.5rem]">
                {popbtns.map((data, index) => (
                  <Button
                    className="text-[1rem] font-bold font-serif bg-black border text-white self-center p-[1rem]"
                    radius="full"
                    key={index}
                  >
                    {data}
                  </Button>
                ))}
              </div>

              <div
                className="w-[10rem] h-[10rem] rounded-full bg-no-repeat bg-center bg-cover border-black border-[0.2rem]"
                style={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/7709235/pexels-photo-7709235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                }}
              ></div>
              <h1 className="text-[1.2rem] leading-[2.2rem] text-center font-semibold">
                Call & Get Unpublished Flight Deals
              </h1>

              <Button
                className="text-[1rem] font-bold bg-black border text-white self-center px-[1.5rem] py-[1rem]"
                radius="full"
                startContent={<FaPhone />}
              >
                +1 (888) 891-7176
              </Button>

              <h1 className="text-[1.5rem] leading-[2.2rem] text-center font-bold">24/7 Helpline Available</h1>
              <h1 className="text-[1.1rem] text-center leading-[1.2rem]">
                Enter Your Number & We'll call you back within 5 seconds
              </h1>
            </ModalBody>
            <Button
              className="text-[1rem] font-bold border text-white self-center py-[1.5rem] w-full"
              color="warning"
              startContent={<FaPhone />}
            >
              +1 (888) 891-7176
            </Button>
          </ModalContent>
        </a>
      </Modal>
    </>
  );
};

export default Popover;
