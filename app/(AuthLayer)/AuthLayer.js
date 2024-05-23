import React from 'react'
import useSession from '@/hooks/useSession'
import LoadingAnimation from '@/components/animation/LoadingAnimation';
import { useRouter } from 'next/navigation';


// a layered Component to check session 
// if session is valid then only chidren will be available
const AuthLayer = ({ children }) => {
  const { user, loading, loggedIn } = useSession();
  const router = useRouter();

  if (loading) {
    return <LoadingAnimation />;
  }

  if (!loggedIn || !user) {
    router.push('/')
  }

  return (
    <div>
      {children}
    </div>
  )
}

export default AuthLayer
