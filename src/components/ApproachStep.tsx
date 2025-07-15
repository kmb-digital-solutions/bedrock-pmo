import React, { ReactNode } from "react";

interface ApproachStepProps {
  icon: ReactNode;
  number: number;
  title: string;
  description: string;
}

const ApproachStep: React.FC<ApproachStepProps> = ({
  icon,
  number,
  title,
  description,
}) => {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 mr-4">
        <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-100 text-blue-600">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {number}. {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ApproachStep;
