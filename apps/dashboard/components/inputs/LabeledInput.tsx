import React from 'react';

type Props = {
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: React.Dispatch<React.SetStateAction<any>>;
  placeholder: string;
  className?: string;
  label: string;
  type?: string
  optional?: boolean
};

const LabeledInput = (props: Props) => {
  return (
    <div className={`${props.className}`}>
      <p className="text-sm font-medium main-text capitalize pb-2">{props.label} <span className='text-red-600'>{props.optional && "*"}</span></p>
      <input
        type={props.type ? props.type : "text"}
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
        className="main-border px-4 py-3 text-sm w-full bg-secondary outline-none main-text rounded-lg"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default LabeledInput;
