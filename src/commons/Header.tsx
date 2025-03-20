import { Search } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-primary-50 backdrop-blur-[5.6px] px-20 py-[0.63rem] text-white">
      <div className="flex justify-between items-center">
        <div>
          <Image
            src={"/horizontal-logo.png"}
            width={200}
            height={50}
            alt="logo"
          />
        </div>
        <div>
          <label className="relative flex bg-light-variant-50 px-5 py-4 border-2 border-dark-variant-50 rounded-[1.75rem] min-w-[22.5rem] font-roboto text-dark-variant-300 typography-paragraph-regular">
            <input
              autoComplete="off"
              type="text"
              placeholder="Search..."
              className="outline-0 ring-0 placeholder:text-dark-variant-300 grow"
            />
            <button className="top-1/2 right-5 absolute hover:bg-primary-50 p-2 rounded-full -translate-y-1/2">
              <Search size={18} />
            </button>
          </label>
        </div>
        <div>
          <button
            style={{
              boxShadow: "0px 5.486px 12.343px 0px rgba(215, 101, 120, 0.33)",
            }}
            className="bg-secondary-500 px-8 py-4 border border-secondary-200 rounded-full font-manrope font-extrabold text-white typography-paragraph-regular"
          >
            Login
          </button>
        </div>
      </div>
    </header>
  );
}
export default Header