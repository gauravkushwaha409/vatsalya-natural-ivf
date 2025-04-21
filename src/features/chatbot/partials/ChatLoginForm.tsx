import { useFormik } from "formik";
import * as Yup from "yup";
import { useChatAuth } from "../hooks/useChatAuth";

const ChatLoginForm = () => {
  const { handleLogin } = useChatAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      phone_no: "",
      firstname: "",
      lastname: "",
    },
    onSubmit: handleLogin,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone_no: Yup.string()
        .required("Phone number is required")
        .min(10, "Phone number must be at least 10 characters"),
      firstname: Yup.string().required("First name is required"),
      lastname: Yup.string().required("Last name is required"),
    }),
  });
  return (
    <div className="flex-1 px-6 py-[1.88rem] overflow-y-auto no-scrollbar">
      <p className="pb-2 font-medium text-text-400 typography-paragraph-regular">
        Please enter your name, email, and phone number to start the chat.
      </p>
      <form onSubmit={formik.handleSubmit} className="space-y-2">
        <label className="flex flex-col gap-1">
          <span className="font-semibold text-text-500 typography-paragraph-regular">
            First Name
          </span>
          <input
            type="text"
            name="firstname"
            className="bg-secondary-50 p-3 border border-gray-400 rounded-xl outline-none font-thinC font-medium text-text-400 text-sm typography-paragraph-small"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstname}
            placeholder="Enter Your First Name"
          />
          {formik.touched.firstname && formik.errors.firstname && (
            <p className="text-red-500 text-sm">{formik.errors.firstname}</p>
          )}
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-semibold text-text-500 typography-paragraph-regular">
            Last Name
          </span>
          <input
            type="text"
            name="lastname"
            className="bg-secondary-50 p-3 border border-gray-400 rounded-xl outline-none font-thinC font-medium text-text-400 text-sm typography-paragraph-small"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastname}
            placeholder="Enter Your Last Name"
          />
          {formik.touched.lastname && formik.errors.lastname && (
            <p className="text-red-500 text-sm">{formik.errors.lastname}</p>
          )}
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-semibold text-text-500 typography-paragraph-regular">
            Phone Number
          </span>
          <input
            type="text"
            name="phone_no"
            className="bg-secondary-50 p-3 border border-gray-400 rounded-xl outline-none font-thinC font-medium text-text-400 text-sm typography-paragraph-small"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone_no}
            placeholder="Enter Your Last Name"
          />
          {formik.touched.phone_no && formik.errors.phone_no && (
            <p className="text-red-500 text-sm">{formik.errors.phone_no}</p>
          )}
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-semibold text-text-500 typography-paragraph-regular">
            Email Address
          </span>
          <input
            type="text"
            name="email"
            className="bg-secondary-50 p-3 border border-gray-400 rounded-xl outline-none font-thinC font-medium text-text-400 text-sm typography-paragraph-small"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="Enter Your Last Name"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm">{formik.errors.email}</p>
          )}
        </label>

        <button
          type="submit"
          className="bg-secondary-500 mt-4 p-3 border border-secondary-200 rounded-full w-full font-semibold text-white text-sm typography-paragraph-small"
          style={{
            boxShadow: "0px 5.486px 12.343px 0px rgba(215, 101, 120, 0.33)",
          }}
        >
          Start Chat
        </button>
      </form>
    </div>
  );
};

export default ChatLoginForm;
