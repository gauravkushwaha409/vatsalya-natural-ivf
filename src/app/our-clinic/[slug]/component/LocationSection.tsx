"use client";
import Location from "./provider/Location";

interface IProps {
  address: string;
  name: string;
  working_days: string[];
  phone: string;
  email: string;
  map: string;
}

const LocationSection = ({
  name,
  address,
  email,
  map,
  phone,
  working_days,
}: IProps) => {
  return (
    <Location
      data={{ address, email, map, name, phone, timings: working_days }}
    >
      <Location.Wrapper>
        <Location.Content />
        <Location.Map />
      </Location.Wrapper>
    </Location>
  );
};

export default LocationSection;
