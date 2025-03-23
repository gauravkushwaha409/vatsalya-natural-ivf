import AnimatingText from "@/components/AnimatingText";

const Slogan = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/svg/vatsalya-butterfly.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "10% center",
      }}
      className="flex justify-center items-center min-h-64 font-semibold text-center leading-[150%] typography-h5"
    >
      <AnimatingText className="justify-center mx-auto my-4 max-w-7xl">
        &quot;Our mission is to turn dreams into families through compassionate,
        science-backed fertility care. With over 15 years of expertise, we have
        helped thousands of couples embrace the joy of parenthood. We are
        committed to providing personalized treatments, cutting-edge medical
        advancements, and unwavering support at every step of the journey.
        Because your dream of a family deserves nothing less than the
        best.&quot;
      </AnimatingText>
    </div>
  );
}
export default Slogan