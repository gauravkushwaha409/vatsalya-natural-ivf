import { useFormik } from "formik";
import * as Yup from "yup";
import { IChatLoginFormData } from "../hooks/useChatAuth";

const ChatLoginForm: React.FC<{
  handleLogin: (formData: IChatLoginFormData) => void;
}> = ({ handleLogin }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      phone_no: "",
      name: "",
    },
    onSubmit: handleLogin,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone_no: Yup.string()
        .required("Phone number is required")
        .min(10, "Phone number must be at least 10 characters"),
      name: Yup.string().required("First name is required"),
    }),
  });
  return (
    <div className="flex-1 px-6 pt-3 overflow-y-auto no-scrollbar">
      {/* <p className="pb-2 font-medium text-text-400 typography-paragraph-regular">
        Please enter your name, email, and phone number to start the chat.
      </p> */}
      <form onSubmit={formik.handleSubmit} className="space-y-2">
        <label className="flex flex-col gap-1">
          <span className="font-semibold text-text-500 typography-paragraph-regular">
            Name
          </span>
          <input
            type="text"
            name="name"
            className="bg-secondary-50 p-3 border border-gray-400 rounded-xl outline-none font-thinC font-medium text-text-400 text-sm typography-paragraph-small"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            placeholder="Enter Your  Name"
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-500 text-sm">{formik.errors.name}</p>
          )}
        </label>
        {/* <label className="flex flex-col gap-1">
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
        </label> */}
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
            placeholder="Enter Your Phone"
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
            placeholder="Enter Your Email"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm">{formik.errors.email}</p>
          )}
        </label>

        <button
          type="submit"
          className="bg-secondary-500 mt-4 p-3 border border-secondary-200 rounded-full w-full font-semibold text-white text-sm typography-paragraph-small cursor-pointer"
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
