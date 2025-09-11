import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';

const FeatureList = [
  {
    // title, desc, alt become translatable keys
    title: <Translate id="features.solar.title">Solar Energy Project</Translate>,
    alt: translate({ id: 'features.solar.alt', message: 'Solar Project' }),
    Img: require('@site/static/img/solar_project.png').default,
    description: (
      <Translate id="features.solar.desc">
        Learn how to harness the power of the sun with our comprehensive solar
        energy project guides and tutorials.
      </Translate>
    ),
  },
  {
    title: <Translate id="features.weather.title">Weather Station Project</Translate>,
    alt: translate({ id: 'features.weather.alt', message: 'Weather Station Project' }),
    Img: require('@site/static/img/weather_project.png').default,
    description: (
      <Translate id="features.weather.desc">
        Stay informed about the latest weather conditions with your own weather
        station, built using our easy-to-follow project guides.
      </Translate>
    ),
  },
  {
    title: <Translate id="features.smartag.title">Smart Agriculture Project</Translate>,
    alt: translate({ id: 'features.smartag.alt', message: 'Smart Agriculture Project' }),
    Img: require('@site/static/img/smart_agriculture_project.png').default,
    description: (
      <Translate id="features.smartag.desc">
        Revolutionize your farming practices with your smart agriculture project,
        utilizing easy-to-follow guides and tutorials.
      </Translate>
    ),
  },
];

function Feature({ Img, title, description, alt }) {
  const isSvg = typeof Img === 'function';
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {isSvg ? (
          <Img className={styles.featureSvg} role="img" aria-label={alt} />
        ) : (
          <img src={Img} alt={alt} className={styles.featureSvg} />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
