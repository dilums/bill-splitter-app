import { imageBase } from "../App";
import { MagnifyingGlassIcon, PlusIcon } from "./icons";

const nearbyItems = [
  { name: "Anna", image: "6" },
  { name: "Khalifa", image: "7" },
  { name: "Lisa", image: "9" },
];
const recentItems = [
  { name: "Sing", image: "7" },
  { name: "Alex", image: "3" },
  { name: "Bryan", image: "4" },
  { name: "Mike", image: "2" },
];

//@ nearby friends
export default function NearbyFriends() {
  return (
    <div className=" mt-6 rounded-3xl relative">
      <svg
        width="264"
        height="224"
        viewBox="0 0 264 224"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 84V206C0 216.493 8.50659 225 19 225H245C255.493 225 264 216.493 264 206V19C264 8.50659 255.493 0 245 0H83.1214C72.628 0 64.1214 8.50659 64.1214 19V46C64.1214 56.4934 55.6149 65 45.1214 65H19C8.50659 65 0 73.5066 0 84Z"
          fill="#373258"
        />
      </svg>
      <div className="w-14 h-14 bg-[#edc08c] absolute top-0 left-0 grid place-items-center text-[#48426d] custom-border ">
        <MagnifyingGlassIcon className="w-6 h-6" />
      </div>
      <div className="absolute inset-0 p-4">
        <div className="" style={{ paddingLeft: "64px" }}>
          <div className="flex items-center justify-between text-xs pb-2">
            <div className="yellow-text"> Nearby Friends </div>
            <div className=""> See all </div>
          </div>
          <div className="flex  justify-between ">
            {nearbyItems.map(({ name, image }) => (
              <div
                className="w-12 bg-[#48426d] rounded-full pb-2.5 relative"
                key={name}
              >
                <div className="w-12 h-11 grid place-items-center">
                  <div
                    className="w-8 h-8 rounded-full bg-contain"
                    style={{
                      backgroundImage: `url("${imageBase}${image}.png")`,

                      padding: "2px",
                      border: "2px solid #fff",
                    }}
                  ></div>
                </div>
                <div
                  className="text-center mt-1 font-semibold"
                  style={{ fontSize: "10px" }}
                >
                  {name}
                </div>

                <div
                  className="absolute w-4 h-4 bg-[#cea87d] rounded-full grid place-items-center"
                  style={{
                    left: "50%",
                    bottom: "-12px",
                    transform: "translate(-50%, 0)",
                  }}
                >
                  <PlusIcon className="w-2 h-2" strokeWidth={5} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-xs mt-4 mb-2 yellow-text"> Recently Split </div>

        <div className="flex  justify-between ">
          {recentItems.map(({ name, image }) => (
            <div className="w-10" key={name}>
              <div
                className="w-10 h-10 rounded-full bg-contain"
                style={{
                  backgroundImage: `url("${imageBase}${image}.png")`,

                  padding: "2px",
                  border: "2px solid #fff",
                }}
              ></div>
              <div className="text-xs text-center mt-1"> {name} </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
