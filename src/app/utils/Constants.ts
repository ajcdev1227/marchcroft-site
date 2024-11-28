/** @format */
import { useTranslation } from 'react-i18next';

export const ContentTitle =
  "text-font text-title font-bold font-objektiv-mk2 mt-10 mb-5 font-medium";
export const ContentParagraph =
  "text-font text-paragraph font-objektiv-mk2 mb-10";
export const filteringTitle = [
  "All",
  "AI",
  "News",
  "Skills and talent",
  "Data & Strategy",
  "Software Development",
];
export const useLocale = () => {
  const { i18n } = useTranslation();
  const locale = i18n.language || 'en';
  return locale.split('-')[0];
};

