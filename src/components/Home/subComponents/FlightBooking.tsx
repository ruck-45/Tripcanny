// Dependencies
import { RadioGroup, Radio, Input, Divider, Select, SelectSection, SelectItem } from "@nextui-org/react";
import { MdFlightTakeoff, MdFlightLand } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { useState } from "react";

const FlightBooking = () => {
  const [roundTrip, setRoundTrip] = useState(true);

  return (
    <div className="bg-white relative flex justify-center">
      <div className="w-[80%] p-[3rem] bg-white rounded-xl drop-shadow-xl relative top-[-10rem] flex flex-col gap-[2rem]">
        <RadioGroup
          orientation="horizontal"
          color="danger"
          defaultValue="round-trip"
          classNames={{
            wrapper: "gap-[2rem]",
          }}
          onChange={() => setRoundTrip((prev) => !prev)}
        >
          <Radio value="round-trip">Round Trip</Radio>
          <Radio value="one-way">One Way</Radio>
        </RadioGroup>
        <form action="" className="flex flex-col gap-[1rem]">
          <p className="text-default-500">Departure</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[2rem]">
            <Input type="text" label="From" startContent={<MdFlightTakeoff />} />
            <Input type="text" label="to" startContent={<MdFlightLand />} />
            <Input type="date" label="date" startContent={<BsFillCalendarDateFill />} />
          </div>
          <Divider className="mt-[1rem]" />
          {roundTrip ? (
            <>
              <p className="text-default-500">Arrival</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[2rem]">
                <Input type="text" label="From" startContent={<MdFlightTakeoff />} />
                <Input type="text" label="to" startContent={<MdFlightLand />} />
                <Input type="date" label="date" startContent={<BsFillCalendarDateFill />} />
              </div>
              <Divider className="mt-[1rem]" />
            </>
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default FlightBooking;
