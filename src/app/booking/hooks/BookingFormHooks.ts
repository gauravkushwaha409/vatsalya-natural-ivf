import { useGetDataQuery, usePostDataMutation } from "@/api/api";
import { endpoints } from "@/api/endpoints";

import { showErrorMessage, showSuccessMessage } from "@/utils/toast";
import { useFormik } from "formik";

import * as Yup from "yup";
export interface IFormValues {
  name: string;
  phone: string;
  address: string;
  center: string;
  message: string;
  doctor: string;
}

export const useBookingForm = () => {
  const { data: centerData } = useGetDataQuery({
    url: `${endpoints.center}`,
  });
  const [postAppointment, { isLoading: isBookingLoading }] =
    usePostDataMutation();

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
          url: `${endpoints.consultationBooking}`,
          data: values,
        });
        if (response?.error) {
          showErrorMessage("Failed to Book ");
          return;
        }

        if (response?.data?.status === "success") {
          showSuccessMessage(response?.data?.message);
        }
      } catch (error) {
        console.error("Failed to fetch slots:", error);
      }
    },
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
  return {
    formik,
    centerData,
    doctorData,
    isBookingLoading,
  };
};
