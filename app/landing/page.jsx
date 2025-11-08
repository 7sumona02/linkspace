'use client'
import { GithubIcon } from 'lucide-react'

const page = () => {
  return (
    <div className='min-h-screen w-screen bg-neutral-50 flex items-center justify-center'>
        <div className='flex-1 flex flex-col items- justify-center px-20 space-y-5'>
            <div className='text-[#76697A] font-bold text-5xl tracking-tighter'>One Space. All Your Links.</div>
            <div className='text-neutral-900 font-medium text-xl max-w-2xl leading-tight'>Build your personal link page that's clean, aesthetic, and truly you.</div>
            <div className='flex items-center mt-3 gap-4'>
                <button className='border-2 border-[#29222A] bg-[#29222A] text-white px-5 py-3 rounded-lg text-sm font-medium cursor-pointer'>Claim your Space ✨</button>
                <button className='flex items-center gap-2 border-2 border-[#A69FA7] text-neutral-900 px-5 py-3 rounded-lg text-sm font-medium cursor-pointer shadow-lg shadow-[#D6D1D7]'><GithubIcon size={17} /> Star on GitHub</button>
            </div>
        </div>
        <div className='flex-1'></div>
    </div>
  )
}

export default page