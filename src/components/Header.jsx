import { imageBase } from "../App";

export default function Header() {
  return (
    <div className="flex justify-between mt-3">
      <div className="yellow-text text-lg">
        <div className=""> Orix </div>
        <div className="font-bold"> Bill Splitter </div>
      </div>
      <div className="w-16 h-16 relative">
        <div
          className="absolute inset-0 bg-[#342f52] overflow-hidden"
          style={{ border: "2px solid #544e75", borderRadius: "15px" }}
        >
          <div className="bg-[#48426c] text-center absolute inset-x-0 bottom-0 text-xs font-bold py-1">
            Sajon
          </div>
        </div>
        <img
          src={`${imageBase}8.png`}
          className="w-14 h-14 absolute"
          style={{
            left: "50%",
            top: "-19px",
            transform: "translate(-50%, 0)",
          }}
        />
      </div>
    </div>
  );
}
