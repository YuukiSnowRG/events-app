import { EventsData } from "@/types";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

type Props = {
  data: EventsData["events_categories"]
}

export default function Events({ data }: Props) {
  return (
    <>
      <Head>
        <title> Events </title>
      </Head>
      {data.map((ev) => (
        <Link key={ev.id} href={`/events/${ev.id}`}>
          <Image height={300} width={300} alt={ev.title} src={ev.image} />
          <h2> {ev.title} </h2>
          {/*  <p> {ev.description}</p> */}
        </Link>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const { events_categories } = await import("data/data.json");
  return {
    props: {
      data: events_categories,
    },
  };
}
