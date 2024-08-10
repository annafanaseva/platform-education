import { ReactComponent as Ru } from '../assets/icon/ru.svg';
import { ReactComponent as En } from '../assets/icon/en.svg';

export const getLangIcon = (lang: string, classes?: string) => {
  switch (lang) {
    case 'ru':
      return <Ru className={classes} />;
    case 'en':
      return <En className={classes} />;
    default:
      break;
  }
};
