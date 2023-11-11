/* eslint-disable @typescript-eslint/no-explicit-any */
// import axios from 'axios';
import Link from 'next/link';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import PrimaryButton from '../components/buttons/PrimaryButton';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';
import { getMessage } from '../helpers/getMessage';
import { Store } from '../context/Store';
import { apiUrl } from '../utils/apiUrl';
import { ContextType } from '../utils/types';

export function Index() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useContext<ContextType>(Store);
  const {userInfo} = state
  const [err, setErr] = useState('');
  const router = useRouter();
  const toast = useToast();

  useEffect(()=>{
    if(userInfo){
      router.push('/overview')
    }
  },[userInfo, router])

  const login_user = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${apiUrl}/auth/login`,
        {
          email: email,
          password: password,
        }
      );
      dispatch({ type: 'USER_LOGIN', payload: data });
      console.log(userInfo);
      toast({
        title: getMessage(data),
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      });
      setLoading(false);
      // router.push('/overview');
      setPassword('');
      setEmail('');
      // console.log(data);
    } catch (error: any) {
      toast({
        title: 'Could not login',
        position: 'top-right',
        description: getMessage(error),
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      setLoading(false);
      setErr('login fail');
    }
  };

  // console.log(userInfo)
  return (
    <>
      <Head>
        <title>Dashboard - Login</title>
      </Head>
      <div className="overflow-hidden relative min-h-screen grid items-center  w-full px-4">
        <div className="z-0 absolute top-40 left-4 md:w-96 w-60 md:h-96 h-60 bg-yellow-200 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob" />
        <div className="z-0 absolute top-52 right-52 md:w-96 w-60 md:h-96 h-60 bg-purple-200 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-2000" />
        <div className="z-0 absolute bottom-8 left-80 md:w-96 w-60 md:h-96 h-60 bg-pink-200 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-4000" />
        <div className="z-10 max-w-sm mx-auto w-full flex flex-col space-y-6">
          <p className="text-slate-900 text-lg font-semibold text-center">
            Welcome Back
          </p>
          <div className="flex flex-col w-full space-y-2">
            <label
              htmlFor="email"
              className="z-10 text-slate-700 text-sm font-semibold"
            >
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white z-10 border border-slate-400 rounded p-2"
            />
          </div>
          <div className="flex flex-col w-full space-y-2">
            <label
              htmlFor="password"
              className="z-10 text-slate-700 text-sm font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white z-10 border border-slate-400 rounded p-2"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="remember"
                  className="text-gray-500 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
            </div>
            <a
              href="#"
              className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Forgot password?
            </a>
          </div>
          <PrimaryButton
            loading={loading}
            text="Sign in to account"
            onClick={login_user}
          />

          <p className="text-sm font-light z-10 text-gray-500 dark:text-gray-400">
            Don’t have an account yet?{' '}
            <Link
              href="/register"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Index;
