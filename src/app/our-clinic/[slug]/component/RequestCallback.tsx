"use client";
import { getData } from "@/api/axios";
import { BASE_API_URL, endpoints } from "@/api/endpoints";
import FormInputText from "@/components/form/FormInputText";
import { showSuccessMessage } from "@/utils/toast";
import { FormikContext, useFormik, useFormikContext } from "formik";
import { Phone } from "lucide-react";
import React from "react";

interface IProps {
  phone: string | null;
}

const RequestCallback = ({ phone }: IProps) => {
  return (
    <div className="u-padding-x u-padding-b grid grid-cols-1 md:grid-cols-2 u-gap-x u-gap-y">
      <Content phone={phone} />
      <CallBack />
    </div>
  );
};

const Content = ({ phone }: IProps) => {
  const handleClickPhone = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = `tel:${phone}`;
  };
  const handleClickWhatsapp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(`https://wa.me/${phone}`, "_blank");
  };
  return (
    <div>
      <p className="typo-sub-h3-reg text-text-500">
        Not sure if Biratnagar is right for you?
      </p>
      <p className="mt-4 typo-lg-bd-reg text-text-300">
        Our team can help you understand your options and determine the best
        location for your care. Request a callback and we'll reach out to
        discuss your needs and answer any questions.
      </p>

      <div className="mt-8 flex flex-col gap-y-4 lg:flex-row items-center justify-between">
        <button
          onClick={handleClickPhone}
          className="px-14 py-3.5 typo-xl-bd-reg flex items-center justify-center gap-x-2 border border-primary-500 rounded-full"
        >
          <Phone className="text-secondary-500 size-6" />
          +977 021-123456
        </button>
        <button
          onClick={handleClickWhatsapp}
          className="px-14 py-3.5 typo-xl-bd-reg flex items-center justify-center gap-x-2 border border-primary-500 rounded-full"
        >
          <WhatsApp />
          +977 021-123456
        </button>
      </div>
    </div>
  );
};
const CallBack = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      city: "",
      preferedTime: "",
    },
    onSubmit: async (values) => {
      const promise = await fetch(BASE_API_URL + endpoints.requestCall, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!promise.ok) {
        const error = await promise.text();
        throw new Error(error || "Failed to create patient story");
      }
      const response = await promise.json();
      showSuccessMessage(response?.message);
      formik.resetForm();
    },
  });
  return (
    <div className="p-8 rounded-[1.75rem] bg-[#FCE1E3]">
      <FormikContext value={formik}>
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-4">
          <FormInputText
            name="name"
            label="Full Name"
            placeholder="Enter Full Name..."
            required
          />
          <FormInputText
            name="phone"
            label="Phone No."
            placeholder="Enter your phone No..."
            required
          />
          <FormInputText
            name="city"
            label="City / Area"
            placeholder="Enter your city..."
            required
          />
          <FormInputText
            name="preferedTime"
            label="Preferred Time"
            placeholder="Eg. Morning / Afternoon / Evening"
            required
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
          className="w-full mt-6 flex items-center justify-center self-end col-span-2 bg-secondary-500 px-6 py-3 rounded-[6.25rem] font-manrope font-bold text-white typography-paragraph-regular"
        >
          Request a Callback
        </button>
        <p className="mt-4 typo-mid-bd-reg text-text-400 text-center">
          We typically respond within 2-4 hours during business days.
        </p>
      </FormikContext>
    </div>
  );
};

const WhatsApp = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.512578 11.8563C0.512016 13.8728 1.04302 15.8417 2.0527 17.5771L0.416016 23.5066L6.53152 21.9156C8.22299 22.8292 10.1181 23.308 12.044 23.3081H12.0491C18.4067 23.3081 23.582 18.1748 23.5847 11.8653C23.586 8.80792 22.3871 5.93295 20.2089 3.76997C18.0311 1.60718 15.1347 0.415458 12.0486 0.414062C5.6902 0.414062 0.515297 5.54709 0.512672 11.8563"
        fill="url(#paint0_linear_884_5795)"
      />
      <path
        d="M0.100313 11.8527C0.0996563 13.9417 0.649687 15.981 1.69537 17.7786L0 23.9207L6.33478 22.2726C8.08022 23.2168 10.0454 23.7147 12.0451 23.7154H12.0502C18.636 23.7154 23.9972 18.3975 24 11.8621C24.0011 8.69488 22.7591 5.71656 20.5031 3.47609C18.2468 1.23591 15.2468 0.00130233 12.0502 0C5.46337 0 0.102938 5.31721 0.100313 11.8527ZM3.87291 17.469L3.63637 17.0965C2.64206 15.5277 2.11725 13.7149 2.118 11.8534C2.12006 6.4213 6.57544 2.00186 12.054 2.00186C14.7071 2.00298 17.2005 3.02921 19.0759 4.89116C20.9512 6.7533 21.9831 9.22865 21.9824 11.8614C21.98 17.2935 17.5245 21.7135 12.0502 21.7135H12.0463C10.2638 21.7126 8.51569 21.2376 6.99113 20.34L6.62831 20.1265L2.86912 21.1045L3.87291 17.469Z"
        fill="url(#paint1_linear_884_5795)"
      />
      <path
        d="M9.06383 6.89771C8.84014 6.4044 8.60473 6.39445 8.39202 6.3858C8.21783 6.37836 8.0187 6.37892 7.81977 6.37892C7.62064 6.37892 7.29711 6.45324 7.02364 6.74952C6.74989 7.04608 5.97852 7.76273 5.97852 9.22031C5.97852 10.6779 7.04848 12.0866 7.19764 12.2845C7.34698 12.482 9.26323 15.5689 12.2981 16.7564C14.8204 17.7433 15.3336 17.547 15.881 17.4975C16.4285 17.4482 17.6477 16.7811 17.8964 16.0892C18.1453 15.3975 18.1453 14.8046 18.0707 14.6807C17.996 14.5572 17.7969 14.4831 17.4983 14.335C17.1997 14.1869 15.7317 13.4701 15.458 13.3712C15.1843 13.2724 14.9853 13.2231 14.7861 13.5198C14.587 13.8159 14.0152 14.4831 13.841 14.6807C13.6669 14.8787 13.4926 14.9034 13.1941 14.7552C12.8953 14.6065 11.9337 14.2941 10.7929 13.2849C9.90523 12.4996 9.30598 11.5298 9.1318 11.2331C8.95761 10.937 9.11314 10.7764 9.26286 10.6288C9.39702 10.496 9.56155 10.2828 9.71098 10.1099C9.85986 9.93687 9.90955 9.81343 10.0091 9.61585C10.1088 9.41808 10.0589 9.24506 9.98436 9.09687C9.90955 8.94868 9.32933 7.48347 9.06383 6.89771Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_884_5795"
          x1="1158.85"
          y1="2309.67"
          x2="1158.85"
          y2="0.414062"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1FAF38" />
          <stop offset="1" stopColor="#60D669" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_884_5795"
          x1="1200"
          y1="2392.07"
          x2="1200"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F9F9F9" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default RequestCallback;
