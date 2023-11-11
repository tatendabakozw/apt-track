/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactElement, useEffect, useState } from 'react';
import { TrashIcon, PencilIcon } from '@heroicons/react/24/outline';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import { data } from '@utils/data';
import { DriverType } from '@utils/types';
import { removeFromArray } from '@helpers/arrayMethods';

export default function DriversTable(): ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [driver_name, setDriverName] = useState('');
  const [all_drivers, setAllDrivers] = useState<DriverType[]>([]);

  //TODO: make api calls to get all drivers

  useEffect(() => {
    setAllDrivers(data.drivers);
  }, []);

  const set_delete_item = (name: string) => {
    setDriverName(name);
    onOpen();
  };

  const delele_item = (key: string) => {
    //TODO: delete item from database
    setAllDrivers(removeFromArray(all_drivers, key));
    setDriverName('');
    onClose();
  };

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="border border-slate-100 dark:border-slate-800 overflow-hidden border-b sm:rounded-lg">
            <table className="min-w-full divide-y divide-slate-100 dark:divide-slate-800">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200    ">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    phone
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    Bus Driven
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    Status
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-slate-900 divide-y divide-slate-100 dark:divide-slate-800">
                {all_drivers.map((driver: DriverType) => (
                  <tr key={driver._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-100">
                          {/* <img className="h-10 w-10 rounded-full" src={driver.pictures[0]} alt="" /> */}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {driver.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {driver.phone}
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{driver.bus}</div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-700 text-white">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex flex-row items-center space-x-4">
                        <span
                          onClick={() => set_delete_item(driver.name)}
                          className="cursor-pointer"
                        >
                          <TrashIcon
                            height={16}
                            width={16}
                            className="text-slate-400 "
                          />
                        </span>
                        <span className="cursor-pointer">
                          <PencilIcon
                            height={16}
                            width={16}
                            className="text-gray-400 cursor-pointer"
                          />
                        </span>
                      </div>
                    </td>
                    <Modal isOpen={isOpen} onClose={onClose} isCentered>
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Delete Driver</ModalHeader>
                        <ModalBody className="flex flex-col  w-full items-center ">
                          <div className="text-center flex flex-col items-center font-medium ">
                            <p>
                              Are you sure you want to delete driver with name
                            </p>
                            <p className="font-semibold text-lg text-red-600 capitalize">
                              {driver_name}
                            </p>
                          </div>
                        </ModalBody>

                        <ModalFooter>
                          <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                          </Button>
                          <Button
                            onClick={() => delele_item(driver._id)}
                            colorScheme="red"
                          >
                            Delete
                          </Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
