import React from "react";
import Image from "next/image";

export const ContactFormLinks = ({ className = "" }) => {
  return (
    <ul className={`contact-form-links ${className}`}>
      <li>
        <a
          href="https://www.facebook.com/epaseroIL"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="assets/icons/fb-c.svg" width={34} height={34} alt="x" />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/epasero_il"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="assets/icons/insta-c.svg"
            width={34}
            height={34}
            alt="y"
          />
        </a>
      </li>
      <li>
        <a
          href="https://wa.link/6pr94z"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="assets/icons/wapp-c.svg" width={34} height={34} alt="z" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/company/epasero-group/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="assets/icons/ln-c.svg" width={34} height={34} alt="v" />
        </a>
      </li>
    </ul>
  );
};
