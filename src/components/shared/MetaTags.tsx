import { Helmet } from 'react-helmet-async';

interface MetaTagsProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

const BASE_URL = 'https://the-lost-archive.vercel.app';

export default function MetaTags({ title, description, path = '', image }: MetaTagsProps) {
  const fullTitle = title === 'The Lost Archive' ? title : `${title} | The Lost Archive`;
  const url = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image ?? `${BASE_URL}/og-image.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image ?? `${BASE_URL}/og-image.png`} />
    </Helmet>
  );
}
