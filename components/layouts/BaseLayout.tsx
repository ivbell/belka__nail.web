import React, { FC } from 'react';
import Head from 'next/head';
import { BaseLayoutType } from './type/BaseLayoutType';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = BaseLayoutType;

const BaseLayout: FC<Props> = (props) => {
  const title = props.title
    ? `${props.title} | Belka Nails | Belokrylova`
    : 'Belka Nails | Belokrylova';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name='description'
          content={props.description || 'Онлайн запись'}
        />
        <link rel='icon' href='/favicon.ico' />
        {props.headChildren}
      </Head>
      {props.children}
      <ToastContainer
        position='bottom-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  );
};

export default BaseLayout;
