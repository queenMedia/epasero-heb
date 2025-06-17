"use client";
import React, { useRef } from "react";
import { useActionState } from "react";
import Image from "next/image";

const CONFIG = {
  system_url:
    "https://hubspot-proxy-0d8d4ed31dcb.herokuapp.com/leadPush?pid=epshb",
  headers: {
    "Content-Type": "text/plain;charset=utf-8",
  },
};

export const splitFullName = (fullName) => {
  if (!fullName)
    return {
      firstName: "",
      lastName: "",
    };
  // Split the full name by spaces
  const nameParts = fullName.trim().split(/\s+/);

  // Extract the first name
  const firstName = nameParts[0];

  // Extract the last name (join remaining parts to handle middle names)
  const lastName = nameParts.slice(1).join(" ");

  return {
    firstName,
    lastName,
  };
};

async function send(previousState, formData) {
  const data = Object.fromEntries(formData.entries());

  const errors = [];

  //add basic validation
  if (
    !data.phone ||
    !data.name ||
    !data.email ||
    !data.amount ||
    data.amount === "default" ||
    !data.date
  ) {
    errors.push("כל השדות נדרשים");
  }
  // check email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(data.email)) {
    errors.push("פורמט אימייל לא חוקי");
  }

  // check that date is in the future
  const selectedDate = new Date(data.date);

  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set time to midnight for comparison
  if (selectedDate < today) {
    errors.push("התאריך הנבחר חייב להיות בעתיד");
  }

  if (errors.length > 0) {
    return {
      status: "error",
      errors,
      data,
    };
  } else {
    const { firstName, lastName } = splitFullName(data.name);
    const leadData = {
      properties: {
        firstname: firstName,
        lastname: lastName,
        phone: data.phone,
        email: data.email,
        start_date: new Date(data.date).toLocaleDateString("he-IL"),
        investment_budget:
          data.amount === "1"
            ? "hcELbnsoHrdRrCisZL2IG"
            : data.amount === "2"
            ? "v426o9PQOwtFyqUpg7CmX"
            : data.amount === "3"
            ? "2,000,000 - 3,500,000"
            : data.amount === "4"
            ? "3,500,000 - 10,000,000"
            : data.amount === "5"
            ? "Less than 500,000"
            : "Unknown",
      },
    };

    const response = await fetch(CONFIG.system_url, {
      method: "POST",
      headers: CONFIG.headers,
      body: JSON.stringify(leadData),
    });

    if (response.status !== 200) {
      return {
        status: "error",
        errors: ["שליחת הטופס נכשלה. אנא נסה שוב מאוחר יותר."],
        data,
      };
    }

    return {
      status: "success",
      message: "Form submitted successfully!",
    };
  }
}

export const ContactForm = () => {
  const [state, action, isPending] = useActionState(send, null);

  console.log("Current form state:", state);

  const dateRef = useRef(null);

  const data = state?.data || {};

  const success = state?.status === "success";

  return (
    <form
      action={action}
      className={`${isPending ? "pending" : ""} ${
        state?.status === "error" ? "error" : ""
      } ${success ? "success" : ""}`}
      id="contact-form"
    >
      {state?.errors ? (
        <ul className="Errors">
          {state.errors.map((e, index) => (
            <li key={index}>{e}</li>
          ))}
        </ul>
      ) : null}
      <div className="form-group">
        <input
          type="tel"
          id="phone"
          dir="rtl"
          name="phone"
          required
          defaultValue={data.phone || ""}
          placeholder="טלפון*"
        />
      </div>
      <div className="form-group">
        <input
          type="name"
          id="name"
          name="name"
          required
          defaultValue={data.name || ""}
          placeholder="שם מלא*"
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          id="email"
          name="email"
          required
          defaultValue={data.email || ""}
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
          <option value="5">‏עד ₪500,000</option>
          <option value="1">‏500,000 – ‏₪1,000,000</option>
          <option value="2">‏1,000,000 – ‏₪2,000,000</option>
          <option value="3">‏2,000,000 – ‏₪3,500,000</option>
          <option value="4">‏3,500,000 – ‏₪10,000,000</option>
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
          // defaultValue={data.date ? new Date(data.date) : undefined}
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
      <button disabled={isPending || success} type="submit">
        {" "}
        {isPending ? (
          <span className="loader"></span>
        ) : success ? (
          "✓"
        ) : (
          " לתיאום פגישת ייעוץ ללא עלות"
        )}
      </button>
    </form>
  );
};
