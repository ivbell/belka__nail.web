import React, { FC } from 'react';

type Props = {
  children?: React.ReactNode;
};

const Container: FC<Props> = (props) => {
  return <div className={'container mx-auto px-4'}>{props.children}</div>;
};

export default Container;
