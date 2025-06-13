import React from "react";

export const ContactForm = () => {
  return (
    <form action="">
      <div className="form-group">
        <input
          type="tel"
          id="phone"
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
        <select name="amount" id="amount" placeholder="תקציב השקעה מעוניין*">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <div className="form-group">
        <input
          type="date"
          id="date"
          name="date"
          required
          placeholder="מתי תרצו שנחזור אליכם?*"
        />
      </div>
      <p>שליחת הפרטים מהווה אישור לתנאי השימוש ולמדיניות הפרטיות.</p>
      <button type="submit">לתיאום פגישת ייעוץ ללא עלות</button>
    </form>
  );
};
