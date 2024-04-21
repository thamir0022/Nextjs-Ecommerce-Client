import React from 'react'
import Header from '../components/Header'
import Link  from 'next/link'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function notFoundPage() {
  return (
    <div>
        <Header/>
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="w-1/3 h-60 rounded-md shadow-md flex flex-col gap-4 items-center justify-center">
                <h2 className='text-3xl reddit-mono'>:( 404 Sorry Page Not Found</h2>
                <Link href={'/'} className='poppins hover:underline transition-all'><ArrowBackIcon/>Go to Home</Link>
            </div>
        </div>
    </div>
  )
}
