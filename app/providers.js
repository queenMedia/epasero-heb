"use client";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";

const Providers = ({ children }) => {
  return children; //<I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
export default Providers;
