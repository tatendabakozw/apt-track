/* eslint-disable @typescript-eslint/no-explicit-any */
import { useToast } from '@chakra-ui/react';
import PrimaryButton from '@components/buttons/PrimaryButton';
import { Store } from '@context/Store';
import { getMessage } from '@helpers/getMessage';
import { apiUrl } from '@utils/apiUrl';
import { ContextType } from '@utils/types';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';

const OnBoarding = () => {
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useContext<ContextType>(Store);
  const [company_name, setCompanyName] = useState('');
  const [company_logo] = useState('');
  const router = useRouter();
  const { userInfo } = state;
  const toast = useToast();

  //   console.log(userInfo)

  const addCompanyInfo = async () => {
    setLoading(true);
    try {
      const { data } = await axios.patch(
        `${apiUrl}/user/edit/?user_id=${userInfo._id}`,
        {
          company_name,
        },
        {
          headers: {
            Authorization: userInfo.token,
          },
        }
      );
      const newUser = {
        ...userInfo,
        company: {
          name: company_name,
          logo: company_logo,
        },
      };
      dispatch({ type: 'USER_LOGIN', payload: newUser });
      toast({
        title: getMessage(data),
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      });
      router.push('/overview');
      setLoading(false);
    } catch (error: any) {
      toast({
        title: getMessage(error),
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      });
      setLoading(false);
      console.log(getMessage(error));
    }
  };

  return (
    <div className="relative w-full h-full min-h-screen grid md:grid-cols-2 grid-cols-1 p-4 bg-zinc-100">
      <div className="col-span-1 md:p-16 p-8 flex flex-col space-y-24">
        <Image
          src={'/icon.png'}
          alt="platform icon"
          width={20}
          height={20}
          className="h-20 w-20 rounded-xl border border-zinc-100 z-20"
        />
        <div className="flex flex-col space-y-4">
          <p className="z-20 text-4xl font-semibold text-zinc-900">
            Welcome to Apttrack
          </p>
          <p className="z-20 text-lg text-zinc-500 max-w-xl">
            Introducing Aapttrack, the groundbreaking website that
            revolutionizes your journey by seamlessly locating and tracking
            public transport options in real-time, transforming your daily
            commute into an effortless adventure.
          </p>
        </div>
      </div>
      <div className="z-20 flex flex-col col-span-1 bg-primary border rounded-xl main-border p-16 space-y-4">
        <p className="z-20 text-4xl font-semibold text-zinc-900">
          Follow guide
        </p>
        <p className="text-zinc-500 pb-8">
          Follow this guide to help you setup your account
        </p>
        <div className="grid grid-cols-2 gap-8">
          <input
            type="text"
            placeholder="Company name"
            onChange={(e) => setCompanyName(e.target.value)}
            value={company_name}
            className="outline-none rounded p-2 w-full bg-primary  main-border"
          />
        </div>
        <p className="pt-8 text-zinc-500">Select your company logo</p>
        <div className="flex flex-col max-w-lg space-y-4">
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </div>
        <div className="flex-1"></div>
        <div className="grid grid-cols-3">
          <div className="col-span-2"></div>
          <PrimaryButton
            loading={loading}
            onClick={addCompanyInfo}
            text="Continue"
          />
        </div>
      </div>
    </div>
  );
};

export default OnBoarding;
