// Dependencies



// Local Files
import data from '../globalAssets/icon/data1.jpg';
import computer from '../globalAssets/icon/data2.jpg';
import network from '../globalAssets/icon/data3.jpg';
import mobile from '../globalAssets/icon/service6.jpg';



const Mission = () => {
  return (
   <div className="bg-yellow-400 md:h-[35rem] h-auto w-full ">
    <div className="bg-white h-auto   text-black md:mx-[6rem] mx-[2rem] shadow-[0_0_10px_black] rounded-sm ">
     <div className="flex flex-col items-center justify-center p-[5rem]">
          <div className="flex flex-col lg:flex-row  justify-between items-center gap-8">
            <div className="flex flex-col items-center justify-center  ">
       <div className='w-[8rem] h-[8rem] rounded-full'>
          <img className='rounded-full' src={data} alt=''/>
        </div>
        <div className='mt-5 text-2xl font-serif text-center text-black'>
          <h1>Accident Data</h1>
        </div>
        <div className='mt-2 text-large  text-center font-light text-black '>
          <ul>
            <li>Accident History</li>
            <li>Damage Severity (Severe/Minor)</li>
            <li>Damage Location/Point of Impact</li>
            <li>Records of Damage Repair</li>
            <li>Airbag Deployment</li>
            <li>Structural Damage</li>
          </ul>
        </div>
            </div>

            <div className="flex flex-col items-center justify-center">
       <div className='w-[8rem] h-[8rem] rounded-full'>
          <img className='rounded-full' src={mobile}/>
        </div>
        <div className='mt-5 text-2xl text-center font-serif text-black'>
          <h1>Service History</h1>
        </div>
        <div className='mt-2 text-large  text-center font-light text-black'>
        <ul>
            <li>Oil Changes</li>
            <li>Tire Rotations</li>
            <li>Open Recalls</li>
            <li>Brake Rotor Replacement</li>
            <li>Transmission Replacement</li>
            <li>Safety Inspections</li>
          </ul>
        </div>
            </div>

            <div className="flex flex-col items-center justify-center">
       <div className='w-[8rem] h-[8rem]'>
          <img className='rounded-full' src={computer} alt=''/>
        </div>
        <div className='mt-5 text-2xl font-serif text-black text-center'>
          <h1>Type of Use</h1>
        </div>
        <div className='mt-2 text-large text-center font-light text-black'>
        <ul>
            <li>Personal Vehicle</li>
            <li>Rental Vehicle</li>
            <li>Leased Vehicle</li>
            <li>Used as a Police Vehicle</li>
            <li>Commercial Vehicle</li>
            <li>Used as a Taxi</li>
          </ul>
        </div>
            </div>

            <div className="flex flex-col items-center justify-center">
       <div className='w-[8rem] h-[8rem]'>
          <img className='rounded-full' src={network} alt=''/>
        </div>
        <div className='mt-5 text-2xl font-serif text-black text-center'>
          <h1>Ownership History</h1>
        </div>
        <div className='mt-2 text-large text-center font-light text-black'>
        <ul>
            <li>Personal Vehicle</li>
            <li>Rental Vehicle</li>
            <li>Leased Vehicle</li>
            <li>Used as a Police Vehicle</li>
            <li>Commercial Vehicle</li>
            <li>Used as a Taxi</li>
          </ul>
        </div>
            </div>

            

       

          </div>

         <div className= 'bg-yellow-500  border-solid mt-[2rem] px-4 py-2'>
         <button  className='text-lg font-semibold text-black'>VIEW SAMPLE REPORT</button>
         </div>
     </div>
    </div>
   </div>
  );
};

export default Mission;
