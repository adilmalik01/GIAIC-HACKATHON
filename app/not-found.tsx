import Link from 'next/link'
import React from 'react'
import Navbar1 from './components/navbar/Navbar1'
import Footer from './components/footer/Footer'


export default function notFound() {
    return (
        <>

            <Navbar1 title="404 Page" />
            < main className="flex  flex-col items-center justify-center p-4 mt-7 mb-7" >
                <div className="text-center ">
                    <h1 className="mb-4 text-6xl font-bold tracking-tight text-favColor p-6">
                        404
                    </h1>
                    <h1 className='text-3xl font-bold'>Oops! Look likes something going wrong</h1>
                    <p className="mb-8 text-muted-foreground p-2">
                        Page Cannot be found! we’ll have it figured out in no time. Menwhile, cheek out these fresh ideas:
                    </p>

                    <Link href="/">
                        <button className="bg-favColor hover:bg-favColor p-3 rounded">
                            Go To Home
                        </button>
                    </Link>
                </div>
            </main >

            <Footer />
        </>


    )
}