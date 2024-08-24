import { imageBase } from "../App";

export const splitWith = ["1", "2", "3"];
export default function Receipt() {
    return (
      <div className=" mt-6 relative">
        <div className="">
          <svg
            width="264"
            height="196"
            viewBox="0 0 264 196"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_30_2)">
              <rect width="264" height="196" rx="19" fill="#EDC08C" />
              <line
                x1="0"
                y1="47"
                x2="264"
                y2="47"
                stroke="#48426D"
                strokeWidth="1"
                strokeLinecap="round"
                strokeDasharray="8 8"
              />
              <circle cx="264.5" cy="47.5" r="12.5" fill="#48426D" />
              <circle cx="0.5" cy="47.5" r="12.5" fill="#48426D" />
            </g>
            <defs>
              <clipPath id="clip0_30_2">
                <rect width="264" height="196" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
  
        <div className="absolute inset-0  px-4 pt-2 pb-2 ">
          <div className="flex justify-center">
            <button className="bg-[#363156] py-1 px-6 rounded-md text-sm font-bold">
              Receipt
            </button>
          </div>
          <div className="flex text-[#48426d] mt-6">
            <div className="w-1/2">
              <div className="text-sm"> Title </div>
              <div className="font-semibold"> Team Dinner </div>
            </div>
            <div className="w-1/2 pl-3 text-right">
              <div className="text-sm"> Total bill </div>
              <div className="font-semibold "> $750.86 </div>
            </div>
          </div>
          <div className="bg-[#48426d] rounded-xl mt-2 py-2">
            <div className="flex justify-center">
              <div className="inline-flex">
                {splitWith.map((i) => (
                  <div
                    className="w-9 h-9 rounded-full bg-contain"
                    key={i}
                    style={{
                      border: "3px solid #48426d",
                      backgroundImage: `url("${imageBase}${i}.png")`,
                      marginLeft: "-5px",
                      zIndex: i === 1 ? 10 : 5,
                    }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="text-center font-semibold text-sm mt-1">
              Splitting With
            </div>
          </div>
        </div>
      </div>
    );
  }