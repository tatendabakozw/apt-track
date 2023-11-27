/* eslint-disable @typescript-eslint/no-explicit-any */
import PrimaryButton from '@components/buttons/PrimaryButton';
import AutoCompleteInput from '@components/inputs/AutoCompleteInput';
import LabeledInput from '@components/inputs/LabeledInput';
import DashboardLayout from '@layouts/DashboardLayout';
import React, { useState } from 'react';

const AddVehicle = () => {
  const [plate, setPlate] = useState('');
  const [type, setType] = useState('');
  const [driver, setDriver] = useState('');
  const [route, setRoute] = useState('');
  const [load, setLoad] = useState('');

//   console.log(drivers)

  const addDriverhandler = () =>{
    console.log(driver)
  }

  return (
    <DashboardLayout>
      <div className="flex max-w-7xl flex-col mx-auto w-full px-6">
        <div className="flex flex-col space-y-2 py-16">
          <p className="heading-text font-bold text-3xl">
            New <span className="text-secondary-original">Item</span>
          </p>
          <p className="text-sm font-medium text-slate-500">
            Add new item to your vehicles list
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <LabeledInput
            value={plate}
            setValue={setPlate}
            placeholder="Plate"
            label=" plate number"
          />
          <LabeledInput
            value={type}
            setValue={setType}
            placeholder=" Type"
            label="type"
          />

          {/* <LabeledInput
            value={driver}
            setValue={setDriver}
            optional
            placeholder="driver"
            label="driver"
          /> */}
          <AutoCompleteInput
            label="Driver"
            value={driver}
            setValue={setDriver}
            placeholder="Select vehicle driver"
          />

          <AutoCompleteInput
            value={route}
            setValue={setRoute}
            placeholder="route"
            label=" route"
          />
          <LabeledInput
            value={load}
            setValue={setLoad}
            placeholder="load"
            label=" load"
          />
          <div className="flex col-span-2">
            <PrimaryButton onClick={addDriverhandler} text="Add To Fleet" />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AddVehicle;
