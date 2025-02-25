import React, { useRef, useState } from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { motion, useScroll, useTransform } from "motion/react";

function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "United States",
    interests: {
      resorts: false,
      retreats: false,
      wellness: false,
      newDevelopments: false,
      buildingInnovation: false,
    },
    agreedToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen text-[#323C36]  flex items-center justify-center p-6">
      <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block  mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full bg-[#C4C7B3] border-b-2 border-gray-400 py-2 px-3 focus:outline-none focus:border-gray-600 transition-colors placeholder-[#323C36]"
              placeholder="Enter your name"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="email" className="block  mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-[#C4C7B3] border-b-2 border-gray-400 py-2 px-3 focus:outline-none focus:border-gray-600 transition-colors placeholder-[#323C36]"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="phone" className="block  mb-2">
              Phone Number
            </label>
            <div className="flex">
              <div className="relative">
                <select className="appearance-none bg-[#C4C7B3] border-b-2 border-gray-400 py-2 pl-3 pr-8 focus:outline-none focus:border-gray-600">
                  <option>+1</option>
                </select>
                <FaChevronDown className="absolute right-2 top-3 w-4 h-4 " />
              </div>
              <input
                type="tel"
                id="phone"
                className="flex-1 bg-[#C4C7B3] border-b-2 border-gray-400 py-2 px-3 ml-3 focus:outline-none focus:border-gray-600 transition-colors placeholder-[#323C36]"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
          </div>

          <div>
            <label htmlFor="country" className="block  mb-2">
              Country
            </label>
            <div className="relative">
              <select
                id="country"
                className="w-full text-[#323C36] appearance-none bg-[#C4C7B3] border-b-2 border-gray-400 py-2 px-3 focus:outline-none focus:border-gray-600"
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
              >
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
                <option>Australia</option>
              </select>
              <FaChevronDown className="absolute right-3 top-3 w-4 h-4 " />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="">I would like to receive information on ELEMENTIS.</p>

          <div className="space-y-3">
            {[
              ["resorts", "Resorts and Residences"],
              ["retreats", "Retreats"],
              ["wellness", "Wellness"],
              ["newDevelopments", "New Developments"],
              ["buildingInnovation", "Building Innovation"],
            ].map(([key, label]) => (
              <label key={key} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5  rounded border-gray-400"
                  checked={
                    formData.interests[key as keyof typeof formData.interests]
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      interests: {
                        ...formData.interests,
                        [key]: e.target.checked,
                      },
                    })
                  }
                />
                <span className="">{label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5  rounded border-gray-400"
              checked={formData.agreedToTerms}
              onChange={(e) =>
                setFormData({ ...formData, agreedToTerms: e.target.checked })
              }
            />
            <span className="">
              I agree to the{" "}
              <a href="#" className="underline">
                Policies and Terms
              </a>
            </span>
          </label>
        </div>
      </form>
    </div>
  );
}

const ContactForm = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  return (
    <div ref={ref} className="grid grid-cols-2 min-h-[calc(100vh+100px)]">
      {/* Image Column */}
      <div className="relative h-full overflow-hidden">
        <motion.div className="relative w-full h-full">
          <Image src="/resort.jpeg" objectFit="cover" fill alt="Resort" />
        </motion.div>
      </div>

      {/* Form Column */}
      <div className="bg-secondary flex justify-center items-center">
        <div className="max-w-sm flex flex-col gap-3">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
