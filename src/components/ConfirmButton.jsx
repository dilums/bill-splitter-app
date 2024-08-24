import { ArrowIcon } from "./icons";

//@ confirm button
export default function ConfirmButton() {
  return (
    <div className="bg-[#373258] mt-6 rounded-full p-2 flex items-center blue-shadow-inner">
      <button className="bg-[#48426d] py-2.5 px-4 rounded-full text-sm font-bold yellow-text blue-shadow">
        Confirm Split
      </button>
      <div className="inline-flex ml-5">
        <ArrowIcon />
        <ArrowIcon />
        <ArrowIcon />
        <ArrowIcon />
        <ArrowIcon />
      </div>
    </div>
  );
}
