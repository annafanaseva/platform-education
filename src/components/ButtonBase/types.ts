export type ButtonBaseProps = {
  text: string;
  size: '--button-xs' | '--button-s' | '--button-m';
  color: 'primary' | 'secondary' | 'dark';
  fontSize?: '--font-size-xs' | '--font-size-s' | '--font-size-m';
  disabled?: boolean;
  classes?: string;
  marginL?: 'base' | 'base-double' | 'base-half';
  marginB?: 'base' | 'base-double' | 'base-half';
  handleClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
};
