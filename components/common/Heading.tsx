import React, { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Heading: FC<Props> = (props) => {
  return <div className={'text-2xl'}>{props.children}</div>;
};

export default Heading;
