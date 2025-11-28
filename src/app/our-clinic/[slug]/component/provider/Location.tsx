"use client";
import React, { createContext, useContext } from "react";

interface ILocationContextType {
  address: string;
  exact_location: string;
  normal_working_hour: string;
  saturday_working_hour: string;
  phone: string;
  email: string;
  map: string;
}

const LocationContext = createContext<ILocationContextType | null>(null);

const useLocationContext = () => {
  const context = useContext(LocationContext);
  if (!context)
    throw new Error("Location component must be inside the Location Component");
  return context;
};

const Location = ({ children }: { children: React.ReactNode }) => {
  const defaultValues: ILocationContextType = {
    address: "Biratnagar, Nepal56613",
    exact_location: "Main Road Near City Center",
    normal_working_hour: "Sunday - Friday: 9:00 AM - 6:00 PM",
    saturday_working_hour: "Saturday: 9:00 AM - 1:00 PM",
    email: "biratnagar@vatsalyaivf.com",
    phone: "+977 021-123456",
    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.3998869053817!2d85.37393427616713!3d27.674032926958663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b4570b34f7f%3A0x659fca01a17185a2!2sVatsalya%20Natural%20IVF%20-%20Bhaktapur!5e0!3m2!1sen!2snp!4v1764243128232!5m2!1sen!2snp" width="1080" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  };
  return (
    <LocationContext.Provider value={defaultValues}>
      <div className="u-padding-x u-padding-y bg-primary-50">{children}</div>
    </LocationContext.Provider>
  );
};

const LocationWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {children}
    </div>
  );
};

const Content = () => {
  const data = useLocationContext();
  const content = [
    {
      label: "Address",
      first_key: "address" as keyof ILocationContextType,
      second_key: "exact_location" as keyof ILocationContextType,
    },
    {
      label: "Timings",
      first_key: "normal_working_hour" as keyof ILocationContextType,
      second_key: "saturday_working_hour" as keyof ILocationContextType,
    },
    {
      label: "Contact",
      first_key: "phone" as keyof ILocationContextType,
      second_key: "email" as keyof ILocationContextType,
    },
  ];
  return (
    <div className="space-y-4.5">
      <p className="typo-xl-bd-md text-[#101828]">Clinic Details</p>

      <div className="py-8 px-6 bg-[#FCE1E3] rounded-[1.5rem]">
        {content.map((item) => (
          <p key={item.first_key} className="py-2 flex flex-col gap-y-2">
            <span className="typo-mid-bd-reg text-[#6A7282]">{item.label}</span>
            <span className="typo-lg-bd-reg text-[#101828]">
              {data[item.first_key]}
            </span>
            <span className="typo-lg-bd-reg text-[#101828]">
              {data[item.second_key]}
            </span>
          </p>
        ))}
      </div>
    </div>
  );
};

const MapLocation = () => {
  const { map } = useLocationContext();
  return (
    <div className="space-y-4 lg:col-span-2">
      <p className="typo-xl-bd-md text-[#101828]">
        Find us easily in central Biratnagar
      </p>
      <div className="  ">
        <div
          className="w-full mx-auto shrink-0 border border-[#99A1AF] rounded-2xl overflow-hidden"
          dangerouslySetInnerHTML={{ __html: map }}
        />
      </div>
    </div>
  );
};

Location.Wrapper = LocationWrapper;
Location.Content = Content;
Location.Map = MapLocation;

export default Location;
