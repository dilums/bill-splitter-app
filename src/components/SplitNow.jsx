import { ChevronLeftIcon, EllipsisVerticalIcon } from "./icons";

//@ split now
export default function SplitNow() {
    return (
      <div className="h-20 rounded-xl flex justify-between items-center ">
        <button className="h-14 w-14 bg-[#373258] rounded-xl yellow-text grid place-items-center shadow-md">
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <div className="yellow-text inline-flex items-center">
          <div className="text-lg "> Split Now </div>
          <div className="h-10 w-10 yellow-text grid place-items-center">
            <EllipsisVerticalIcon className="w-6 h-6" />
          </div>
        </div>
      </div>
    );
  }
  