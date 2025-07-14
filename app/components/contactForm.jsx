"use client";
import React, { useEffect, useState } from "react";
import { useActionState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import PhoneInput from "react-phone-input-2";
import { isPossiblePhoneNumber, isValidPhoneNumber } from "libphonenumber-js";
import "react-phone-input-2/lib/style.css";

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

async function send(previousState, formData, countryCode) {
  const data = Object.fromEntries(formData.entries());

  const errors = [];

  //add basic validation
  if (
    !data.phone ||
    !data.name ||
    !data.email ||
    !data.amount ||
    data.amount === "default"
    // || !data.date
  ) {
    errors.push("כל השדות נדרשים");
  }
  // check email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(data.email)) {
    errors.push("פורמט אימייל לא חוקי");
  }

  // check phone number
  if (!data.phone || !isPossiblePhoneNumber(data.phone, countryCode)) {
    errors.push("מספר טלפון לא חוקי");
  } else if (!isValidPhoneNumber(data.phone, countryCode)) {
    errors.push("מספר טלפון לא תקין");
  }

  // check that date is in the future
  //const selectedDate = new Date(data.date);

  // const today = new Date();
  // today.setHours(0, 0, 0, 0); // Set time to midnight for comparison

  // if (selectedDate < today) {
  //   errors.push("התאריך הנבחר חייב להיות בעתיד");
  // }

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
        //start_date: new Date(data.date).toLocaleDateString("he-IL"),
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
  const [state, action, isPending] = useActionState(
    (...args) => send(...args, countryCode),
    null
  );
  const [countryCode, setCountryCode] = useState("");

  useEffect(() => {
    const storedCountryCode = localStorage.getItem("countryCode");
    if (storedCountryCode) {
      return void setCountryCode(storedCountryCode);
    }
    fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((data) => {
        setCountryCode(data.country_code);
        localStorage.setItem("countryCode", data.country_code);
      })
      .catch((error) => console.error("Error fetching country code:", error));
  }, []);

  const router = useRouter();

  //console.log("Current form state:", state);

  //const dateRef = useRef(null);

  const data = state?.data || {};

  const success = state?.status === "success";

  useEffect(() => {
    if (success) {
      router.push("/thank-you");
    }
  }, [success, router]);

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
        <PhoneInput
          country={countryCode?.toLowerCase()}
          inputProps={{
            name: "phone",
            id: "phone",
            // dir: "rtl",
            // required: true,
          }}
          value={data.phone}
          inputClass="phone-input"
          countryCodeEditable={true}
          placeholder="טלפון*"
          onChange={(_phone, x) => {
            console.log(x, "x");
            setCountryCode(x.countryCode);
          }}
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

      <button disabled={isPending || success} type="submit">
        {" "}
        {isPending ? <span className="loader"></span> : success ? "✓" : "שליחה"}
      </button>
    </form>
  );
};
