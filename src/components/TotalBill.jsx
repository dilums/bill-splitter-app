import { imageBase } from "../App";
import { PlusIcon } from "./icons";
import { splitWith } from "./Receipt";

export default function TotalBill() {
    return (
      <div className="bg-[#edc08c]  custom-border mt-6 flex p-6 shadow-md">
        <div className="grow">
          <div className="text-[#48426d] font-semibold text-sm"> Total Bill </div>
          <div className="text-[#48426d] font-bold text-xl mt-1"> $750.86 </div>
          <button className="bg-[#48426d] yellow-text font-bold py-4 px-4 mt-3 text-sm custom-border ">
            Split Now
          </button>
        </div>
        <div className="shrink-0 inline-flex flex-col items-center">
          <div className="text-[#48426d] font-bold text-sm"> Split With </div>
          <div className="w-14 h-14 mt-2 relative">
            <div className="absolute inset-x-0 top-0 bg-white flex justify-center rounded-lg shadow-lg">
              <div className="w-9 pt-5 pb-2">
                {splitWith.map((i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full overflow-hidden bg-contain"
                    style={{
                      backgroundImage: `url("${imageBase}${i}.png")`,
                      marginTop: "-6px",
                      padding: "2px",
                      border: "2px solid #fff",
                    }}
                  ></div>
                ))}
                <div
                  className="w-9 h-9 rounded-full overflow-hidden grid place-items-center"
                  style={{
                    background: "#f1aa9b",
                    marginTop: "-6px",
                    padding: "2px",
                    border: "2px solid #fff",
                  }}
                >
                  <PlusIcon className="size-4" strokeWidth={3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  