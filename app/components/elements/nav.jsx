"use client";
import React from "react";

export const Nav = ({ render = "nav" }) => {
  const Tag = render;
  return (
    <Tag>
      <ul className="flex-row">
        <li>
          <a href="#about">אודות החברה</a>
        </li>
        <li>
          <a href="#faq-form">שאלות נפוצות</a>
        </li>
        <li>
          <a href="#contact-form">יצירת קשר</a>
        </li>
      </ul>
    </Tag>
  );
};
