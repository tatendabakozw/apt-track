/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactElement, useState } from 'react'
import { TrashIcon, PencilIcon } from '@heroicons/react/24/outline'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
} from '@chakra-ui/react'


interface Props {
    drivers?: any
}

export default function DriversTable({ drivers }: Props): ReactElement {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [product_name, setProductName] = useState('')
    const [product_id, setProductId] = useState('')

    const set_delete_item = (id:string, name:string) =>{
        setProductId(id)
        setProductName(name)
        onOpen()
    }

    const delele_item = () =>{
        console.log('item deleted')
        setProductId('')
        setProductName('')
    }

    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="border border-slate-100 dark:border-slate-800 overflow-hidden border-b sm:rounded-lg">
                        <table className="min-w-full divide-y divide-slate-100">
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
                                        Route
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
                            <tbody className="bg-white divide-y divide-slate-100">
                                {drivers?.map((product: any) => (
                                    <tr key={product._id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-100">
                                                    {/* <img className="h-10 w-10 rounded-full" src={product.pictures[0]} alt="" /> */}
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{product.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-500">{product.phone}</div>
                                        </td>

                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-500">{product.bus}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-500">{product.route}</div>
                                        </td>
                                       
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-700 text-white">
                                                Active
                                        </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <div className="flex flex-row items-center space-x-2">
                                                <span onClick={() => set_delete_item(product.id, product.title)} className="cursor-pointer">
                                                    <TrashIcon height={20} width={20} className="text-red-400 " />
                                                </span>
                                                <span className="cursor-pointer">
                                                    <PencilIcon height={20} width={20} className="text-gray-500 cursor-pointer" />
                                                </span>
                                            </div>
                                        </td>
                                        <Modal isOpen={isOpen} onClose={onClose} isCentered>
                                            <ModalOverlay />
                                            <ModalContent>
                                                <ModalBody className="flex flex-col  w-full items-center ">
                                                    <TrashIcon height={80} width={80} className="text-blue-primary " />
                                                    <p className="text-gray-800 my-4 font-semibold text-lg text-center">Delete</p>
                                                    <p className="text-center">Are you sure you want to delete product with name {product_name}?</p>
                                                </ModalBody>

                                                <ModalFooter>
                                                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                                                        Close
                                                    </Button>
                                                    <Button onClick={delele_item} colorScheme="red">Delete</Button>
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
    )
}