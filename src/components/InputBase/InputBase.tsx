import cln from 'classnames';

import { InputBaseProps } from './types';

import styles from './InputBase.module.scss';

const ButtonBase = (props: InputBaseProps) => {
  const { value, type, placeholder, marginL, marginB, size, disabled } = props;

  const marginLKey = `marginLeft-${marginL}`;

  const marginBKey = `marginLeft-${marginB}`;

  const sizeKey = `size${size}`;

  return (
    <div className={cln(styles.inputWrapper, styles[sizeKey])}>
      <input
        className={cln(styles.input, styles[marginLKey], styles[marginBKey], {
          [styles.disabled]: disabled,
        })}
        value={value}
        type={type}
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default ButtonBase;
