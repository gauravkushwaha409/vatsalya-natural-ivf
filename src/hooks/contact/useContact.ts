import { useFormik } from "formik";
import * as Yup from "yup";
import { useGetDataQuery, usePostDataMutation } from "@/api/api";
import { showSuccessMessage } from "@/utils/toast";
import { ApiResponse, handleErrors } from "@/helper/error-helper";
import { endpoints } from "@/api/endpoints";

interface IContactFormValues {
  name: string;
  phone: string;
  address: string;
  message: string;
  center: string;
}

export const useContactForm = () => {
  const { data: centerData } = useGetDataQuery({
    url: `${endpoints.center}`,
  });

  const { data: settingData } = useGetDataQuery({
    url: `${endpoints.setting}`,
  });
  const [postContact, { isLoading }] = usePostDataMutation();

  const formik = useFormik<IContactFormValues>({
    initialValues: {
      name: "",
      phone: "",
      address: "",
      center: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .min(3, "Name must be at least 3 characters"),
      phone: Yup.string().required("Phone number is required"),
      address: Yup.string().required("Address is required"),
      center: Yup.string().required("Center selection is required"),
      message: Yup.string()
        .required("Message is required")
        .min(10, "Message must be at least 10 characters"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await postContact({
          url: `${endpoints.contactus}`,
          data: values,
        });

        if (response.error) {
          handleErrors(response as ApiResponse, formik.setErrors);
          return;
        }

        if (response.data.status === "success") {
          showSuccessMessage(response.data.message);
          formik.resetForm();
        }
      } catch (error) {
        console.error("Failed to submit contact form:", error);
      }
    },
  });

  return {
    formik,
    centerData,
    isLoading,
    settingData,
  };
};
