import * as RadixSlider from "@radix-ui/react-slider";
import { useState } from "react";
import { Input } from "./input";

interface SliderProps {
  maxValue?: number;
  step?: number;
  className?: string;
}

const Slider = ({ maxValue = 500, step = 5, className = "" }: SliderProps) => {
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(maxValue);

  return (
    <div className={`my-4 w-4/5 lg:w-2/3 max-w-[300px] ${className}`}>
      <RadixSlider.Root
        defaultValue={[0, maxValue]}
        max={maxValue}
        step={step}
        minStepsBetweenThumbs={1}
        onValueChange={(values) => {
          setFromValue(values[0]);
          setToValue(values[1]);
        }}
        name="price"
        className="my-4 relative flex items-center select-none touch-none w-full h-5"
      >
        <RadixSlider.Track className="bg-slate-300 relative grow rounded-full h-[5px]">
          <RadixSlider.Range className="absolute bg-dark rounded-full h-full" />
        </RadixSlider.Track>
        <RadixSlider.Thumb
          className="block w-4 h-4 bg-dark rounded-full"
          aria-label="Volume"
        />
        <RadixSlider.Thumb
          className="block w-4 h-4 bg-dark rounded-full"
          aria-label="Volume"
        />
      </RadixSlider.Root>
      <div className="flex gap-2 items-center">
        <Input readOnly value={fromValue} className="max-w-24"></Input>-
        <Input readOnly value={toValue} className="max-w-24"></Input>
      </div>
    </div>
  );
};

export default Slider;
