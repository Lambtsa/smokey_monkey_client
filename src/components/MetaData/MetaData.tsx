import Head from "next/head";
import type { MetaData as MetaDataProps } from "@helpers/metadata";
import { useTranslation } from "@hooks/useTranslation";

const isProduction = false;
/* TODO: Sort this out */
// const isProduction = process.env.NODE_ENV === "production";

export const MetaData = ({
  title,
  description,
  url,
}: MetaDataProps): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>{t({ id: title })}</title>
      <meta name="description" content={t({ id: description })} />
      {/* <link rel="manifest" href="/manifest.json" /> */}
      <meta property="og:title" content={t({ id: title })} />
      <meta property="og:description" content={t({ id: description })} />
      <meta property="og:image" content="/og-image.png" />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={t({ id: title })} />
      {isProduction && (
        <>
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />
        </>
      )}
    </Head>
  );
};
