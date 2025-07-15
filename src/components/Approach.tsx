import React from "react";
import { Search, PieChart, TrendingUp, RefreshCw } from "lucide-react";
import ApproachStep from "./ApproachStep";
import { Parallax } from "react-scroll-parallax";

interface ApproachProps {
  // Add any props if needed
}

const Approach: React.FC<ApproachProps> = () => {
  const steps = [
    {
      icon: <Search className="h-7 w-7" />,
      number: 1,
      title: "Assessment",
      description:
        "We evaluate your current project management maturity and identify opportunities for improvement.",
    },
    {
      icon: <PieChart className="h-7 w-7" />,
      number: 2,
      title: "Strategy Development",
      description:
        "Together, we create a tailored roadmap that aligns with your organizational goals.",
    },
    {
      icon: <TrendingUp className="h-7 w-7" />,
      number: 3,
      title: "Implementation",
      description:
        "We help you execute the plan with hands-on guidance and support.",
    },
    {
      icon: <RefreshCw className="h-7 w-7" />,
      number: 4,
      title: "Continuous Improvement",
      description:
        "Regular reviews and adjustments ensure sustainable success.",
    },
  ];

  return (
    <div id="approach" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Parallax translateY={[10, -10]} opacity={[0.8, 1]}>
          <div className="lg:text-center">
            <span className="text-base font-semibold tracking-wide text-blue-600 uppercase">
              OUR APPROACH
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              A Proven Path to Success
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our systematic approach ensures consistent results and lasting
              impact.
            </p>
          </div>
        </Parallax>

        <div className="max-w-4xl mx-auto mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {steps.map((step, index) => (
              <Parallax
                key={index}
                translateY={[15, -15]}
                opacity={[0.7, 1]}
                scale={[0.95, 1]}
                easing="easeInOutQuad"
                startScroll={150 * index}
              >
                <ApproachStep
                  icon={step.icon}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                />
              </Parallax>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
