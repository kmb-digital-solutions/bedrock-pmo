import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import { Parallax } from "react-scroll-parallax";

interface ContactProps {
  // Add any props if needed
}

const Contact: React.FC<ContactProps> = () => {
  return (
    <div id="contact" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Parallax translateY={[10, -10]} opacity={[0.8, 1]}>
          <div className="lg:text-center">
            <span className="text-base font-semibold tracking-wide text-blue-600 uppercase">
              CONTACT US
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Ready to transform your project management? Let's talk.
            </p>
          </div>
        </Parallax>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
          <Parallax
            translateX={[-20, 0]}
            opacity={[0.7, 1]}
            className="lg:col-span-1"
          >
            <ContactInfo />
          </Parallax>

          <Parallax
            translateX={[20, 0]}
            opacity={[0.7, 1]}
            className="lg:col-span-2"
          >
            <ContactForm />
          </Parallax>
        </div>
      </div>
    </div>
  );
};

export default Contact;
