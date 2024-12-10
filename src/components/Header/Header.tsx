import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Layout, Image, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import ButtonBase from '../ButtonBase/ButtonBase';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import InputBase from '../InputBase/InputBase';
import Logo from '../../assets/logo.svg';
import { getLangIcon } from '../../utils/icons';
import styles from './Header.module.scss';
const { Header } = Layout;

enum LanguageType {
  RU = 'ru',
  EN = 'en',
}

const HeaderComponent: React.FC = () => {
  const [lang, setLang] = useState('ru');
  const { t, i18n } = useTranslation();
  const toggleLang = () => {
    if (lang === LanguageType.RU) {
      i18n.changeLanguage(LanguageType.EN);
      setLang(LanguageType.EN);
    } else {
      i18n.changeLanguage(LanguageType.RU);
      setLang(LanguageType.RU);
    }
  };
  return (
    <div>
      <Header className={styles.header}>
        <Image className={styles.logo} src={Logo}></Image>

        <div className={styles.headerWrapper}>
          <>
            <Menu className={styles.menu}>
              <ButtonBase color="dark" size="--button-s" text={t('header.items.course')} />
              <ButtonBase color="dark" marginL="base" size="--button-s" text={t('header.items.contact')} />
            </Menu>

            <div className={styles.inputWrapper}>
              <InputBase size="--input-s" placeholder={t('searchButtonText')} />
              <ButtonBase
                classes={styles.buttonAbsolute}
                color="primary"
                size="--button-s"
                text={t('header.items.searchButtonText')}
              />
            </div>

            <ButtonIcon color="primary" size="--iconButton-s" marginL="base" icon={<UserOutlined />}></ButtonIcon>

            <ButtonIcon
              color="transparent"
              size="--iconButton-s"
              marginL="base"
              icon={getLangIcon(lang)}
              handleClick={toggleLang}
            ></ButtonIcon>
          </>
        </div>
      </Header>
    </div>
  );
};

export default HeaderComponent;
