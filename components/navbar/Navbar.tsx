import React, { FC } from 'react';
import Button from '../common/Button';
import Container from '../common/Container';
import NavLink from '../common/NavLink';

const Navbar: FC = () => {
  return (
    <div className='py-2 border-b border-gray-100'>
      <Container>
        <div className='flex justify-between items-center'>
          <div>
            <NavLink href='/' title='Главная' />
          </div>
          <div className='absolute left-[50%]'>Logo</div>
          <div>
            <Button>1231</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
