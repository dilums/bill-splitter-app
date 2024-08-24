import { imageBase } from "../App";
import Slider from "./Slider";

const sliderData = [
  ["Me", "450", 3, "#9ac3ef", 46],
  ["Cody", "200.86", 2, "#b79bf1", 72],
  ["Khalifa", "100", 7, "#eba596", 32],
];

export default function SliderSet() {
  return (
    <div className="">
      {sliderData.map(([name, price, key, color, value]) => (
        <div className="mt-3 text-sm font-semibold" key={key}>
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center">
              <div
                className="w-7 h-7 rounded-full bg-contain"
                style={{
                  border: "3px solid #fff",
                  backgroundImage: `url("${imageBase}${key}.png")`,
                }}
              ></div>
              <div className="ml-2"> {name} </div>
            </div>

            <div className=""> ${price} </div>
          </div>
          <div className="mt-2">
            <Slider color={color} value={value} />
          </div>
        </div>
      ))}
    </div>
  );
}
