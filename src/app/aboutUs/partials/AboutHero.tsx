import hero from "@/assests/about/aboutHero.png";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import Image from "next/image";

const AboutHero = () => {
  return (
    <div>
      <div className="relative w-full h-[500px] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="z-0 absolute inset-0">
          <Image
            src={hero}
            alt="Happy couple with newborn baby"
            fill
            className="brightness-[0.35] object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="z-10 relative flex flex-col justify-center items-center px-4 h-full text-white text-center">
          <CustomBreadcrumb
            items={[
              {
                name: "Home",
                link: "/",
              },
              {
                name: "About Us",
              },
            ]}
            className="top-4 absolute"
          />

          {/* Heading */}
          <h1 className="mb-4 font-bold typography-h3">About Us</h1>
          {/* Subheading */}
          <p className="mb-10 font-medium typography-paragraph-large">
            We are dedicated to turning dreams of parenthood into reality
            through personalized care and innovative fertility treatments.
          </p>
          {/* CTA Button */}
          <div
            // href="/appointment"
            className="hover:bg-secondary bg-gradient-to-r from-[#A0385A] to-[#3A142C] shadow-[0px px-11 py-4 border-[0.4px] border-secondary-100 rounded-full font-semibold text-lg transition-colors duration-300 typography-h5 8px 18px 0px rgba(101,53,83,0.62)]"
          >
            Book an Appointment
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
