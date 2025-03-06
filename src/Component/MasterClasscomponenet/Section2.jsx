import { FaCheck } from "react-icons/fa6";
const Section2 = () => {
  const learnings = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu in orci, nunc amet libero",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu in orci, nunc amet libero",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu in orci, nunc amet libero",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu in orci, nunc amet libero",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu in orci, nunc amet libero",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu in orci, nunc amet libero",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu in orci, nunc amet libero",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu in orci, nunc amet libero"
  ];
 
  return (
    <div className="bg-[#ffffff] rounded-xl p-10 mt-20 border-4 border-[#03393C] max-w-7xl mx-auto">
      <h2 className="text-xl md:text-2xl lg:text-[33px] font-semibold mb-4">What you'll learn from this course</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {learnings.map((text, index) => (
          <div key={index} className="flex items-start gap-2">
           <FaCheck className='text-[#03393C]' size={30}/>
            <p className="text-[#1C3554]">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default Section2;