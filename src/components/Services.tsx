import React from "react";
import { Briefcase, LineChart, Users, BarChart } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { Parallax } from "react-scroll-parallax";

interface ServicesProps {
  // Add any props if needed
}

const Services: React.FC<ServicesProps> = () => {
  const serviceItems = [
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "PMO Setup & Optimization",
      description:
        "Establish or enhance your PMO with proven frameworks and best practices.",
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Strategic Planning",
      description:
        "Align your project portfolio with organizational objectives and strategy.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Development",
      description:
        "Build high-performing project teams through training and mentorship.",
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Performance Metrics",
      description:
        "Implement effective project monitoring and reporting systems.",
    },
  ];

  return (
    <div id="services" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Parallax translateY={[10, -10]} opacity={[0.8, 1]}>
          <div className="lg:text-center">
            <span className="text-base font-semibold tracking-wide text-blue-600 uppercase">
              SERVICES
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Comprehensive PMO Solutions
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We offer end-to-end project management consulting services to help
              your organization succeed.
            </p>
          </div>
        </Parallax>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {serviceItems.map((service, index) => (
            <Parallax
              key={index}
              translateY={[20, -20]}
              opacity={[0.7, 1]}
              scale={[0.9, 1]}
              easing="easeInQuad"
              startScroll={100 * index}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </Parallax>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
