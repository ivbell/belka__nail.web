import React, { FC } from 'react';

type Props = {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: 'text' | 'password' | 'number';
  name?: string;
};

const Input: FC<Props> = (props) => {
  return (
    <input
      name={props.name}
      className={'border border-gray-300 p-1 px-2 rounded-md w-full'}
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default Input;
