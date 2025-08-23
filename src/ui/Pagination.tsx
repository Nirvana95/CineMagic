import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Pagination() {
  return (
    <div className="flex flex-row justify-between text-amber-50  ">
      <button className="bg-[#0F0D23] text-[#AB8BFF] p-4.5 cursor-pointer">
        <FaArrowLeft />
      </button>
      <span>5/12</span>
      <button className="bg-[#0F0D23] text-[#AB8BFF] p-4.5 cursor-pointer">
        <FaArrowRight />
      </button>
    </div>
  );
}

export default Pagination;
