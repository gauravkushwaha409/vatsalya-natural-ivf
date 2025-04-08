import React from "react";
import { IOpenPositionDetailsData } from "../../interfaces/openpostionDetails.interfaces";

interface ICareerTextContentProps {
  data: IOpenPositionDetailsData;
}
const CareerTextContent: React.FC<ICareerTextContentProps> = ({ data }) => {
  return (
    <div>
      <div className="padding pb-10">
        <p dangerouslySetInnerHTML={{ __html: data?.description }} />
      </div>
    </div>
  );
};

export default CareerTextContent;
