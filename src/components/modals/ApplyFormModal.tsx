"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useFormik } from "formik";
import { useRef, useState } from "react";
import * as Yup from "yup";

interface IcustomClass {
  customClass?: string;
  title: string;
}
const ApplyFormModal: React.FC<IcustomClass> = ({ customClass, title }) => {
  //   const [createData, { isLoading }] = useCreateDataMutation();
  const [resume, setResume] = useState<File | null>(null);
  const [formErrors, setFormErrors] = useState<{ resume?: string }>({});
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      const file = e.currentTarget.files[0];
      const maxSize = 5 * 1024 * 1024; // 5MB

      // Check file size
      if (file.size > maxSize) {
        setFormErrors({
          resume: "File size exceeds the maximum limit of 5MB.",
        });
        return;
      }

      // Set the selected resume
      setResume(file);
      setFormErrors({}); // Clear any previous errors
    }
  };

  const inputRef = useRef<HTMLInputElement>(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      phone_no: "",
      address: "",
      email: "",
      message: "",

      terms: false,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .min(3, "Name must be at least 3 characters"),
      phone_no: Yup.string().required("Phone number is required"),
      address: Yup.string().required("Address is required"),
      email: Yup.string()
        .required("Email is required")
        .email("Invalid email format"),
      message: Yup.string()
        .required("Message is required")
        .min(10, "Message must be at least 10 characters"),

      terms: Yup.boolean().oneOf(
        [true],
        "You must agree to the storage and handling of your data to submit the form."
      ),
    }),
    onSubmit: async (values) => {
      try {
        // Create a new FormData object
        const formData = new FormData();

        // Append the form values
        formData.append("name", values.name);
        formData.append("phone_no", values.phone_no);
        formData.append("address", values.address);
        formData.append("email", values.email);
        formData.append("message", values.message);
        formData.append("terms", values.terms.toString()); // Convert boolean to string for submission
        // formData.append("job", id);

        // Append the resume file if selected
        if (resume) {
          formData.append("resume", resume); // Append the resume file
        }
      } catch (error) {
        console.error("Submission error:", error);
        // showErrorToast("An unexpected error occurred. Please try again.");
      }
    },
  });
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button
            className={`my-5 bg-secondary-500 px-8 py-4 rounded-[6.25rem] font-manrope font-bold text-white typography-paragraph-regular cursor-pointer ${customClass}`}
          >
            {title}
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="hide-for-mobile typography-h4 text-text-500 font-semibold lg:mb-2.5">
              Submit your CV & details about you
            </DialogTitle>
          </DialogHeader>
          <form
            onSubmit={formik.handleSubmit}
            className="grid grid-cols-1 gap-4"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label className="text-base font-regular" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  placeholder="e.g. Sujata Khatri "
                  className="border border-gray-400 rounded-xl p-3 bg-transparent text-sm font-thinC outline-none text-text-400 typography-paragraph-small font-medium "
                />
                {formik.touched.name && formik.errors.name && (
                  <p className=" pl-4 text-red-500 text-sm">
                    {formik.errors.name}
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div className="flex flex-col gap-2">
                <label className="text-base font-regular" htmlFor="phone_no">
                  Phone
                </label>
                <input
                  id="phone_no"
                  name="phone_no"
                  type="number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone_no}
                  placeholder="e.g. 9876543210"
                  className="border border-gray-400 rounded-xl p-3 bg-transparent text-sm font-thinC outline-none text-text-400 typography-paragraph-small font-medium "
                />
                {formik.touched.phone_no && formik.errors.phone_no && (
                  <p className="pl-4 text-red-500 text-sm">
                    {formik.errors.phone_no}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-base font-regular" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  placeholder="e.g. sujata@gmail.com"
                  className="border border-gray-400 rounded-xl p-3 bg-transparent text-sm font-thinC outline-none text-text-400 typography-paragraph-small font-medium "
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="pl-4 text-red-500 text-sm">
                    {formik.errors.email}
                  </p>
                )}
              </div>

              {/* Address Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="address" className="text-base font-regular">
                  Address
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  className="border border-gray-400 rounded-xl p-3 bg-transparent text-sm font-thinC outline-none text-text-400 typography-paragraph-small font-medium "
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address}
                  placeholder="e.g. Gaushala, Kathmandu "
                />
                {formik.touched.address && formik.errors.address && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.address}
                  </p>
                )}
              </div>
            </div>

            {/* CV Upload Field */}
            <div>
              <label htmlFor="resume" className="text-base font-regular">
                Resume{" "}
                <span className="text-text-300 typography-caption">
                  *(Below 5MB - pdf/docx)
                </span>
              </label>
              <input
                ref={inputRef}
                id="resume"
                name="resume"
                type="file"
                accept=".pdf,.docx"
                className="hidden  "
                onChange={handleFileChange}
              />
              <div className="border border-gray-400 rounded-xl  bg-transparent text-sm font-thinC outline-none text-text-400 typography-paragraph-small font-medium flex mt-2">
                <span
                  className="cursor-pointer bg-[#d6d7d6] px-5 py-3.5 rounded-l-xl"
                  onClick={() => inputRef.current?.click()}
                >
                  Choose File
                </span>
                <span className="text-gray-500 flex items-center pl-2">
                  {resume ? resume.name : "No File Chosen"}
                </span>
              </div>
              {formErrors.resume && (
                <p className="text-red-500 text-sm mt-1">{formErrors.resume}</p>
              )}
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-2">
              <label className="text-base font-regular" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                placeholder="|"
                className="border border-gray-400 rounded-xl pl-3 pt-4 bg-transparent text-sm font-thinC outline-none text-text-400 typography-paragraph-small font-medium "
              />
              {formik.touched.message && formik.errors.message && (
                <p className="pl-4 text-red-500 text-sm">
                  {formik.errors.message}
                </p>
              )}
            </div>
            {/* Checkbox Field */}
            <div className="flex items-center gap-2 ml-2">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="w-3 h-3 cursor-pointer"
                checked={formik.values.terms}
                onChange={() =>
                  formik.setFieldValue("terms", !formik.values.terms)
                }
              />
              <label
                htmlFor="terms"
                className="typography-paragraph-small text-[11.11px] text-text-400"
              >
                By using this form you agree with the storage and handling of
                your data by this website.
              </label>
            </div>
            {formik.touched.terms && formik.errors.terms && (
              <p className="text-red-500 text-sm">{formik.errors.terms}</p>
            )}
          </form>
          <DialogFooter>
            <button className="my-5 bg-secondary-500 px-8 py-3 rounded-[6.25rem] font-manrope font-bold text-white typography-paragraph-regular cursor-pointer">
              Submit
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ApplyFormModal;
