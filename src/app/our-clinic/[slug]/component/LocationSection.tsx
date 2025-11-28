"use client";
import React from "react";
import Location from "./provider/Location";

const LocationSection = () => {
  return (
    <Location>
      <Location.Wrapper>
        <Location.Content />
        <Location.Map />
      </Location.Wrapper>
    </Location>
  );
};

export default LocationSection;
