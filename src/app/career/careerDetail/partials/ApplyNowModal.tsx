import useClickOutside from "@/core/hooks/common/useClickOutside";
import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  id: string;
}

import { motion } from "framer-motion";
interface IFormValues {
  name: string;
  phone_no: string;
  address: string;
  notes_about_you: string;
  email: string;

  terms: boolean;
}
const ApplyNowModal: React.FC<ModalProps> = ({ isOpen, onClose, id }) => {
  const modalRef = useClickOutside(onClose);

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
  const formik = useFormik<IFormValues>({
    initialValues: {
      name: "",
      phone_no: "",
      address: "",
      email: "",
      notes_about_you: "",

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
      notes_about_you: Yup.string()
        .required("Message is required")
        .min(10, "Message must be at least 10 characters"),

      terms: Yup.boolean().oneOf(
        [true],
        "You must agree to the storage and handling of your data to submit the form."
      ),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        // Create a new FormData object
        const formData = new FormData();

        // Append the form values
        formData.append("name", values.name);
        formData.append("phone_no", values.phone_no);
        formData.append("address", values.address);
        formData.append("email", values.email);
        formData.append("notes_about_you", values.notes_about_you);
        formData.append("terms", values.terms.toString()); // Convert boolean to string for submission
        formData.append("job", id);

        // Append the resume file if selected
        if (resume) {
          formData.append("resume", resume); // Append the resume file
        }

        // Send the FormData object to the server
        const response = await createData({
          url: "joinus",
          newData: formData,
        });

        if (response.data.status === "success") {
          //   showSuccessToast(response.data.message);
          console.log(response.data.message);
          resetForm();
          setResume(null);
          onClose();
        } else {
          //   showErrorToast(response.data?.message || "An error occurred.");
          console.log(response.data?.message);
        }
      } catch (error) {
        console.error("Submission error:", error);
        // showErrorToast("An unexpected error occurred. Please try again.");
      }
    },
  });

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 bg-opacity-50 flex justify-center items-center z-50 text-black">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            ref={modalRef}
            className="bg-white rounded-lg p-6 shadow-lg w-[90%] md:max-w-[65%]  relative h-[90%] md:h-auto  overflow-y-scroll"
            style={{
              scrollbarWidth: "none",
            }}
          >
            <div className=" flex flex-col-reverse  md:flex-row justify-between   text-black py-7 gap-10">
              <div className="  w-full  ">
                <h1 className="text-xl mb-4">
                  Submit your CV & details about you{" "}
                </h1>
                <form
                  onSubmit={formik.handleSubmit}
                  className="grid grid-cols-1 gap-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
                    {/* Name Field */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-base font-regular">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="border border-gray-400 rounded-xl p-3 bg-transparent text-sm font-thinC outline-none"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        placeholder="Ahmed Al Farsi"
                      />
                      {formik.touched.name && formik.errors.name && (
                        <p className="text-red-500 text-sm">
                          {formik.errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone Field */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="phone_no"
                        className="text-base font-regular"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone_no"
                        name="phone_no"
                        type="number"
                        className="border border-gray-400 rounded-xl p-3 bg-transparent text-sm font-thinC outline-none"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone_no}
                        placeholder="+971 50 123 4567"
                      />
                      {formik.touched.phone_no && formik.errors.phone_no && (
                        <p className="text-red-500 text-sm">
                          {formik.errors.phone_no}
                        </p>
                      )}
                    </div>

                    {/* email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-base font-regular">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="border border-gray-400 rounded-xl p-3 bg-transparent text-sm font-thinC outline-none"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        placeholder="example@gmail.com"
                      />
                      {formik.touched.email && formik.errors.email && (
                        <p className="text-red-500 text-sm">
                          {formik.errors.email}
                        </p>
                      )}
                    </div>
                    {/* Address Field */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="address"
                        className="text-base font-regular"
                      >
                        Address
                      </label>
                      <input
                        id="address"
                        name="address"
                        type="text"
                        className="border border-gray-400 rounded-xl p-3 bg-transparent text-sm font-thinC outline-none"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.address}
                        placeholder="Burj Khalifa, Downtown Dubai"
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
                    <input
                      ref={inputRef}
                      id="resume"
                      name="resume"
                      type="file"
                      accept=".pdf,.docx"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <div className="border border-gray-400 rounded-xl bg-transparent text-sm flex overflow-hidden">
                      <span
                        className="cursor-pointer w-1/9 bg-[#d6d7d6] p-3"
                        onClick={() => inputRef.current?.click()}
                      >
                        Choose File
                      </span>
                      <span className="text-gray-500 flex items-center pl-2">
                        {resume ? resume.name : "No File Chosen"}
                      </span>
                    </div>
                    {formErrors.resume && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.resume}
                      </p>
                    )}
                  </div>
                  {/* Message Field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-base font-regular">
                      Some notes about you
                    </label>
                    <textarea
                      id="notes_about_you"
                      name="notes_about_you"
                      className="border border-gray-400 rounded-xl p-2 bg-transparent text-sm font-thinC outline-none"
                      rows={4}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.notes_about_you}
                      placeholder="messagae here..."
                    />
                    {formik.touched.notes_about_you &&
                      formik.errors.notes_about_you && (
                        <p className="text-red-500 text-sm">
                          {formik.errors.notes_about_you}
                        </p>
                      )}
                  </div>
                  {/* Checkbox Field */}
                  <div className="flex items-center gap-2">
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
                      className="text-xs text-gray-600 cursor-pointer"
                    >
                      By using this form you agree with the storage and handling
                      of your data by this website.
                    </label>
                  </div>
                  {formik.touched.terms && formik.errors.terms && (
                    <p className="text-red-500 text-sm">
                      {formik.errors.terms}
                    </p>
                  )}
                  <div></div>

                  {/* Submit Button */}
                  <div className="flex justify-end">
                    <CustomButton
                      text="Submit "
                      className="px-5 py-2"
                      isLoading={isLoading}
                    />
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ApplyNowModal;
