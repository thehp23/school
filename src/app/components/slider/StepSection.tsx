"use client";

import Image from "next/image";
import { useState } from "react";

const tabs = {
  parents: [
    {
      img: "/intro-images/HOME5.png",
      text: "The first time you let go, we hold their hand",
    },
    {
      img: "/intro-images/HOME6.png",
      text: "The first big choice in shaping their future",
    },
    {
      img: "/intro-images/HOME7-1.png",
      text: "Parenting is teamwork, and we’re with you",
    },
    {
      img: "/intro-images/HOME9.png",
      text: "A confident child and a prepared parent",
    },
  ],
  children: [
    {
      img: "/intro-images/HOME10.png",
      text: "Fun learning every day",
    },
    {
      img: "/intro-images/HOME11.png",
      text: "Exploring creativity",
    },
    {
      img: "/intro-images/HOME12.png",
      text: "Making new friends",
    },
    {
      img: "/intro-images/HOME13.png",
      text: "Growing with confidence",
    },
  ],
  franchise: [
    {
      img: "/intro-images/HOME14.png",
      text: "Start your own center",
    },
    {
      img: "/intro-images/HOME15.png",
      text: "Be part of a trusted brand",
    },
    {
      img: "/intro-images/HOME16.png",
      text: "Support & training included",
    },
    {
      img: "/intro-images/thefirst.png",
      text: "Grow your business",
    },
  ],
};

const StepSection = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof tabs>("parents");

  return (
    <div className="w-full flex justify-center mt-20 px-4">
      <div className="w-full max-w-6xl text-center">

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#0b5cab] mb-8">
          Take The First Big Step
        </h2>

        {/* TABS */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          <button
            onClick={() => setActiveTab("parents")}
            className={`px-6 py-3 rounded-full font-semibold transition ${
              activeTab === "parents"
                ? "bg-[#0b5cab] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            PARENTS
          </button>

          <button
            onClick={() => setActiveTab("children")}
            className={`px-6 py-3 rounded-full font-semibold transition ${
              activeTab === "children"
                ? "bg-[#0b5cab] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            CHILDREN
          </button>

          <button
            onClick={() => setActiveTab("franchise")}
            className={`px-6 py-3 rounded-full font-semibold transition ${
              activeTab === "franchise"
                ? "bg-[#0b5cab] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            FRANCHISE PARTNERS
          </button>
        </div>

        {/* IMAGES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {tabs[activeTab].map((item, index) => (
            <div
              key={index}
              className="relative h-[320px] rounded-2xl overflow-hidden shadow-lg group"
            >
              {/* IMAGE */}
              <Image
                src={item.img}
                alt=""
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* TEXT */}
              <div className="absolute bottom-4 left-4 right-4 text-white text-sm leading-snug">
                {item.text}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default StepSection;