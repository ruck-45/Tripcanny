import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import dubai from "../globalAssets/images/dubai.jpg";
const DestinationCard = () => {
  return (
    <div className="p-[8rem]">
      <Card isFooterBlurred radius="lg" className="border-none w-[14rem] h-[20rem]">
        <Image alt="Dubai" className="object-cover w-[14rem] h-[20rem]" src={dubai} />
        <CardFooter className="justify-start before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <div className="flex flex-col">
            <p className="text-white/80">DUBAI</p>
            <p className="text-md text-white/80 font-bold">Explore Dubai</p>
            <p className="text-tiny text-white/80">
              Experience the vibrant cityscape of Dubai. From iconic skyscrapers...
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DestinationCard;
