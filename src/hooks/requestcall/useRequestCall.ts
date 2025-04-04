import { useFormik } from "formik";
import * as Yup from "yup";
import { usePostDataMutation } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { handleErrors } from "@/helper/error-helper";
import { showErrorMessage, showSuccessMessage } from "@/utils/toast";

interface IRequestCallValues {
  name: string;
  phone: string;
  message: string;
}

export const useRequestCall = () => {
  const [postRequestCall, { isLoading }] = usePostDataMutation();

  const formik = useFormik<IRequestCallValues>({
    initialValues: {
      name: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .min(2, "Name must be at least 2 characters"),
      phone: Yup.string()
        .required("Phone is required")
        .matches(/^[0-9]{10}$/, "Invalid phone format"),
      message: Yup.string()
        .required("Message is required")
        .min(10, "Message must be at least 10 characters"),
    }),
    onSubmit: async (values) => {
      try {
        const response = (await postRequestCall({
          url: `${endpoints.request_call}`,
          data: values,
        })) as any;

        if (response.error) {
          handleErrors(response, formik.setErrors);
          showErrorMessage(response.error.data.message);
          return;
        }

        if (response.data.status === "success") {
          showSuccessMessage(response.data.message);
          formik.resetForm();
        }
      } catch (error) {
        console.error("Submission error:", error);
      }
    },
  });

  return {
    formik,
    isLoading,
  };
};
