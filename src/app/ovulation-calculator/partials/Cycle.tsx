import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/utils/cn";
import { Minus, Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
interface CycleLengthSelectorProps {
  defaultValue?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
  className?: string;
  oncalculate?: () => void;
  disabled?: boolean;
}
const Cycle: React.FC<CycleLengthSelectorProps> = ({
  defaultValue = 28,
  min = 20,
  max = 40,
  onChange,
  className,
  oncalculate,
  disabled = false,
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
    <div className="flex flex-col items-start gap-2 shadow-md p-5 rounded-lg w-auto h-fit">
      <p className="pb-2.5 border-secondary-100 border-b-2 w-full font-medium text-center typography-paragraph-large">
        How long is your cycle?{" "}
      </p>
      <div className={cn("w-full max-w-2xs space-y-6", className)}>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <div className="font-medium text-gray-800 typography-paragraph-regular">
              Cycle Length
            </div>
            <span className="font-medium text-secondary-700 typography-paragraph-regular">
              {min}-{max} days
            </span>
          </div>

          <div className="p-6 rounded-xl">
            <div className="flex justify-between items-center mb-8">
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-secondary-50 border-secondary-300 rounded-full w-10 h-10 hover:text-secondary-600"
                onClick={handleDecrement}
              >
                <Minus className="w-4 h-4" />
              </Button>

              <div
                className={cn(
                  "relative flex flex-col items-center transition-all duration-300 ease-in-out",
                  isAnimating ? "animate-pulse-scale" : ""
                )}
              >
                <span className="font-bold text-secondary-600 text-4xl">
                  {value}
                </span>
                <span className="mt-1 text-gray-500 text-sm">days</span>
                <div className="-bottom-4 absolute bg-gradient-to-r from-secondary-300 to-secondary-500 rounded-full w-16 h-1 animate-fade-in" />
              </div>

              <Button
                variant="outline"
                size="icon"
                className="hover:bg-secondary-50 border-secondary-300 rounded-full w-10 h-10 hover:text-secondary-600"
                onClick={handleIncrement}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>

            <div className="relative mt-3">
              <div className="bg-secondary-100 rounded-full h-2">
                <div
                  className="absolute bg-gradient-to-r from-secondary-300 to-secondary-500 rounded-full h-2 transition-all duration-300"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <div>
                <Slider
                  defaultValue={[defaultValue]}
                  value={[value]}
                  min={min}
                  max={max}
                  step={1}
                  onValueChange={handleSliderChange}
                  className=""
                />
              </div>
              <div className="flex justify-between mt-2 text-gray-500 text-xs">
                <span>{min}</span>
                <span>{max}</span>
              </div>
            </div>
          </div>

          <div className="px-4">
            <p className="text-gray-600 text-sm italic">
              The average menstrual cycle is 28 days, but can range from 21-35
              days and still be considered normal.
            </p>
          </div>
        </div>
      </div>
      <button
        onClick={oncalculate}
        disabled={disabled}
        className="bg-secondary-500 hover:bg-secondary-700 disabled:opacity-50 mt-2 px-11 py-2 border-[0.4px] border-secondary-100 rounded-full w-full font-semibold text-white transition-all duration-300 cursor-pointer typography-paragraph-regular typography-h4"
      >
        Calculate
      </button>
    </div>
  );
};

export default Cycle;
