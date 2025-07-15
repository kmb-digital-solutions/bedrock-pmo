import React from "react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  title,
}) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-6">
        <div className="border-l-4 border-blue-500 pl-4 italic text-gray-600 mb-4">
          "{quote}"
        </div>
        <div className="flex items-center">
          <div className="ml-4">
            <h4 className="text-lg font-medium text-gray-900">{name}</h4>
            <p className="text-sm text-gray-500">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
