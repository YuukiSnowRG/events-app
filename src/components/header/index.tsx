import Link from "next/link";
import Image from "next/image";

export default function Header(){
  return(
    <header>
      <div>
        <div className="topNav">
          <Image src={"/image/vercel.png"} width={50} height={50} alt={"logo"} />
          <nav >
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/events">Events</Link></li>
              <li><Link href="/about-us">About Us</Link></li>
            </ul>
          </nav>
        </div>
        <p className="title"> Sed Ut Perspiciatis Unde Omnis</p>
      </div>
        
      </header>
  )
}