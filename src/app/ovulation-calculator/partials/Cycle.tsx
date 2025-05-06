import React, { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
interface CycleLengthSelectorProps {
  defaultValue?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
  className?: string;
}
const Cycle: React.FC<CycleLengthSelectorProps> = ({
  defaultValue = 28,
  min = 20,
  max = 40,
  onChange,
  className,
}) => {
  const [value, setValue] = useState<number>(defaultValue);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    onChange?.(value);
  }, [value, onChange]);

  const handleSliderChange = (newValue: number[]) => {
    setValue(newValue[0]);
  };

  const handleIncrement = () => {
    if (value < max) {
      setValue((prev) => prev + 1);
      setIsAnimating(true);
    }
  };

  const handleDecrement = () => {
    if (value > min) {
      setValue((prev) => prev - 1);
      setIsAnimating(true);
    }
  };

  // Calculate percentage for the gradient position
  const percentage = ((value - min) / (max - min)) * 100;
  return (
    <div className="flex w-auto h-fit flex-col gap-2 items-start shadow-md p-5 rounded-lg">
      <h1 className="pb-2.5 border-secondary-100 border-b-2 font-medium text-center typography-paragraph-large w-full">
        How long is your cycle?{" "}
      </h1>
      <div className={cn("w-full max-w-2xs space-y-6", className)}>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <label className="typography-paragraph-regular font-medium text-gray-800">
              Cycle Length
            </label>
            <span className="typography-paragraph-regular text-secondary-700 font-medium">
              {min}-{max} days
            </span>
          </div>

          <div className=" rounded-xl p-6 ">
            <div className="flex justify-between items-center mb-8">
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full border-secondary-300 hover:bg-secondary-50 hover:text-secondary-600"
                onClick={handleDecrement}
              >
                <Minus className="h-4 w-4" />
              </Button>

              <div
                className={cn(
                  "relative flex flex-col items-center transition-all duration-300 ease-in-out",
                  isAnimating ? "animate-pulse-scale" : ""
                )}
              >
                <span className="text-4xl font-bold text-secondary-600">
                  {value}
                </span>
                <span className="text-sm text-gray-500 mt-1">days</span>
                <div className="absolute -bottom-4 w-16 h-1 bg-gradient-to-r from-secondary-300 to-secondary-500 rounded-full animate-fade-in" />
              </div>

              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full border-secondary-300 hover:bg-secondary-50 hover:text-secondary-600"
                onClick={handleIncrement}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <div className="relative mt-3">
              <div className="h-2 bg-secondary-100 rounded-full">
                <div
                  className="absolute h-2 bg-gradient-to-r from-secondary-300 to-secondary-500 rounded-full transition-all duration-300"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <Slider
                defaultValue={[defaultValue]}
                value={[value]}
                min={min}
                max={max}
                step={1}
                onValueChange={handleSliderChange}
                className=""
              />
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>{min}</span>
                <span>{max}</span>
              </div>
            </div>
          </div>

          <div className="px-4 ">
            <p className="text-sm text-gray-600 italic">
              The average menstrual cycle is 28 days, but can range from 21-35
              days and still be considered normal.
            </p>
          </div>
        </div>
      </div>
      <button className="hover:bg-secondary-700 bg-secondary-500  px-11 py-2 border-[0.4px] border-secondary-100 rounded-full font-semibold typography-paragraph-regular transition-colors duration-300 typography-h4 cursor-pointer text-white w-full mt-2">
        Result
      </button>
    </div>
  );
};

export default Cycle;
