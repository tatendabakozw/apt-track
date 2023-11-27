import {
  Avatar,
  CircularProgress,
  CircularProgressLabel,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import React from 'react';

interface Props {
  plate: string;
  cargo_type: string;
  from: string;
  to: string;
  progress: number;
  user_type: string;
  name: string;
  distance_left: string;
  icon: string;
  _id: string;
}

const SingleBus = (props: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams();
    params.set(name, value);
    return params.toString();
  };

  return (
    <div
      onClick={() => {
        router.push('/fleet' + '?' + createQueryString('b_id', props._id));
      }}
      className={`${
        searchParams.get('b_id') === props._id
          ? 'bg-primary border border-primary-superlight dark:border-primary-original '
          : 'bg-white/80 dark:bg-slate-900/50 '
      } p-4 rounded-xl w-full flex flex-col space-y-2 cursor-pointer`}
    >
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-col">
          <p className="uppercase font-medium heading-text text-sm">
            {props.plate}
          </p>
          <p className="text-xs light-text">{props.cargo_type}</p>
        </div>
        <p className="text-xs super-light-text text-center">
          <span>{props.from}</span>-<span>{props.to}</span>
        </p>
        <div className="flex">
          <CircularProgress
            value={props.progress}
            color="green.400"
            size={'35px'}
          >
            <CircularProgressLabel className="main-text">
              {props.progress}%
            </CircularProgressLabel>
          </CircularProgress>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-row space-x-2 items-center">
          <Avatar name={props.name} size={'sm'} />
          <div className="flex flex-col">
            <p className="text-xs text-slate-500">{props.user_type}</p>
            <p className="text-slate-700 dark:text-slate-300 fonr-medium text-sm">
              {props.name}
            </p>
          </div>
        </div>
        <p className="text-center self-end text-sm main-text font-medium">
          {props.distance_left}km left
        </p>
        <div className="col-span-1 relative flex flex-col items-end w-full">
          <div className="flex flex-row">
            <Image
              alt="bus png icon"
              src={'/bus.png'}
              fill
              className="absolute object-contain self-end"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBus;
