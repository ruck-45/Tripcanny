import { Button, Input } from "@nextui-org/react";

const Subscribe = () => {
  return (
    <div className="grid grid-cols-2 gap-4 h-[8rem] w-full bg-yellow-400 md:px-[8rem] ">
      <div className="flex flex-col py-8">
        <h1 className="text-white font-bold text-2xl">SIGN-UP NOW FOR EXCLUSIVE EMAIL-ONLY OFFERS</h1>
        <p className="text-white">SUBSCRIBE TO RECEIVE OFFERS ON EMAIL</p>
      </div>
      <div className="p-3 py-8">
        <Input
          type="text"
          placeholder="Enter Your Email"
          className=""
          size="lg"
          endContent={
            <Button
              className="mt-2 mb-2 w-[50%] text-white font-bold"
              color="warning"
              variant="solid"
              radius="sm"
              size="lg"
            >
              Subscribe
            </Button>
          }
        />
      </div>
    </div>
  );
};

export default Subscribe;
