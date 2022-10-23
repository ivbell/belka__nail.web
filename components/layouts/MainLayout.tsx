import React, { FC } from 'react';
import Navbar from '../navbar/Navbar';
import BaseLayout from './BaseLayout';
import { BaseLayoutType } from './type/BaseLayoutType';

type Props = BaseLayoutType;

const MainLayout: FC<Props> = (props) => {
  return (
    <BaseLayout title={props.title} description={props.description} headChildren={props.headChildren}>
      <Navbar />
      <main className={'py-2'}>{props.children}</main>
    </BaseLayout>
  );
};

export default MainLayout;
