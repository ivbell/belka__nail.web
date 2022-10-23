import Link from 'next/link';
import React, { FC } from 'react';

type Props = {
  title: string;
  href: string;
};

const NavLink: FC<Props> = (props) => {
  return (
    <Link href={props.href}>
      <span className='cursor-pointer text-grey-400 hover:text-green-600 hover:border-b hover:border-green-600'>
        {props.title}
      </span>
    </Link>
  );
};

export default NavLink;
