import { Avatar } from '@chakra-ui/react';
import CustomAlert from '@components/alerts/CustomAlert';
import PrimaryButton from '@components/buttons/PrimaryButton';
import LabeledInput from '@components/inputs/LabeledInput';
import { Store } from '@context/Store';
import { getMessage } from '@helpers/getMessage';
import { PlusCircleIcon } from '@heroicons/react/24/solid';
import DashboardLayout from '@layouts/DashboardLayout';
import { apiUrl } from '@utils/apiUrl';
import axios from 'axios';
import React, { useContext, useState } from 'react';

const AddDriver = () => {
  const [first_name, setFirstName] = useState<string>('');
  const [last_name, setlastName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [national_id, setNationalId] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');
  const { state } = useContext(Store);
  const { userInfo } = state;

  console.log(userInfo)

  const saveDriverHandler = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${apiUrl}/driver/create`,
        {
          first_name,
          last_name,
          phone_number: phone,
          national_id,
          email,
        },
        {
          headers: {
            Authorization: userInfo.token,
          },
        }
      );
      setMsg(getMessage(data));
      setError('');
      // console.log(getMessage(data));
      setLoading(false);
      setFirstName('');
      setlastName('');
      setPhone('');
      setNationalId('');
      setEmail('');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setLoading(false);
      setMsg('')
      setError(getMessage(error));
      console.log(getMessage(error));
    }
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-8 max-w-7xl w-full mx-auto px-4">
        {/* <p className="text-3xl font-medium heading-text pt-16">User</p> */}
        <div className="grid md:grid-cols-5 grid-cols-1 gap-8 py-16">
          <div className="col-span-1">
            <div className="relative h-40 w-40">
              <Avatar height={40} width={40} />
              <button className="absolute bottom-0 right-0  main-text">
                <PlusCircleIcon height={40} width={40} />
              </button>
            </div>
          </div>
          <div className="col-span-4">
            <p className="font-medium main-text pb-4">Driver Information</p>
            <div className="grid w-full grid-cols-2 md:gap-8 gap-4">
              <LabeledInput
                value={first_name}
                setValue={setFirstName}
                label="First name"
                placeholder="Enter first name"
                className="col-span-1"
              />
              <LabeledInput
                value={last_name}
                setValue={setlastName}
                label="Last name"
                placeholder="Enter last name"
                className="col-span-1"
              />
              <LabeledInput
                value={phone}
                setValue={setPhone}
                label="Phone number"
                placeholder="Enter phone number"
                className="col-span-1"
              />
              <LabeledInput
                value={national_id}
                setValue={setNationalId}
                label="National id"
                placeholder="Enter national id"
                className="col-span-1"
              />
              <LabeledInput
                value={email}
                setValue={setEmail}
                type="email"
                label="Email"
                placeholder="Enter email address"
                className="col-span-1"
              />
              <div className="col-span-2 space-y-4">
                {error && <CustomAlert type='error' message={error} />}
                {msg && <CustomAlert type='success' message={msg} />}
                <PrimaryButton
                  text="Save driver"
                  loading={loading}
                  onClick={saveDriverHandler}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AddDriver;
