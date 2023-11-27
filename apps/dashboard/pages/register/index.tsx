/* eslint-disable @typescript-eslint/no-explicit-any */
// import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import { getMessage } from '../../helpers/getMessage';
import { useToast } from '@chakra-ui/react';
import { apiUrl } from '@utils/apiUrl';

export function Index() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState<any>(false);
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const toast = useToast();

  const register_user = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${apiUrl}/auth/register    `,
        {
          email: email,
          password: password,
          role: 'admin',
          agreed
        }
      );
      // // console.log(data);
      setLoading(false);
      toast({
        title: getMessage(data),
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      });
      router.push('/');
      setPassword('');
      setEmail('');
    } catch (error: any) {
      toast({
        title: 'Account not created',
        position: 'top-right',
        description: getMessage(error),
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      setLoading(false);
      setErr(getMessage(error));
    }
  };
  return (
    <>
      <Head>
        <title>Dashboard - Register</title>
      </Head>
      <div className="overflow-hidden relative min-h-screen grid items-center  w-full px-4">
        <div className="z-0 absolute top-40 left-4 md:w-96 w-60 md:h-96 h-60 bg-yellow-200 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob" />
        <div className="z-0 absolute top-52 right-52 md:w-96 w-60 md:h-96 h-60 bg-purple-200 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-2000" />
        <div className="z-0 absolute bottom-8 left-80 md:w-96 w-60 md:h-96 h-60 bg-pink-200 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-4000" />
        <div className="z-10 max-w-sm mx-auto w-full flex flex-col space-y-6">
          <p className="text-slate-900 text-lg font-semibold text-center">
            Create an account
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
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                aria-describedby="terms"
                value={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="terms"
                className="font-light text-gray-500 dark:text-gray-300"
              >
                I accept the{' '}
                <a
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  href="#"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div>
          <PrimaryButton
            loading={loading}
            text="Register"
            onClick={register_user}
          />

          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account?{' '}
            <a
              href="/ "
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Login here
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Index;
