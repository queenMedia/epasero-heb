"use client";
import React, { useRef } from "react";
import { useActionState } from "react";
import Image from "next/image";

async function send(previousState, formData) {
  console.log("Form submitted with data:", formData);
  const data = Object.fromEntries(formData.entries());
  console.log("Processed form data:", data);
  const errors = [];
  //add basic validation
  if (!data.phone || !data.name || !data.email || !data.amount || !data.date) {
    errors.push("All fields are required.");
  }
  // check email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(data.email)) {
    errors.push("Invalid email format.");
  }

  // check that date is in the future
  const selectedDate = new Date(data.date);

  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set time to midnight for comparison
  if (selectedDate < today) {
    errors.push("Selected date must be in the future.");
  }

  if (errors.length > 0) {
    return {
      status: "error",
      errors,
    };
  } else {
    console.log("Form submitted successfully with data:", data);
    return {
      status: "success",
      message: "Form submitted successfully!",
    };
  }
}

export const ContactForm = () => {
  const [state, action] = useActionState(send, null);

  console.log("Current form state:", state);

  const dateRef = useRef(null);

  return (
    <form action={action}>
      <div className="form-group">
        <input
          type="tel"
          id="phone"
          dir="rtl"
          name="phone"
          required
          placeholder="טלפון*"
        />
      </div>
      <div className="form-group">
        <input
          type="name"
          id="name"
          name="name"
          required
          placeholder="שם מלא*"
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="מייל*"
        />
      </div>

      <div className="form-group">
        <Image
          width={16}
          height={9}
          src="assets/icons/arrowDown.svg"
          alt="Phone Icon"
          className="arrow-down-icon"
        />
        <select name="amount" id="amount" defaultValue={"default"}>
          <option value="default" disabled hidden>
            תקציב השקעה מעוניין*
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <div className="form-group">
        <Image
          width={16}
          height={9}
          src="assets/icons/arrowDown.svg"
          alt="Phone Icon"
          className="arrow-down-icon"
        />
        <input
          type="text"
          id="date"
          name="date"
          ref={dateRef}
          // hidden
          required
          placeholder="מתי תרצו שנחזור אליכם?*"
          onFocus={() => {
            dateRef.current.type = "date";
          }}
          onBlur={() => {
            if (!dateRef.current.value) {
              dateRef.current.type = "text";
              dateRef.current.placeholder = "מתי תרצו שנחזור אליכם?*";
            }
          }}
        />
      </div>
      <p>שליחת הפרטים מהווה אישור לתנאי השימוש ולמדיניות הפרטיות.</p>
      <button type="submit">לתיאום פגישת ייעוץ ללא עלות</button>
    </form>
  );
};
