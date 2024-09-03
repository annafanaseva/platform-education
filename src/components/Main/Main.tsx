import { useTranslation } from 'react-i18next';

import { RootState } from '../../store/store';

import styles from './Main.module.scss';

const Main: React.FC = () => {
  const { t, i18n } = useTranslation();
  const languagee = useSelector((state: RootState) => state.global.language);

  const changeLang = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="layout">
      <div className={styles.main}>
        <h1 className={styles.title}>{t('main.title')}</h1>
        <div className={styles.info}></div>
      </div>
    </div>
  );
};

export default Main;
