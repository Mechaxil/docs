import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import Head from '@docusaurus/Head';
import styles from './index.module.css';

/* ---------------- HERO ---------------- */

function HomepageHeader() {
  return (
    <header className={styles.heroCustom}>
      <div className="container">
        <div className={styles.heroContent}>

          <div className={styles.heroText}>
            <Heading as="h1">
              Build real electronics.
            </Heading>
            <Heading as="h1" className={styles.accent}>
              Learn by experimenting.
            </Heading>

            <p>
              Open-source hardware, structured guides, and practical projects
              designed to take you from zero to building real systems.
            </p>

            <div className={styles.heroButtons}>
              <Link className="button button--primary button--lg" to="/docs/getting-started">
                Get Started
              </Link>

              <Link className="button button--secondary button--lg" to="/docs">
                Browse Docs
              </Link>

              <Link className="button button--outline button--lg" to="/shop">
                View Kits
              </Link>
            </div>
          </div>

          <div className={styles.heroImage}>
            <img
              src="/img/Mechaxil.png"
              alt="Mechaxil Auto Watering Kit"
            />
          </div>

        </div>
      </div>
    </header>
  );
}

/* ---------------- WHAT IS ---------------- */

function WhatIsMechaxil() {
  return (
    <section className={styles.section}>
      <div className="container">

        <div className={styles.split}>

          <div>
            <Heading as="h2">What is Mechaxil?</Heading>

            <div className={styles.featuresList}>
              <div>Open-source electronics ecosystem</div>
              <div>Beginner to advanced learning path</div>
              <div>Learn by building real-world projects</div>
              <div>Accessible & affordable hardware kits</div>
            </div>
          </div>

          <img
            src="/img/mechaxil_banner_2.png"
            alt="Mechaxil kit"
            className={styles.sectionImage}
          />

        </div>

      </div>
    </section>
  );
}

/* ---------------- DOCS GRID ---------------- */

function DocsGrid() {
  return (
    <section className={styles.section}>
      <div className="container">

        <Heading as="h2">Explore Documentation</Heading>

        <div className={styles.grid}>

          <Link to="/docs/getting-started" className={styles.card}>
            <img src="/img/SVG/getting-started.svg" />
            <h3>Getting Started</h3>
            <p>Tools, setup, first circuit</p>
          </Link>

          <Link to="/docs/fundamentals" className={styles.card}>
            <img src="/img/SVG/fundamentals.svg" />
            <h3>Fundamentals</h3>
            <p>Voltage, current, components</p>
          </Link>

          <Link to="/docs/microcontrollers" className={styles.card}>
            <img src="/img/SVG/microcontrollers.svg" />
            <h3>Microcontrollers</h3>
            <p>Arduino, ESP, embedded basics</p>
          </Link>

          <Link to="/docs/communication" className={styles.card}>
            <img src="/img/SVG/communication.svg" />
            <h3>Communication</h3>
            <p>I2C, SPI, UART</p>
          </Link>

          <Link to="/docs/projects" className={styles.card}>
            <img src="/img/SVG/projects.svg" />
            <h3>Projects</h3>
            <p>Real-world builds</p>
          </Link>

          <Link to="/docs/troubleshooting" className={styles.card}>
            <img src="/img/SVG/troubleshooting.svg" />
            <h3>Troubleshooting</h3>
            <p>Debugging & fixes</p>
          </Link>

        </div>

      </div>
    </section>
  );
}

/* ---------------- MAIN ---------------- */

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  const base = `${siteConfig.url?.replace(/\/$/, '')}${siteConfig.baseUrl || '/'}`;
  const canonical = base;
  const ogImage = `${base}img/mechaxil-og.jpg`;

  const description = translate({
    id: 'home.meta.description',
    message:
      'Mechaxil - open-source electronics docs & kits (HU/EN). Raspberry Pi, ESP32, robotics, project starters.',
  });

  return (
    <Layout
      title={translate({ id: 'home.layout.title', message: 'Mechaxil Documentation' })}
      description={description}
    >
      <Head>
        <link rel="canonical" href={canonical} />

        <meta property="og:title" content="Mechaxil Docs" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mechaxil Docs" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
      </Head>

      <HomepageHeader />

      <main>
        <WhatIsMechaxil />
        <DocsGrid />
      </main>
    </Layout>
  );
}