import { FaMapMarkedAlt, FaUser, FaWrench } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";

export default function Home() {
  return (
    <div className="flex flex-col hero min-h-screen relative">
      <div className="w-full h-[53rem] bg-slate-500">
        <video 
          src="/home/intro.mp4" 
          autoPlay 
          loop 
          muted 
          className="object-cover w-full h-full"
        />
      </div>

    
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 p-4 gap-10">
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 w-60">
          <h2 className="font-bold text-lg flex gap-2"><FaWrench className="mt-[3px]"/>Solution</h2>
          <p className="text-gray-600">From integrated bridges to individual devices. We are happy to help you finding the best solution.</p>
          <button className="mt-2 bg-teal-500 text-white py-1 px-4 rounded">Learn More</button>
        </div>
        
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 w-60">
          <h2 className="font-bold text-lg flex gap-2"><FaUser className="mt-[3px]"/>Customers</h2>
          <p className="text-gray-600">A deepsea, inland, yachting, or other type of vessel? We have a solution for every market.</p>
          <button className="mt-2 bg-teal-500 text-white py-1 px-4 rounded">Learn More</button>
        </div>
        
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 w-60">
          <h2 className="font-bold text-lg flex gap-2"><PiStudentFill className="mt-[3px]"/>Training</h2>
          <p className="text-gray-600">Sail safely with a well-prepared crew. Our trainers facilitate a wide range of maritime equipment courses.</p>
          <button className="mt-2 bg-teal-500 text-white py-1 px-4 rounded">Learn More</button>
        </div>
        
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 w-60">
          <h2 className="font-bold text-lg flex gap-2"><FaMapMarkedAlt className="mt-[3px]"/>Location</h2>
          <p className="text-gray-600">Looking for immediate assistance? Contact the nearest office for 24/7 support.</p>
          <button className="mt-2 bg-teal-500 text-white py-1 px-4 rounded">Learn More</button>
        </div>
      </div>
    </div>
  );
}
