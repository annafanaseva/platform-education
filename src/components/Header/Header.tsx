import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Layout, Image, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import ButtonBase from '../ButtonBase/ButtonBase';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import InputBase from '../InputBase/InputBase';
import Logo from '../../assets/logo.svg';
import { getLangIcon } from '../../utils/icons';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Header.module.scss';
import { RootState } from '../../store/store';
import { changeLanguage } from '../../store/globalSlice';

const { Header } = Layout;

const HeaderComponent: React.FC = () => {
  const [lang, setLang] = useState('ru');
  const { t, i18n } = useTranslation();

  const languagee = useSelector((state: RootState) => state.global.language);
  const dispatch = useDispatch();
  console.log(languagee);

  const changeLang = (language: string) => {
    i18n.changeLanguage(language);
  };

  const toggleLang = (lang: string) => {
    if (lang === 'ru') {
      setLang('en');
      dispatch(changeLanguage(lang));
      changeLang('en');
    } else if (lang === 'en') {
      setLang('ru');
      dispatch(changeLanguage(lang));
      changeLang('ru');
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
              handleClick={() => toggleLang(lang)}
            ></ButtonIcon>
          </>
        </div>
      </Header>
    </div>
  );
};

export default HeaderComponent;
