
import { Navbar } from '@/components/navbar'
import React from 'react'


function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <main className='pt-10'>{children}</main>
        </>
    )
}

export default layout;