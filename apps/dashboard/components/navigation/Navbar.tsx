/* eslint-disable @typescript-eslint/ban-types */
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import ThemeToggler from '../buttons/ThemeToggle';
import { useRouter } from 'next/router';
import { data } from '../../utils/data';
import Link from 'next/link';
import React, { useContext } from 'react';
import { Store } from '../../context/Store';

type Props = {};

const Navbar = (props: Props) => {
  const router = useRouter();
  const { dispatch } = useContext<any>(Store);
  const { pathname } = router;

  const logoutHandler = () => {
    dispatch({ type: 'USER_LOGOUT' });
  };

  return (
    <div className="w-full main-border-b">
      <div className="max-w-7xl w-full mx-auto px-4 flex flex-row items-center space-x-4 py-4 ">
        <div className="flex flex-row items-center main-text  space-x-2 bg-primary rounded p-2">
          <p className="text-sm font-semibold">Apttrack</p>
        </div>
        <div className="md:flex hidden flex-row items-center space-x-4 text-sm font-semibold">
          {data.nav_options.map((item, index) => (
            <Link
              href={item.location}
              key={index}
              className={`${
                pathname === item.location
                  ? 'text-slate-900 dark:text-white font-bold'
                  : 'main-link-text '
              }  hover:font-semibold`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex-1" />
        <ThemeToggler />

        {/* <UserMenu /> */}
        <button
          onClick={logoutHandler}
          className="main-link-text dark:hover:bg-slate-800 hover:bg-slate-100 p-1 rounded-full"
        >
          <ArrowRightOnRectangleIcon height={20} width={20} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
