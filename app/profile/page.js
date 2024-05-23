// app/profile/page.js
'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import api from '../../utils/axios.js';
import useSession from '@/hooks/useSession.js';
import AuthLayer from '../(AuthLayer)/AuthLayer.js';
import Image from 'next/image.js';
import { LuLogOut } from "react-icons/lu";
import IntialUserNavbar from '@/components/common/navbar/intialUserNavbar.js';
import { nunitoSans } from '@/public/fonts.js';



const Profile = () => {
  const { user, loading, loggedIn, logout } = useSession();
  const router = useRouter();
  console.log(user)

  const sendToSlack = async () => {
    try {
      await api.post('/api/auth/send-to-slack', {}, { withCredentials: true });
      alert('User details sent to Slack');
    } catch (error) {
      console.error('Error sending to Slack', error);
    }
  };

  return (
    <div className={nunitoSans.className} >


      <AuthLayer  >
        <IntialUserNavbar />
        <div className=' text-white  w-[100%] h-[100vh] flex justify-center items-center bg-[#09080F] ' >
          <div className=' relative flex flex-col w-[30rem] h-[43vh] justify-between  bg-[#1C1C1C] border-[1px] border-[#4d4d4d47] rounded-md px-[2.5rem] py-[2.5rem] ' >

            <div className='relative flex items-center justify-center mt-[-2.5rem] ' >
              <Image
                src={user?.profilePicture}
                width={100}
                height={100}
                className='absolute mx-auto rounded-full w-[8rem] '
                alt='Profile Pic'
              />

            </div>
            <div className=' relative flex flex-col  mt-[3rem] gap-[1rem] mx-auto ' >
              <div className='mx-auto flex flex-col gap-[1rem] ' >
                <div className=' flex gap-[1rem] opacity-65 ' >
                  <div>
                    Name :
                  </div>
                  <h2>{user?.name}</h2>
                </div>
                <div className=' flex gap-[1rem] opacity-65 ' >
                  <div>
                    Email :
                  </div>
                  <h2>{user?.email}</h2>
                </div>
              </div>


              <button onClick={logout} className=' active:scale-95 duration-300 bg-[#e2eaf8] text-black  flex justify-center items-center gap-[.5rem] px-[.5rem] py-[.5rem] rounded-md font-nunito font-[500] text-[1.02rem] mt-[2rem]  w-[20rem]  mx-auto ' >
                <LuLogOut className=' text-[1.2rem] ' />
                Log Out
              </button>
            </div>

          </div>

        </div>
      </AuthLayer>
    </div>
  );
};

export default Profile;
