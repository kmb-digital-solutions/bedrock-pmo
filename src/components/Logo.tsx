import React from "react";

interface LogoProps {
  // Add any props if needed
}

const Logo: React.FC<LogoProps> = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-baseline">
        <span className="text-xl font-bold text-gray-900">Bedrock</span>
        <span className="ml-1 text-xl font-bold text-white bg-black px-1.5 py-0.5 rounded">
          PMO
        </span>
      </div>
      <div className="h-0.5 w-full bg-orange-500 mt-1"></div>
    </div>
  );
};

export default Logo;
