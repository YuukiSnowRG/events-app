import { EventsData } from "@/types";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
type Props = {
  data: EventsData["events_categories"]
}



export default function EventsPage({ data }: Props) {
  return (
    <div className="events-page">
      <Head>
        <title> Events </title>
      </Head>
      {data.map((ev) => (
        <Link className="card" key={ev.id} href={`/events/${ev.id}`}>
            <Image height={400} width={400} alt={ev.title} src={ev.image} />
            <h2> {ev.title} </h2>
          {/*  <p> {ev.description}</p> */}
        </Link>
      ))}
    </div>
  );
}
