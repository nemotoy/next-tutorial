import styles from './layout.module.css'

export default function Layout({ children }) {
  // CSS Module generates unique class name.
  return <div className={styles.container}>{children}</div>
}
