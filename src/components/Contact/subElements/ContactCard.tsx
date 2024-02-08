import { Card, CardFooter, CardHeader } from "@nextui-org/react";
type CardProps = {
  icon: React.ReactNode;
  heading: string;
  value: string;
};
const ContactCard = (props: CardProps) => {
  return (
    <Card radius="none">
      <CardHeader className="justify-center text-2xl font-bold text-yellow-400 gap-4">
        <div className="h-5 w-4">{props.icon}</div>
        <div>{props.heading}</div>
      </CardHeader>
      <CardFooter className="justify-center">{props.value}</CardFooter>
    </Card>
  );
};

export default ContactCard;
