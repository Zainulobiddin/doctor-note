import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

export const locales = ["tj", "ru"] as const;

export const defaultLocale = "tj";
// export type Locale = ( typeof locales )[ number ];

export default getRequestConfig(async ({ locale }) => {
  if (!locale || !locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }
  return {
    messages: (await import(`@/messages/${locale}.json`)).default,
    locale,
  };
});
