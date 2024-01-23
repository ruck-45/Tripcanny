// Local Files
import data from '../globalAssets/icon/data1.jpg';
import computer from '../globalAssets/icon/data2.jpg';
import network from '../globalAssets/icon/data3.jpg';
import mobile from '../globalAssets/icon/service6.jpg';

const missionData = [
  {
    category: "Accident Data",
    icon: data, // Replace with the actual icon source
    details: [
      "Accident History",
      "Damage Severity (Severe/Minor)",
      "Damage Location/Point of Impact",
      "Records of Damage Repair",
      "Airbag Deployment",
      "Structural Damage",
    ],
  },
  {
    category: "Service History",
    icon: computer, // Replace with the actual icon source
    details: [
      "Oil Changes",
      "Tire Rotations",
      "Open Recalls",
      "Brake Rotor Replacement",
      "Transmission Replacement",
      "Safety Inspections",
    ],
  },
  {
    category: "Type of Use",
    icon: network, // Replace with the actual icon source
    details: [
      "Personal Vehicle",
      "Rental Vehicle",
      "Leased Vehicle",
      "Used as a Police Vehicle",
      "Commercial Vehicle",
      "Used as a Taxi",
    ],
  },
  {
    category: "Ownership History",
    icon: mobile, // Replace with the actual icon source
    details: [
      "Personal Vehicle",
      "Rental Vehicle",
      "Leased Vehicle",
      "Used as a Police Vehicle",
      "Commercial Vehicle",
      "Used as a Taxi",
    ],
  },
];

const Mission = () => {
  return (
    <div className="bg-yellow-400 md:h-[40rem] h-auto w-full py-[2rem]">
      <div className="bg-white h-auto text-black md:mx-[6rem] mx-[2rem] shadow-[0_0_10px_black] rounded-sm ">
        <div className="flex flex-col items-center justify-center p-[5rem]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            {missionData.map((item, index) => (
              <div key={index} className="flex flex-col items-center justify-center gap-3">
                <div className="w-[8rem] h-[8rem] rounded-full">
                  <img className="rounded-full" src={item.icon} alt="" />
                </div>
                <div className="mt-5 text-2xl font-serif text-black text-center">
                  <h1>{item.category}</h1>
                </div>
                <div className="mt-2 text-large text-center font-light text-black">
                  <ul>
                    {item.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-yellow-500  border-solid px-4 py-2 mt-[3rem]">
            <button className="text-lg font-semibold text-black">VIEW SAMPLE REPORT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
