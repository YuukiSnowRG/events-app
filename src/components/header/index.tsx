import Link from "next/link";

export default function Header(){
  return(
    <header>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/events">Events</Link>
          <Link href="/about-us">About Us</Link>
        </nav>
      </header>
  )
}