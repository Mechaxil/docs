import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';



const FeatureList = [
  {
    title: 'Solar Energy Project',
    Img: require('@site/static/img/solar_project.png').default,
    description: (
      <>
        Learn how to harness the power of the sun with our comprehensive solar
        energy project guides and tutorials.
      </>
    ),
  },
  {
    title: 'Weather Station Project',
    Img: require('@site/static/img/weather_project.png').default,
    description: (
      <>
        Stay informed about the latest weather conditions with your own weather
        station, built using our easy-to-follow project guides.
      </>
    ),
  },
  {
    title: 'Smart Agriculture Project',
    Img: require('@site/static/img/smart_agriculture_project.png').default,
    description: (
      <>
        Revolutionize your farming practices with your smart agriculture project,
        utilizing easy-to-follow guides and tutorials.
      </>
    ),
  },
];

function Feature({ Img, title, description }) {
  const isSvg = typeof Img === 'function';

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {isSvg ? (
          <Img className={styles.featureSvg} role="img" />
        ) : (
          <img src={Img} alt={title} className={styles.featureSvg} />
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
