import React, { FC } from 'react';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  type: 'link' | 'primary' | 'ghost';
};

const Button: FC<Props> = (props) => {
  const { type = 'primary' } = props;

  const _classNames = (): string => {
    switch (type) {
      case 'link':
        return 'text-green-600 hover:text-green-800';
      case 'primary':
        return 'bg-green-600 hover:bg-green-800 text-white hover:bg-green-500';
      case 'ghost':
        return 'bg-white border border-green-600 hover:bg-green-600 hover:text-white';
      default:
        return '';
    }
  };

  return (
    <div className={`px-4 py-1 rounded-sm cursor-pointer transition-all  ${_classNames()}`} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default Button;
