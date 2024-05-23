'use client'

import React from 'react'
import Link from 'next/link'
import useSession from '@/hooks/useSession'
import LoadingAnimation from '@/components/animation/LoadingAnimation'
import Login from '@/components/Auth/Login'
import HomePage from '@/components/home/HomePage'
import AuthLayer from './(AuthLayer)/AuthLayer'

const Home = () => {

  const { user, loading, loggedIn, logout } = useSession();

  if (loading) {
    return <LoadingAnimation />;
  }
  if (!loggedIn) {
    return <Login />
  }
  return (
    <AuthLayer  >
      <HomePage />
    </AuthLayer>
  )
}

export default Home
