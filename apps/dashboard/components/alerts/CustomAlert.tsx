import React from 'react';

type Props = {
  type: string;
  message: string;
};

const CustomAlert = (props: Props) => {
  return (
    <div
      className={`${
        props.type === 'error' || props.type === 'err'
          ? 'bg-red-200 dark:bg-red-600 text-red-600 dark:text-red-200 '
          : 'text-green-600 dark:text-green-200 bg-green-200 dark:bg-green-600 '
      } p-3 text-sm font-medium text-center rounded`}
    >
      {props.message}
    </div>
  );
};

export default CustomAlert;
