"use client";
import React, { useEffect, useState, useRef } from "react";

const metricsData = [
  { value: "5000", symbol: "+", label: "משקיעים מרוצים", formated: true },
  { value: "13.5", symbol: "%", label: "ממוצע תשואה שנתי" },
  { value: "8", symbol: "", label: "שנות נסיון" },
  { value: "0", symbol: "%", label: "עמלות תיווך" },
];

const duration = 900; // Total duration in milliseconds
const steps = 100; // Number of steps

const Metrics = ({ items = metricsData }) => {
  const [animatedValues, setAnimatedValues] = useState(items.map(() => 0));
  const [finished, setFinished] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    const list = listRef.current;
    if (list && items.length) {
      const io = new IntersectionObserver(
        (ev) => {
          if (ev.at(0).isIntersecting) {
            console.log("Metrics are visible");
            const interval = duration / steps;

            items.forEach((item, index) => {
              const targetValue = parseFloat(
                item.value.replace(/[^0-9.]/g, "")
              );

              let currentStep = 0;
              const irval = setInterval(() => {
                currentStep++;
                const easingFactor = Math.sin(
                  (currentStep / steps) * (Math.PI / 2)
                );
                setAnimatedValues((prev) => {
                  const newValues = [...prev];
                  newValues[index] = Math.min(
                    targetValue,
                    targetValue * easingFactor
                  );
                  return newValues;
                });

                if (currentStep >= steps) {
                  clearInterval(irval);
                  setFinished(true);
                }
              }, interval);
            });
            io?.unobserve(list);
          }
        },
        { root: null, rootMargin: "0px", threshold: 1.0 }
      );

      list && io.observe(list);

      return () => {
        list && io?.unobserve(list);
      };
    }
  }, [items]);

  return (
    <ul className="flex-row" ref={listRef}>
      {items.map((item, index) => (
        <li key={index} className="rtl-wrapper accent-text">
          <strong>
            {item.formated && finished
              ? animatedValues[index].toLocaleString()
              : animatedValues[index].toFixed(0)}
            {item.symbol}
          </strong>
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
};

export default Metrics;
