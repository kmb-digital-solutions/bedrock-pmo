import React from "react";

interface ContactInfoProps {
  // Add any props if needed
}

const ContactInfo: React.FC<ContactInfoProps> = () => {
  return (
    <div className="space-y-8">
      <div className="flex">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-medium text-gray-900">Phone</h3>
          <p className="mt-1 text-gray-500">
            <a href="tel:+17549000180" className="hover:text-blue-600">
              +1 (754) 900-0180
            </a>
          </p>
        </div>
      </div>

      <div className="flex">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-medium text-gray-900">Email</h3>
          <p className="mt-1 text-gray-500">
            <a
              href="mailto:info@bedrockpmo.com"
              className="hover:text-blue-600"
            >
              info@bedrockpmo.com
            </a>
          </p>
        </div>
      </div>

      <div className="flex">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-medium text-gray-900">Location</h3>
          <p className="mt-1 text-gray-500">
            Offices in the South Florida and Boston areas
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
