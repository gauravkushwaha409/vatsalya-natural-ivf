import { usePostDataMutation } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import * as Yup from "yup";
import { useFormik } from "formik";
import { showErrorMessage, showSuccessMessage } from "@/utils/toast";
import { ApiResponse, handleErrors } from "@/helper/error-helper";

interface NewsletterValues {
  email: string;
}

export const useNewsletter = () => {
  const [postSubscribe, { isLoading }] = usePostDataMutation();

  const formik = useFormik<NewsletterValues>({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await postSubscribe({
          url: `${endpoints.subscription}`,
          data: values,
        });

        if (response.error) {
          handleErrors(response as ApiResponse, formik.setErrors);
          return;
        }
        if (response.data.status === "success") {
          showSuccessMessage(response.data.message);
          resetForm();
        }
      } catch (error) {
        showErrorMessage("Failed to subscribe. Please try again.");
      }
    },
  });

  return {
    formik,
    isLoading,
  };
};
