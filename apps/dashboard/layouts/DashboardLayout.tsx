/* eslint-disable @typescript-eslint/ban-types */
import React, { ReactNode, useContext, useEffect } from 'react'
import Navbar from '../components/navigation/Navbar'
import Head from 'next/head'
import { Store } from '../context/Store'
import { useRouter } from 'next/router'

type Props = {
    children?:ReactNode
}

const DashboardLayout = (props: Props) => {
  const { state } = useContext<any>(Store);
  const {userInfo} = state
  const router = useRouter()

  useEffect(()=>{
    if(!userInfo){
      router.push('/')
    }
  },[userInfo, router])
  return (
    <>
    <Head>
      <title>Dashboard</title>
    </Head>
    <div className='flex flex-col'>
        <div className="nav">
            <Navbar />
        </div>
        {props.children}
    </div>
    </>
  )
}

export default DashboardLayout