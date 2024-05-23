import React from 'react'
import IntialUserNavbar from '../common/navbar/intialUserNavbar'
import { nunitoSans } from '@/public/fonts'
import Messages from './chat/Messages'

const HomePage = () => {
  return (
    <div className={nunitoSans.className} >
      <div className=' text-white  w-[100%] h-[100vh] bg-[#09080F] ' >
        <IntialUserNavbar />
        <div className='relative h-[calc(100vh-5rem)] ' >
          <Messages />
        </div>

      </div>
    </div>
  )
}

export default HomePage
