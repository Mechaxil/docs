import styles from './Tooltip.module.css';

export default function Tooltip({ children, content, link }) {
  const inner = (
    <span className={styles.tooltip}>
      {children}
      <span
        className={styles.tooltiptext}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </span>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.tooltipLink}>
      {inner}
    </a>
  ) : (
    inner
  );
}
