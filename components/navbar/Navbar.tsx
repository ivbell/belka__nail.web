import Link from 'next/link';
import React, { FC } from 'react';
import Button from '../common/Button';
import Container from '../common/Container';
import Logo from '../common/Logo';
import NavLink from '../common/NavLink';
import { RouteNamesEnum } from '../../lib/enums/RouteNamesEnum';

const Navbar: FC = () => {
  return (
    <div className='py-6'>
      <Container>
        <div className='flex justify-between items-center'>
          <div>
            <NavLink href={RouteNamesEnum.HOME} title='Главная' />
          </div>
          <Link href={RouteNamesEnum.HOME}>
            <span className='absolute top-1 left-[50%] ml-[-92px] cursor-pointer'>
              <Logo />
            </span>
          </Link>
          <div className='flex gap-3'>
            <Link href={RouteNamesEnum.ONLINE_RECORD}>
              <a>
                <Button type='ghost'>Онлайн-запись</Button>
              </a>
            </Link>
            <Link href={RouteNamesEnum.LOGIN}>
              <a>
                <Button>Войти</Button>
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
