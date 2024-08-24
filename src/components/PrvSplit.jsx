import { ExclamationCircleIcon } from "./icons";

//@ prv split
export default function PrvSplit() {
    return (
      <div className="bg-[#373258] h-16 mt-6 custom-border flex items-center shadow-md">
        <div className="h-16 w-16 grid place-items-center">
          <div className="h-11 w-11 rounded-full bg-[#48426d] grid place-items-center yellow-text blue-shadow">
            <ExclamationCircleIcon className="size-6" />
          </div>
        </div>
        <div className="ml-1">
          <div className="text-sm font-semibold yellow-text">
            Your previous split
          </div>
          <div className="text-xs mt-1"> $678.56 </div>
        </div>
      </div>
    );
  }