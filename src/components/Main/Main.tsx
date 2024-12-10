import { useTranslation } from 'react-i18next';
import ButtonBase from '../ButtonBase/ButtonBase';

import styles from './Main.module.scss';

const Main: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="layout">
      <div className={styles.main}>
        <h1 className={styles.title}>{t('main.title')}</h1>
        <div className={styles.info}>
          <h2 className={styles.subtitle}>{t('main.subtitle')}</h2>
          <p className={styles.text}>{t('main.text')}</p>
          <ButtonBase color="primary" size="--button-m" text={t('main.button')} />
        </div>
      </div>
    </div>
  );
};

export default Main;
