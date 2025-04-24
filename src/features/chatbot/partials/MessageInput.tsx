import { useFormik } from "formik";
import { Image as ImageLogo, Send, X } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";
import useFile from "../hooks/useFile";
import { FileTypes } from "../interfaces/file.types";

const MessageInput: React.FC<{
  sendMessage: (
    message: string,
    file?: { file: string; type: FileTypes }
  ) => void;
  disabled: boolean;
}> = ({ sendMessage, disabled }) => {
  const { handleFileUpload } = useFile();
  const imageInputRef = useRef<HTMLInputElement>(null);
  const formik = useFormik({
    initialValues: {
      message: "",
      image: null as null | File,
    },
    onSubmit: async (values) => {
      if (!values.image || values.message.trim().length < 1) return;
      let fileUrl;
      if (values.image) {
        fileUrl = await handleFileUpload(values.image);
      }
      console.log(fileUrl, "file uploaded to this url");
      if (fileUrl)
        sendMessage(values.message, { file: fileUrl, type: "image" });
      else sendMessage(values.message);
      formik.setFieldValue("message", "");
      formik.setFieldValue("image", null);
      if (imageInputRef.current) imageInputRef.current.value = "";
    },
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !disabled) {
      formik.handleSubmit();
    }
  };

  return (
    <form onSubmit={formik.handleSubmit} className="px-5 pb-6">
      <label className="flex items-center gap-2 bg-light-variant-100 pr-5 border-dark-variant-50 rounded-[1.75rem]">
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
                className="top-0 left-full absolute bg-primary-200 opacity-0 group-hover:opacity-100 p-0.5 rounded-full transition-all -translate-x-1/2 -translate-y-1/2 duration-200"
              >
                <X className="text-secondary-500" size={12} />
              </button>
            </div>
          )}
          <input
            type="text"
            placeholder="Type your message..."
            {...formik.getFieldProps("message")}
            onKeyDown={handleKeyDown}
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
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                formik.setFieldValue("image", e.target.files[0]);
                console.log(e.target.files[0]);
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
          disabled={disabled}
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
