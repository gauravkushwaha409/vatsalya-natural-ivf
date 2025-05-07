"use client";
import Image from "next/image";
import React, { useState } from "react";
import Image1 from "@/assests/contact/pic2.png";
import { IOvulationData } from "@/app/ovulation-calculator/interface/ovulation.interface";

const transferTypes = [
  { value: "day3", label: "Day 3 Embryo Transfer", daysToAdd: 263 },
  { value: "day5", label: "Day 5 Embryo Transfer", daysToAdd: 261 },
  { value: "frozenDay3", label: "Frozen Embryo (Day 3)", daysToAdd: 263 },
  { value: "frozenDay5", label: "Frozen Embryo (Day 5)", daysToAdd: 261 },
  { value: "blastocyst", label: "Blastocyst Transfer", daysToAdd: 261 },
];
interface IvfDueDateCalculatorProps {
  data: IOvulationData;
}
const IvfDueDateCalculator: React.FC<IvfDueDateCalculatorProps> = ({
  data,
}) => {
  const [transferDate, setTransferDate] = useState("");
  const [transferType, setTransferType] = useState("");
  const [dueDate, setDueDate] = useState("");

  const calculateDueDate = () => {
    if (!transferDate || !transferType) {
      alert("Please select both transfer date and type.");
      return;
    }

    const selectedType = transferTypes.find(
      (type) => type.value === transferType
    );
    if (!selectedType) return;

    const baseDate = new Date(transferDate);
    baseDate.setDate(baseDate.getDate() + selectedType.daysToAdd);
    const formattedDueDate = baseDate.toLocaleDateString("en-CA");

    setDueDate(formattedDueDate);
  };

  return (
    <>
      <section className="padding py-16 md:py-24 w-full">
        <div className="flex flex-col items-center ">
          <div className="flex justify-center items-center gap-4 w-full">
            {/* line  */}
            <div className="flex-1 bg-primary-400 max-w-[148px] h-px"></div>

            <h2 className="font-bold text-primary-500 text-sm md:text-base uppercase leading-[24px] tracking-widest">
              IVF Due Date Calculator
            </h2>
            {/* line  */}
            <div className="flex-1 bg-primary-400 max-w-[148px] h-px"></div>
          </div>
          <p className="pt-4 font-semibold text-text-500 typography-h3">
            We are across the country{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-18 items-center py-10">
          <div className="p-5 rounded-lg shadow-md space-y-4 w-full mx-auto">
            <h1 className="typography-h3 text-text-500 font-semibold">
              IVF Due Date Calculator
            </h1>

            <div className=" ">
              <label className="text-text-400 font-medium typography-paragraph-regular ">
                Transfer Date:
              </label>
              <input
                type="date"
                className="w-full p-2 border rounded mt-2 typography-paragraph-small"
                value={transferDate}
                onChange={(e) => setTransferDate(e.target.value)}
              />
            </div>

            <div className="space-y-1">
              <label className="text-text-400 font-medium typography-paragraph-regular ">
                Type of Transfer:
              </label>
              <select
                className="w-full p-2 border rounded mt-2 typography-paragraph-small"
                value={transferType}
                onChange={(e) => setTransferType(e.target.value)}
              >
                <option value="">-- Select Transfer Type --</option>
                {transferTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={calculateDueDate}
              className="hover:bg-secondary bg-gradient-to-r from-[#A0385A] to-[#3A142C]  px-11 py-2 border-[0.4px] border-secondary-100 rounded-full font-semibold typography-paragraph-regular transition-colors duration-300 typography-h4 cursor-pointer text-white w-full"
            >
              Calculate
            </button>

            {dueDate && (
              <div className="mt-4 p-3 bg-green-100 rounded text-green-800">
                <strong>Estimated Due Date:</strong> {dueDate}
              </div>
            )}
          </div>

          <div className=" overflow-hidden aspect-[16/14]">
            {/* Main image (top right) */}
            <Image
              src={Image1}
              alt="Happy family with healthcare providers"
              width={500}
              height={400}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
        <p
          className="prose py-10  min-w-full"
          dangerouslySetInnerHTML={{
            __html: data?.records[0]?.description || "",
          }}
        />
      </section>
    </>
  );
};

export default IvfDueDateCalculator;
