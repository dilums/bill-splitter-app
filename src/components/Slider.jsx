import { useState } from "react";
const ticks = Array(16)
  .fill(0)
  .map((i, j) => j);

export default function Slider({ color, value: initValue }) {
    const [value, setValue] = useState(initValue);
  
    const handleChange = (event) => {
      setValue(parseInt(event.target.value, 10));
    };
    return (
      <div className="relative w-full" style={{ height: "24px" }}>
        <div
          className="absolute inset-x-0 rounded-full blue-shadow-inner"
          style={{
            height: "16px",
            top: "50%",
            transform: "translate(0,-50%)",
            background: "#373258",
          }}
        ></div>
  
        <div
          className="absolute left-0 rounded-l-full"
          style={{
            height: "16px",
            top: "50%",
            transform: "translate(0,-50%)",
            background: color,
            width: `12px`,
          }}
        ></div>
        <div
          className="absolute rounded-r-full"
          style={{
            height: "16px",
            top: "50%",
            transform: "translate(0,-50%)",
            left: `12px`,
            right: "12px",
          }}
        >
          <div
            className=""
            style={{ height: "16px", width: `${value}%`, background: color }}
          ></div>
        </div>
  
        <div
          className="absolute inset-x-0 rounded-full flex items-center justify-around"
          style={{
            height: "16px",
            top: "50%",
            transform: "translate(0,-50%)",
          }}
        >
          {ticks.map((i) => (
            <div
              className="rounded-full"
              style={
                i % 3 === 0
                  ? {
                      opacity: "80%",
                      width: "5px",
                      height: "5px",
                      background: "#fcd3bc",
                      border: "1px solid white",
                    }
                  : {
                      opacity: "80%",
                      width: "2px",
                      height: "2px",
                      background: "#fff",
                    }
              }
              key={i}
            >
              {" "}
            </div>
          ))}
        </div>
        <div
          className="absolute"
          style={{
            left: "12px",
            right: "12px",
            height: "24px",
            top: "50%",
            transform: "translate(0,-50%)",
          }}
        >
          <div
            className="absolute rounded-full"
            style={{
              left: `${value}%`,
              top: 0,
              height: "24px",
              width: "24px",
              background: "#edc08c",
              transform: "translate(-50%, 0)",
              border: "2px solid #fff",
            }}
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="translate(100, 100)">
                <circle cx="0" cy="0" r="90" fill="#edc08c" />
                <circle cx="64" cy="0" r="8" fill="#FFF" />
                <circle cx="45" cy="45" r="8" fill="#FFF" />
                <circle cx="0" cy="64" r="8" fill="#FFF" />
                <circle cx="-46" cy="45" r="8" fill="#FFF" />
                <circle cx="-64" cy="0" r="8" fill="#FFF" />
                <circle cx="-46" cy="-46" r="8" fill="#FFF" />
                <circle cx="-1" cy="-64" r="8" fill="#FFF" />
                <circle cx="45" cy="-46" r="8" fill="#FFF" />
              </g>
            </svg>
          </div>
        </div>
  
        <input
          type="range"
          id="demoAInput"
          name="demoAInput"
          min={0}
          max={100}
          step={1}
          value={value}
          onChange={handleChange}
        />
      </div>
    );
  }