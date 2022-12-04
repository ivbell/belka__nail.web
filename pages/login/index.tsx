import React, { useState } from 'react';
import MainLayout from '../../components/layouts/MainLayout';
import Heading from '../../components/common/Heading';
import Input from '../../components/common/Input';
import FormLabel from '../../components/common/FormLabel';
import Button from '../../components/common/Button';
import Link from 'next/link';
import { RouteNamesEnum } from '../../lib/enums/RouteNamesEnum';

const initialState = {
  username: '',
  password: '',
};
const LoginPage = () => {
  const [user, setUser] = useState(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const validateUser = (): boolean => {
    console.log('validateUser');
    return false;
  };

  return (
    <MainLayout>
      <div className='mt-[30px] p-3 border border-gray-300 w-[300px] rounded-md text-center mx-auto'>
        <Heading>Войти</Heading>
        <div className={'flex gap-3 flex-col py-2'}>
          <FormLabel label='Телефон'>
            <Input
              onChange={handleChange}
              name={'username'}
              value={user.username}
            />
          </FormLabel>
          <FormLabel label='Пароль'>
            <Input
              onChange={handleChange}
              type={'password'}
              name={'password'}
              value={user.password}
            />
          </FormLabel>
          <div className={'my-2 divide-y grid gap-5 grid-cols-1 '}>
            <div>
              <Button onClick={validateUser}>Войти</Button>
            </div>
            <div className={'pt-2'}>
              <Link href={RouteNamesEnum.REGISTRATION}>
                <Button type={'link'}>Регистрация</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default LoginPage;
