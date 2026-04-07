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

              <Link className="button button--secondary button--lg" to="/docs/projects">
                Browse Projects
              </Link>

              <Link className="button button--outline button--lg" to="https://mechaxil.com/collections/corex-kits">
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
  const docs = [
    {
      title: "Getting Started",
      desc: "Tools, setup, first circuit",
      img: "/img/SVG/getting-started.svg",
      to: "/docs/getting-started",
      disabled: false,
    },
    {
      title: "Fundamentals",
      desc: "Voltage, current, components",
      img: "/img/SVG/fundamentals.svg",
      to: "/docs/fundamentals",
      disabled: true,
    },
    {
      title: "Microcontrollers",
      desc: "Arduino, ESP, embedded basics",
      img: "/img/SVG/microcontrollers.svg",
      to: "/docs/microcontrollers",
      disabled: true,
    },
    {
      title: "Communication",
      desc: "I2C, SPI, UART",
      img: "/img/SVG/communication.svg",
      to: "/docs/communication",
      disabled: true,
    },
    {
      title: "Projects",
      desc: "Real-world builds",
      img: "/img/SVG/projects.svg",
      to: "/docs/projects",
      disabled: false,
    },
    {
      title: "Troubleshooting",
      desc: "Debugging & fixes",
      img: "/img/SVG/troubleshooting.svg",
      to: "/docs/troubleshooting",
      disabled: true,
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2">Explore Documentation</Heading>

        <div className={styles.grid}>
          {docs.map((doc, i) => {
            const Wrapper = doc.disabled ? "div" : Link;

            return (
              <Wrapper
                key={i}
                to={!doc.disabled ? doc.to : undefined}
                className={clsx(styles.card, doc.disabled && styles.cardDisabled)}
              >
                <img src={doc.img} />
                <h3>{doc.title}</h3>
                <p>{doc.desc}</p>

                {doc.disabled && (
                  <span className={styles.comingSoon}>Coming soon</span>
                )}
              </Wrapper>
            );
          })}
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