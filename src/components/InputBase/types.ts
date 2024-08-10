export type InputBaseProps = {
  value?: string;
  type?: string;
  placeholder: string;
  size: '--input-xs' | '--input-s' | '--input-m';
  marginL?: 'base' | 'base-double' | 'base-half';
  marginB?: 'base' | 'base-double' | 'base-half';
  disabled?: boolean;
};
