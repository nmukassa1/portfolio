import { Ultra } from "next/font/google";

const ultra = Ultra({
  weight: "400", // Ultra only has one weight
  subsets: ["latin"],
  display: "swap",
});

function Hero() {
  return (
    <div id="hero" className="grid grid-rows-2">
      <svg
        className={`${ultra.className}`}
        viewBox="0 0 100 30"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="NYAH logo"
      >
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="28"
          fill="currentColor"
        >
          NYAH
        </text>
      </svg>

      <div className="w-[65%] mx-auto flex gap-8">
        <img className="" src="/lightBulb.png" alt="" />
        <img className="" src="/finger.png" alt="" />
        <img className="" src="/robot.png" alt="" />
      </div>
    </div>
  );
}

export default Hero;
