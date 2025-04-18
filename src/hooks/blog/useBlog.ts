import { usePostDataMutation } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { ApiResponse, handleErrors } from "@/helper/error-helper";
import { showSuccessMessage } from "@/utils/toast";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";

interface IFormValues {
  name: string;
  email: string;
  comment: string;
}

export const useBlog = ({ slug }: { slug: string }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const [postComment, { isLoading }] = usePostDataMutation();

  const formik = useFormik<IFormValues>({
    initialValues: {
      name: "",
      email: "",
      comment: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .min(2, "Name must be at least 2 characters"),

      email: Yup.string()
        .required("Email is required")
        .email("Invalid email format"),

      comment: Yup.string()
        .required("Comment is required")
        .min(10, "Comment must be at least 10 characters"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await postComment({
          url: `${endpoints.blog}/${slug}/comment`,
          data: values,
          invalidateTag: "comment-count",
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
        console.error("Submission error:", error);
        alert("Error submitting form");
      }
    },
  });
  useEffect(() => {
    try {
      const storage = localStorage.getItem("commentForm");
      if (!isChecked) {
        localStorage.removeItem("commentForm");
      }
      if (storage) {
        const commentStorage: { name: string; email: string } =
          JSON.parse(storage);
        formik.setFieldValue("name", commentStorage.name);
        formik.setFieldValue("email", commentStorage.email);
        setIsChecked(true);
      }
      return () => {};
    } catch (error) {
      console.log(error);
    }
  }, [isChecked, formik]);
  return {
    formik,
    isChecked,
    handleToggle,
    isLoading,
  };
};
