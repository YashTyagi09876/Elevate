import { Star, Users } from "lucide-react";
 
const Section3 = () => {
  return (
    <div className=" rounded-xl max-w-20xl py-12 ">
      <h2 className="text-2xl lg:text-[40px] font-bold text-[#03393C] mb-4">Mentor</h2>
      <div className="flex flex-col sm:flex-row gap-8 items-start">
        {/* Placeholder for Image */}
        <div className="w-full h-50 sm:w-80 sm:h-90 bg-gray-300 rounded-2xl"></div>
       
        {/* Mentor Details */}
        <div className="flex-1 flex flex-col gap-2">
          <h3 className="text-xl font-bold md:text-[30px] lg:text-[40px] text-[#03393C]">Arif Aslam</h3>
          <p className="text-[#03393C] text-sm md:text-[16px] lg:text-[21px]">Senior Instructor For Design</p>
         
          {/* Ratings */}
          <div className="flex items-center gap-2 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-yellow-500" size={30} fill="currentColor" />
            ))}
            <span className="font-bold text-[#03393C] text-sm lg:text-[21px]">4.7/5</span>
            <span className="text-[#808080] text-sm">(1023 Reviews)</span>
          </div>
         
          {/* Description */}
          <p className="text-gray-700 text-sm md:text-[15px]  lg:text-[18px] mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu in orci, nunc amet libero.
            Nam scelerisque vestibulum bibendum a turpis.
          </p>
          <p className="text-gray-700 md:text-[15px] lg:text-[18px] text-sm mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu in orci, nunc amet libero.
            Nam scelerisque vestibulum bibendum a turpis.
          </p>
         
          {/* Students Count */}
          <div className="flex items-center gap-2 mt-3 text-gray-600">
            <Users md:size={15} lg:size={18} />
            <span className='text-sm md:text-[14px] lg:text-[16px]'>2583 Students</span>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Section3;
 