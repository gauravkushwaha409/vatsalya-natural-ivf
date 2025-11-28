"use client";
import React from "react";
import Location from "./provider/Location";

const LocationSection = () => {
  return (
    <React.Fragment>
      <Location.ContextWrapper>
        <Location.Wrapper>
          <Location.Content />
          <Location.Map />
        </Location.Wrapper>
      </Location.ContextWrapper>
    </React.Fragment>
  );
};

export default LocationSection;
