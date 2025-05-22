"use client";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useGetDataQuery, usePostDataMutation } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { ICenter } from "@/interface/center";
import { IExperts } from "@/interface/experts";
import { showSuccessMessage } from "@/utils/toast";

interface IFormValues {
  name: string;
  phone: string;
  address: string;
  center: string;
  message: string;
  doctor: string;
}

const ServiceForm = () => {
  const [postAppointment, { isLoading }] = usePostDataMutation();

  const formik = useFormik<IFormValues>({
    initialValues: {
      name: "",
      phone: "",
      address: "",
      center: "",
      doctor: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .min(3, "Name must be at least 3 characters"),
      phone: Yup.string().required("Phone number is required"),
      address: Yup.string().required("Address is required"),
      center: Yup.string().required("Center selection is required"),
      doctor: Yup.string().required("Doctor selection is required"),
      message: Yup.string()
        .required("Message is required")
        .min(10, "Message must be at least 10 characters"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await postAppointment({
          url: endpoints.consultationBooking,
          data: values,
        });
        if (response?.data) {
          showSuccessMessage(response.data.message);
          formik.resetForm();
        }
      } catch (error) {
        console.error("Submission error:", error);
      }
    },
  });

  const { data: centerData } = useGetDataQuery({
    url: `${endpoints.center}`,
  });
  const { data: doctorData } = useGetDataQuery(
    {
      url: `${endpoints.doctor}`,
      params: {
        center: formik.values.center,
      },
    },
    {
      skip: !formik.values.center,
    }
  );

  return (
    <section className="relative">
      <div className="top-0 sticky pb-7 w-full text-black">
        <div
          className="bg-secondary-50/30 px-5 py-7 rounded-lg w-full"
          style={{ boxShadow: "0px 4px 22.6px 7px rgba(0, 0, 0, 0.06)" }}
        >
          <p className="pb-2.5 border-secondary-100 border-b-2 font-medium text-center typography-paragraph-large">
            Request a Call
          </p>
          <form
            onSubmit={formik.handleSubmit}
            className="gap-4 grid grid-cols-1 py-2.5 font-semibold text-text-500 typography-paragraph-regular"
          >
            {/* Name Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-regular text-base">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="bg-transparent p-3 border border-gray-400 rounded-xl outline-none font-thinC font-medium text-text-400 text-sm typography-paragraph-small"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                placeholder="Enter Your Name"
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-sm">{formik.errors.name}</p>
              )}
            </div>

            {/* Phone Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="font-regular text-base">
                Phone No.
              </label>
              <input
                id="phone"
                name="phone"
                type="number"
                className="bg-transparent p-3 border border-gray-400 rounded-xl outline-none font-thinC font-medium text-text-400 text-sm typography-paragraph-small"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                placeholder="Enter Your Phone Number"
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-red-500 text-sm">{formik.errors.phone}</p>
              )}
            </div>

            {/* Address Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="address" className="font-regular text-base">
                Address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                className="bg-transparent p-3 border border-gray-400 rounded-xl outline-none font-thinC font-medium text-text-400 text-sm typography-paragraph-small"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
                placeholder="Enter Your Address"
              />
              {formik.touched.address && formik.errors.address && (
                <p className="text-red-500 text-sm">{formik.errors.address}</p>
              )}
            </div>
            {/* Center Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="center" className="font-regular text-base">
                Center
              </label>
              <select
                id="center"
                name="center"
                className="bg-transparent p-3 border border-gray-400 rounded-xl outline-none font-thinC font-medium text-text-400 text-sm typography-paragraph-small"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.center}
              >
                <option hidden value="">
                  Select a center
                </option>
                {centerData?.data?.records.map((center: ICenter) => (
                  <option key={center.id} value={center.id}>
                    {center.name}
                  </option>
                ))}
              </select>
              {formik.touched.center && formik.errors.center && (
                <p className="text-red-500 text-sm">{formik.errors.center}</p>
              )}
            </div>
            {/* Doctor Field */}
            {formik.values.center && (
              <div className="flex flex-col gap-2">
                <label htmlFor="center" className="font-regular text-base">
                  Doctor
                </label>
                <select
                  id="doctor"
                  name="doctor"
                  className="bg-transparent p-3 border border-gray-400 rounded-xl outline-none font-thinC font-medium text-text-400 text-sm typography-paragraph-small"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.doctor}
                >
                  <option hidden value="">
                    Select a Doctor
                  </option>
                  {doctorData?.data?.records.map((docter: IExperts) => (
                    <option key={docter.id} value={docter.id}>
                      {docter.name}
                    </option>
                  ))}
                </select>
                {formik.touched.doctor && formik.errors.doctor && (
                  <p className="text-red-500 text-sm">{formik.errors.doctor}</p>
                )}
              </div>
            )}

            {/* Message Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-regular text-base">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="bg-transparent p-3 border border-gray-400 rounded-xl outline-none font-thinC font-medium text-text-400 text-sm typography-paragraph-small"
                rows={4}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                placeholder="Enter Your Message..."
              />
              {formik.touched.message && formik.errors.message && (
                <p className="text-red-500 text-sm">{formik.errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-secondary-500 hover:bg-secondary-600 px-10 py-4 rounded-full text-white cursor-pointer typography-paragraph-regular"
              >
                {isLoading ? "Requesting..." : "Request a Call"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ServiceForm;
