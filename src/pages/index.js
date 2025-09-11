import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate, { translate } from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import Head from '@docusaurus/Head';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <Translate id="home.h1">Mechaxil Docs</Translate>
        </Heading>
        <p className="hero__subtitle">
          <Translate id="home.tagline">Documentation for Mechaxil projects and tools</Translate>
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  // Build absolute URLs for canonical + OG image
  const base = `${siteConfig.url?.replace(/\/$/, '')}${siteConfig.baseUrl || '/'}`;
  const canonical = base;
  const ogImage = `${base}img/mechaxil-og.jpg`;

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mechaxil",
    "url": base,
    "logo": ogImage,
    "sameAs": [
      "https://mechaxil.com",
      "https://github.com/Mechaxil",
      "https://www.facebook.com/profile.php?id=61579512782973",
      "https://x.com/mechaxil",
      "https://www.instagram.com/mechaxil/",
      "https://www.youtube.com/@mechaxil",
      "https://www.tiktok.com/@mechaxil?lang=en"
    ],
    "contactPoint": [{
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "hello@mechaxil.com",
      "areaServed": "HU"
    }]
  };

  const siteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": base,
    "name": "Mechaxil Docs",
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${base}search?q={query}`,
      "query-input": "required name=query"
    }
  };

  const description = translate({
    id: 'home.meta.description',
    message: 'Mechaxil - open-source electronics docs & kits (HU/EN). Raspberry Pi, ESP32, robotics, smart agriculture.',
  });
  return (
    <Layout
      title={translate({ id: 'home.layout.title', message: 'Mechaxil Documentation' })}
      description={description}
    >
      <Head>

        <link rel="canonical" href={canonical} />


        <meta property="og:title" content={translate({id:'home.og.title', message:'Mechaxil Docs'})} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={translate({id:'home.twitter.title', message:'Mechaxil Docs'})} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />


        <script type="application/ld+json">
          {JSON.stringify(orgJsonLd)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(siteJsonLd)}
        </script>
      </Head>

      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
