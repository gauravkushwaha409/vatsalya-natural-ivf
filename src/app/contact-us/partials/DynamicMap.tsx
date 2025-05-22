"use client";
import React, { useState } from "react";
import Locations from "./Locations";
import ContactMap from "./ContactMap";

const DynamicMap = () => {
  const [selectedMapUrl, setSelectedMapUrl] = useState<string | null>(null);

  return (
    <>
      <Locations onSelectMap={setSelectedMapUrl} />
      <ContactMap mapUrl={selectedMapUrl} />
    </>
  );
};

export default DynamicMap;
