import cln from 'classnames';

import { ButtonBaseProps } from './types';

import styles from './ButtonBase.module.scss';

const ButtonBase = (props: ButtonBaseProps) => {
  const { text, size, color, marginL, marginB, fontSize = '', disabled, handleClick, classes = '' } = props;

  const sizeKey = `size${size}`;

  const marginLKey = `marginLeft-${marginL}`;

  const marginBKey = `marginLeft-${marginB}`;

  const fontSizeKey = `fontSize${fontSize}`;

  const bgKey = `buttonBackground-${color}`;

  return (
    <button
      onClick={handleClick}
      className={cln(
        styles.wrapperButtonBase,
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
      {text}
    </button>
  );
};

export default ButtonBase;
