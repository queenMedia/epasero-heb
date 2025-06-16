import React from "react";
import Image from "next/image";

export const RatingStars = () => {
  return (
    <div className="rating-stars flex-row">
      <Image width={22} height={22} src="assets/icons/Star.svg" alt="star" />
      <Image width={22} height={22} src="assets/icons/Star.svg" alt="star" />
      <Image width={22} height={22} src="assets/icons/Star.svg" alt="star" />
      <Image width={22} height={22} src="assets/icons/Star.svg" alt="star" />
      <Image width={22} height={22} src="assets/icons/Star.svg" alt="star" />
    </div>
  );
};
