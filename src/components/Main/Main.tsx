import styles from './Main.module.scss';

const Main = () => {
  return (
    <div className="layout">
      <div className={styles.main}>
        {/* <h1 className={styles.title}>{t('main.title')}</h1> */}
        <div className={styles.info}></div>
      </div>
    </div>
  );
};

export default Main;
