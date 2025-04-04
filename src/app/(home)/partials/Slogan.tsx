import AnimatingText from "@/components/AnimatingText";

const Slogan = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/svg/vatsalya-butterfly.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "10% center",
      }}
      className="flex justify-center items-center min-h-64 font-semibold text-center leading-[150%]"
    >
      <AnimatingText className="justify-center mx-auto my-4 mb-56 max-w-[62.375rem] font-semibold text-text-300 typography-h4">
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
};
export default Slogan;
