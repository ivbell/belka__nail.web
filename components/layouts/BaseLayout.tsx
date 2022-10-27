import React, { FC } from 'react';
import Head from 'next/head';
import { BaseLayoutType } from './type/BaseLayoutType';

type Props = BaseLayoutType;

const BaseLayout: FC<Props> = (props) => {
  const title = props.title ? `${props.title} | Belka Nails | Belokrylova` : 'Belka Nails | Belokrylova';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={props.description || 'Онлайн запись'} />
        <link rel='icon' href='/favicon.ico' />
        {props.headChildren}
      </Head>
      {props.children}
    </>
  );
};

export default BaseLayout;
