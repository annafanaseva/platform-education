export type ButtonIconProps = {
  icon: React.ReactNode;
  size: '--iconButton-xs' | '--iconButton-s' | '--iconButton-m';
  color: 'primary' | 'secondary' | 'dark' | 'transparent';
  fontSize?: '--font-size-xs' | '--font-size-s' | '--font-size-m';
  disabled?: boolean;
  classes?: string;
  marginL?: 'base' | 'base-double' | 'base-half';
  marginB?: 'base' | 'base-double' | 'base-half';
  handleClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
};
