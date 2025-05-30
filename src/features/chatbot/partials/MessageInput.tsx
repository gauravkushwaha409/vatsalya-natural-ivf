import { useFormik } from "formik";
import { Image as ImageLogo, Loader2, Send, X } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";
import useFile from "../hooks/useFile";

const MessageInput: React.FC<{
  sendMessage: (
    values: { message: string },
    actions: { resetForm: () => void }
  ) => void;
  disabled?: boolean;
}> = ({ sendMessage, disabled = false }) => {
  const { handleFileUpload, isUploading } = useFile();
  const [imageUrl, setImageUrl] = React.useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const formik = useFormik({
    initialValues: {
      message: "",
      image: null as null | File,
    },
    onSubmit: async (values, actions) => {
      console.log(values, "value");
      sendMessage(values, actions);

      if (imageInputRef.current) imageInputRef.current.value = "";
    },
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      formik.handleSubmit();
    }
  };

  return (
    <form onSubmit={formik.handleSubmit} className="">
      <label className="flex items-center gap-2 bg-light-variant-100 pr-5 border-dark-variant-50 ">
        <div className="w-full">
          {formik.values.image && (
            <div className="group relative mt-2 pl-3 w-max">
              <Image
                src={URL.createObjectURL(formik.values.image)}
                alt="preview"
                width={100}
                height={100}
                className="mt-1 border rounded-md max-w-max max-h-10 object-contain aspect-auto"
              />
              <button
                type="button"
                onClick={() => formik.setFieldValue("image", null)}
                className={`top-0 left-full absolute bg-primary-200 group-hover:opacity-100 p-0.5 rounded-full transition-all -translate-x-1/2 -translate-y-1/2 duration-200 ${
                  isUploading ? "opacity-100" : "opacity-0"
                }`}
              >
                {isUploading ? (
                  <Loader2
                    className="text-secondary-500 animate-spin"
                    size={12}
                  />
                ) : (
                  <X className="text-secondary-500" size={12} />
                )}
              </button>
            </div>
          )}
          <input
            type="text"
            placeholder="Type your message..."
            {...formik.getFieldProps("message")}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            className="flex-1 py-4 pl-5 rounded-full outline-0 focus:outline-none h-max"
          />
        </div>
        <label
          className={`${
            disabled ? "opacity-50" : ""
          } hover:brightness-110 cursor-pointer`}
        >
          <input
            ref={imageInputRef}
            onChange={async (e) => {
              if (e.target.files && e.target.files[0]) {
                formik.setFieldValue("image", e.target.files[0]);
                const imageUrl = await handleFileUpload(e.target.files[0]);
                if (imageUrl) setImageUrl(imageUrl);
              }
            }}
            disabled={disabled}
            type="file"
            accept="image/*"
            className="hidden"
          />
          <ImageLogo className="text-primary-900" />
        </label>
        <button
          type="submit"
          className="disabled:opacity-50 hover:brightness-110 cursor-pointer"
        >
          <Send className="text-primary-900" />
        </button>
      </label>
    </form>
  );
};

export default MessageInput;
