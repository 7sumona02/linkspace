'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { supabase } from '@/lib/supabase-client'
import { signInUser } from '@/services/auth'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const signIn = async (e) => {
    e.preventDefault() 
    if (!email || !password) {
      toast.error('Please fill in all fields')
      return
    }
    const { error } = await signInUser(email, password)
    if (error) {
      toast.error(error.message)
      return
    }
    toast.success('Welcome back!')
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
        <form onSubmit={signIn} className='space-y-5'>
          <div><Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' /></div>
          <div><Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' /></div>
          <Button className='w-full cursor-pointer'>Continue</Button>
          <div className='text-sm'>Don't have an account? <Link href='/auth/signup' className='font-semibold cursor-pointer'>Sign up</Link></div>
        </form>
      </div>
    </div>
  );
}
