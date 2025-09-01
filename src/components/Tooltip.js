import styles from './Tooltip.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Tooltip({ children, content, link }) {
  const base = useBaseUrl('/'); // '/' or '/docs/'
  const processed = content
    ? content.replace(/src="(?!https?:)([^"]+)"/g, (_, p1) =>
        `src="${base}${p1.replace(/^\/+/, '')}"`
      )
    : content;

  const inner = (
    <span className={styles.tooltip}>
      {children}
      <span
        className={styles.tooltiptext}
        dangerouslySetInnerHTML={{ __html: processed }}
      />
    </span>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.tooltipLink}>
      {inner}
    </a>
  ) : inner;
}
