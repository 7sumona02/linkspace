'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { signUpUser } from '@/services/auth'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase-client'

const page = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const signup = async(e) => {
        e.preventDefault()

        if(!email || !password) {
            toast.error('Please fill email and password')
            return
        }

        const {error} = await signUpUser(email,password)
        if(error) {
            toast.error(error.message)
            return
        }
        toast.success('Check your email to verify your account')
        setTimeout(() => {
            router.replace('/create-space')
        }, 2000)
    }

    useEffect(() => {
    supabase.auth.getSession().then(({data:{session}}) => {
      if(session) {
        router.replace('/create-space')
      }
    })
  },[])
  return (
    <div className='min-h-screen w-screen flex justify-center items-center'>
      <div className='md:w-sm w-xs space-y-5'>
        <form onSubmit={signup} className='space-y-5'>
          <div><Input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} /></div>
          <div><Input placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} /></div>
          <Button className='w-full cursor-pointer'>Continue</Button>
          <div className='text-sm'>Already have an account? <Link href='/' className='font-semibold cursor-pointer'>Sign in</Link></div>
        </form>
      </div>
    </div>
  )
}

export default page