import { useFormik } from "formik";
import * as Yup from "yup";

import { useGetDataQuery, usePostDataMutation } from "@/api/api";
import { endpoints } from "@/api/endpoints";

import { showSuccessMessage } from "@/utils/toast";

interface IFormValues {
  name: string;
  phone: string;
  address: string;
  center: string;
  message: string;
  doctor: string;
}
const useReqCallForm = () => {
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
  return {
    formik,
    centerData,
    doctorData,
    isLoading,
  };
};

export default useReqCallForm;
