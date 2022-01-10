import Image from 'next/image';
import styles from '../styles/Titlebar.module.css';

const Titlebar = () => {
  return (
    <section className={styles.titlebar}>
      <Image
        src="/vscode_icon.svg"
        alt="VSCode Icon"
        height={15}
        width={15}
        className={styles.icon}
      />
      <div className={styles.items}>
        <p>Dosya</p>
        <p>Düzenle</p>
        <p>Seçim</p>
        <p>Git</p>
        <p>Çalıştır</p>
        <p>Terminal</p>
        <p>Yardım</p>
      </div>
      <p className={styles.title}>Hüsnü Lübnan - Visual Studio Code</p>
      <div className={styles.windowButtons}>
        <span className={styles.minimize}></span>
        <span className={styles.maximize}></span>
        <span className={styles.close}></span>
      </div>
    </section>
  );
};

export default Titlebar;
