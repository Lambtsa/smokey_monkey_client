import type { Metadata } from "next";

import translations from "@/locales/fr-FR.json";
import type { TranslationKey } from "@/types/translations";
import { routes } from "@/utils/routes";

export interface MetaData {
  title: TranslationKey;
  description: TranslationKey;
  url: string;
}

interface Pages {
  index: MetaData;
  smoker: MetaData;
  restaurant: {
    index: MetaData;
    reservation: MetaData;
  };
  bar: MetaData;
  contact: MetaData;
  terms: MetaData;
}

export const pageData: Pages = {
  index: {
    title: "metadata.index.title",
    description: "metadata.index.description",
    url: routes.index(),
  },
  smoker: {
    title: "metadata.smoker.title",
    description: "metadata.smoker.description",
    url: routes.smoker(),
  },
  restaurant: {
    index: {
      title: "metadata.restaurant.index.title",
      description: "metadata.restaurant.index.description",
      url: routes.restaurant.index(),
    },
    reservation: {
      title: "metadata.restaurant.reservation.title",
      description: "metadata.restaurant.reservation.description",
      url: routes.restaurant.reservation(),
    },
  },
  bar: {
    title: "metadata.bar.title",
    description: "metadata.bar.description",
    url: routes.bar(),
  },
  contact: {
    title: "metadata.contact.title",
    description: "metadata.contact.description",
    url: routes.contact(),
  },
  terms: {
    title: "metadata.terms.title",
    description: "metadata.terms.description",
    url: routes.terms(),
  },
};

const isDevelopment = process.env.NODE_ENV === "development";

const SITE_NAME = "The Smokey Monkey";

/*
 * Metadata is built on the server, before the visitor's language is known,
 * so it uses the default (French) translations.
 */
const translate = (key: TranslationKey): string => translations[key];

/**
 * Page metadata (title, link previews, robots). Relative URLs are made
 * absolute with the metadataBase that the root layout works out from each
 * request.
 */
export const createMetadata = ({
  title,
  description,
  url,
}: MetaData): Metadata => {
  const translatedTitle = translate(title);
  const translatedDescription = translate(description);

  return {
    title: translatedTitle,
    description: translatedDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: translatedTitle,
      description: translatedDescription,
      url,
      siteName: SITE_NAME,
      images: ["/logo512.png"],
      locale: "fr_FR",
      alternateLocale: ["en_GB"],
      type: "website",
    },
    robots: {
      index: !isDevelopment,
      follow: !isDevelopment,
      googleBot: {
        index: !isDevelopment,
        follow: !isDevelopment,
      },
    },
    icons: {
      icon: ["/favicon.svg", "/favicon.ico"],
      apple: "/logo192.png",
    },
  };
};
