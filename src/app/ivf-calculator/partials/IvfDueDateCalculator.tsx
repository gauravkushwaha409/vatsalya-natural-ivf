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
      <section className="py-16 md:py-24 w-full padding">
        <div className="flex flex-col items-center">
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
        <div className="items-center gap-18 grid grid-cols-1 md:grid-cols-2 py-10">
          <div className="space-y-4 shadow-md mx-auto p-5 rounded-lg w-full">
            <p className="font-semibold text-text-500 typography-h3">
              IVF Due Date Calculator
            </p>

            <div className=" ">
              <label className="font-medium text-text-400 typography-paragraph-regular">
                Transfer Date:
              </label>
              <input
                type="date"
                className="mt-2 p-2 border rounded w-full typography-paragraph-small"
                value={transferDate}
                onChange={(e) => setTransferDate(e.target.value)}
              />
            </div>

            <div className="space-y-1">
              <label className="font-medium text-text-400 typography-paragraph-regular">
                Type of Transfer:
              </label>
              <select
                className="mt-2 p-2 border rounded w-full typography-paragraph-small"
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
              className="hover:bg-secondary bg-gradient-to-r from-[#A0385A] to-[#3A142C] px-11 py-2 border-[0.4px] border-secondary-100 rounded-full w-full font-semibold text-white transition-colors duration-300 cursor-pointer typography-paragraph-regular typography-h4"
            >
              Calculate
            </button>

            {dueDate && (
              <div className="bg-green-100 mt-4 p-3 rounded text-green-800">
                <strong>Estimated Due Date:</strong> {dueDate}
              </div>
            )}
          </div>

          <div className="aspect-[16/14] overflow-hidden">
            {/* Main image (top right) */}
            <Image
              src={Image1}
              alt="Happy family with healthcare providers"
              width={500}
              height={400}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <p
          className="py-10 min-w-full prose"
          dangerouslySetInnerHTML={{
            __html: data?.records[0]?.description || "",
          }}
        />
      </section>
    </>
  );
};

export default IvfDueDateCalculator;
