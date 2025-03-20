import HeroSection from "./partials/HeroSection";

const HomePage = () => {
  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(90deg, #FFD2CE 0%, #EBC0DB 100%) no-repeat",
        }}
        className="-z-[1] relative"
      >
        <div
          style={{
            background:
              "url('/home/hero-noise.png') #fff4 0% 0% / 100px 70px repeat",
            backgroundBlendMode: "screen",
          }}
          className="z-[0] relative"
        >
          <HeroSection />
          <div
            style={{
              background: "url('/home/circle.svg') no-repeat right top",
            }}
            className="z-[1] absolute inset-0 pointer-events-none"
          ></div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
