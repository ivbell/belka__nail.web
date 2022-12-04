import React, { FC } from 'react';

type Props = {
  label?: string;
  children?: React.ReactNode;
};

const FormLabel: FC<Props> = (props) => {
  return (
    <div>
      <div className='text-left text-gray-700'>{props.label}</div>
      <div>{props.children}</div>
    </div>
  );
};

export default FormLabel;
