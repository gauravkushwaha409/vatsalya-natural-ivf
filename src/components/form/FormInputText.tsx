import React, { useState } from "react";
import { ErrorMessage, useField } from "formik";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { cn } from "@/utils/cn";

interface IInputField extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  type?: "text" | "password";
  className?: string;
  labelClassName?: string;
  mainWrapperClassName?: string;
}

const FormInputText: React.FC<IInputField> = ({
  name,
  label,
  type = "text",
  labelClassName,
  className,
  mainWrapperClassName,
  ...props
}) => {
  const [field] = useField(name);
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordField = type === "password";
  const inputType = isPasswordField && !showPassword ? "password" : "text";

  return (
    <div className={cn(`w-full flex flex-col gap-2.5`, mainWrapperClassName)}>
      {label && (
        <label
          className={`typo-mid-bd-md text-text-500 ${labelClassName}`}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <div className="relative w-full">
        <input
          id={name}
          type={inputType}
          className={cn(
            `w-full px-5 py-3  bg-white border-[#72796F] border-[0.3px] rounded-full outline-none text-sm ${className}}`
          )}
          {...field}
          {...props}
        />
        {isPasswordField && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-text-400 hover:text-text-600"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible size={20} />
            ) : (
              <AiOutlineEye size={20} />
            )}
          </button>
        )}
      </div>
      <ErrorMessage
        name={name}
        component="div"
        className="pt-2 pl-4 text-red-500 text-sm"
      />
    </div>
  );
};

export default FormInputText;
