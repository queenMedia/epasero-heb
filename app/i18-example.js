import { useRouter } from "next/router";

const I18Example = () => {
  const { locale, locales, defaultLocale } = useRouter();

  return (
    <div>
      <h1>Current Locale: {locale}</h1>
      <p>Available Locales: {locales.join(", ")}</p>
      <p>Default Locale: {defaultLocale}</p>
    </div>
  );
};

export default I18Example;
