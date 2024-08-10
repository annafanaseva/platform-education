import cln from 'classnames';

import { ButtonIconProps } from './types';

import styles from './ButtonIcon.module.scss';

const ButtonIcon = (props: ButtonIconProps) => {
  const { icon, size, color, marginL, marginB, fontSize = '', disabled, handleClick, classes = '' } = props;

  const sizeKey = `size${size}`;

  const marginLKey = `marginLeft-${marginL}`;

  const marginBKey = `marginLeft-${marginB}`;

  const fontSizeKey = `fontSize${fontSize}`;

  const bgKey = `buttonBackground-${color}`;

  return (
    <button
      onClick={handleClick}
      className={cln(
        styles.wrapperButtonIcon,
        styles[sizeKey],
        styles[fontSizeKey],
        styles[bgKey],
        styles[marginLKey],
        styles[marginBKey],
        {
          [styles.disabled]: disabled,
        },
        classes
      )}
    >
      {icon}
    </button>
  );
};

export default ButtonIcon;
