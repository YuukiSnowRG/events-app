import Link from "next/link";
import Image from "next/image";

type Props = {
  data: {
    id: string;
    title: string;
    description: string;
    image: string;
}[]
}
export default function HomeMain({data}: Props){
  return(
      <>
        <main>
        {data.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.id}`}>
            <Image height={300} width={300} alt={ev.title} src={ev.image} />
            <h2> {ev.title} </h2>
            <p> {ev.description}</p>
          </Link>
        ))}
      </main>
    </>
  )
}