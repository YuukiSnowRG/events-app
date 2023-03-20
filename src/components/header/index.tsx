import Link from "next/link";
import Image from "next/image";

export default function Header(){
  return(
    <header>
        <div className='topnav'>
          <Image src={"/image/vercel.png"} width={50} height={50} alt={"logo"} />
          <nav>
            <Link href="/">Home</Link>
            <Link href="/events">Events</Link>
            <Link href="/about-us">About Us</Link>
          </nav>
        </div>
        <h1> Ut enim ad </h1>
      </header>
  )
}