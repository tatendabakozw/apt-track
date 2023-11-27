/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline';
import React from 'react';
import Select, { components } from 'react-select';
import clsx from 'clsx';

const options = [
  { value: 'tatenda-baalp', label: 'Tatenda Bako' },
  { value: 'raymond-nyakudanga', label: 'Raymond Nyakudanga' },
  { value: 'someone-else', label: 'Someone Else' },
];

const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <ChevronDownIcon height={16} width={16} className='main-texts' />
    </components.DropdownIndicator>
  );
};

const ClearIndicator = (props: any) => {
  return (
    <components.ClearIndicator {...props}>
      <XMarkIcon height={16} width={16} />
    </components.ClearIndicator>
  );
};

const MultiValueRemove = (props: any) => {
  return (
    <components.MultiValueRemove {...props}>
      <XMarkIcon height={16} width={16} />
    </components.MultiValueRemove>
  );
};

const controlStyles = {
  base: 'border rounded-lg bg-white hover:cursor-pointer bg-secondary',
  focus: 'main-border ring-1 ring-primary-500 bg-secondary',
  nonFocus: 'main-border hover:main-border',
};
const placeholderStyles = ' pl-1 py-0.5 main-text';
const selectInputStyles = 'pl-1 py-0.5 main-text';
const valueContainerStyles = 'p-1 gap-1 bg-secondary';
const singleValueStyles = 'leading-7 ml-1';
const multiValueStyles =
  'bg-secondary rounded items-center py-0.5 pl-2 pr-1 gap-1.5';
const multiValueLabelStyles = 'leading-6 py-0.5';
const multiValueRemoveStyles =
  'border border-gray-200 bg-white hover:bg-red-50 hover:text-red-800 main-text hover:border-red-300 rounded-md';
const indicatorsContainerStyles = 'p-1 gap-1 main-text' ;
const clearIndicatorStyles =
  'main-text p-1 rounded-md hover:bg-red-50 hover:text-red-800';
const indicatorSeparatorStyles = 'dark:bg-slate-500 bg-slate-300';
const dropdownIndicatorStyles =
  'p-1 hover:bg-secondary main-text rounded-md hover:text-black';
const menuStyles = 'p-1 mt-2 border main-border bg-secondary main-text rounded-lg';
const groupHeadingStyles = 'ml-3 mt-2 mb-1 main-text text-sm';
const optionStyles = {
  base: 'hover:cursor-pointer px-3 py-2 rounded',
  focus: 'bg-secondary active:bg-primary',
  selected: "after:content-['✔'] after:ml-2 after:text-green-500 main-text",
};
const noOptionsMessageStyles =
  'main-text p-2 bg-gray-50 border border-dashed main-border rounded-sm';

type Props = {
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: React.Dispatch<React.SetStateAction<any>>;
  placeholder: string;
  className?: string;
  label: string;
  type?: string;
  optional?: boolean;
};

const AutoCompleteInput = (props: Props) => {
    
  return (
    <div className={`${props.className}`}>
      <p className="text-sm font-medium main-text pb-2">
        {props.label}{' '}
        <span className="text-red-600">{props.optional && '*'}</span>
      </p>
      <Select
        onChange={props.setValue}
        // isMulti
        options={options}
        // closeMenuOnSelect={false}
        // hideSelectedOptions={false}
        unstyled
        styles={{
          input: (base) => ({
            ...base,
            'input:focus': {
              boxShadow: 'none',
            },
          }),
          // On mobile, the label will truncate automatically, so we want to
          // override that behaviour.
          multiValueLabel: (base) => ({
            ...base,
            whiteSpace: 'normal',
            overflow: 'visible',
          }),
          control: (base) => ({
            ...base,
            transition: 'none',
          }),
        }}
        components={{ DropdownIndicator, ClearIndicator, MultiValueRemove }}
        classNames={{
          control: ({ isFocused }) =>
            clsx(
              isFocused ? controlStyles.focus : controlStyles.nonFocus,
              controlStyles.base
            ),
          placeholder: () => placeholderStyles,
          input: () => selectInputStyles,
          valueContainer: () => valueContainerStyles,
          singleValue: () => singleValueStyles,
          multiValue: () => multiValueStyles,
          multiValueLabel: () => multiValueLabelStyles,
          multiValueRemove: () => multiValueRemoveStyles,
          indicatorsContainer: () => indicatorsContainerStyles,
          clearIndicator: () => clearIndicatorStyles,
          indicatorSeparator: () => indicatorSeparatorStyles,
          dropdownIndicator: () => dropdownIndicatorStyles,
          menu: () => menuStyles,
          groupHeading: () => groupHeadingStyles,
          option: ({ isFocused, isSelected }) =>
            clsx(
              isFocused && optionStyles.focus,
              isSelected && optionStyles.selected,
              optionStyles.base
            ),
          noOptionsMessage: () => noOptionsMessageStyles,
        }}
        // {...props}
      />
    </div>
  );
};

export default AutoCompleteInput;
