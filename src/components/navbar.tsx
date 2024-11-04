import Image from 'next/image'
import Link from 'next/link'

export default function Navbar(){
    return(
        <div className="flex fixed justify-between h-[5rem] w-full items-center bg-transparent  backdrop-blur-sm z-10">
            <Link href={"/"}><Image src="/navbar/LogoNav2.png" 
            alt='Logo1'
            width={100}
            height={40} className='ml-10'/></Link>
            <div className="flex gap-5 mr-10">
                <Link href={'/about'} className='btn glass'>About</Link>
                <Link href={'/contact'} className='btn glass'>Contact</Link>
       
            </div>
        </div>
    )
}