import Link from "next/link";
import Image from "next/image";
import { EventsData } from "@/types";

type Props = {
  data: EventsData["events_categories"];
}

export default function HomeMain({data}: Props){
  return(
      <div className="home-body">
        {data.map((ev) => (
          <Link className="card" key={ev.id} href={`/events/${ev.id}`}>
            <div className="image">
              <Image height={350} width={500} alt={ev.title} src={ev.image} />
            </div>
            <div className="content">
              <h2> {ev.title} </h2>
              <p> {ev.description}</p>
            </div>
          </Link>
        ))}
    </div>
  )
}