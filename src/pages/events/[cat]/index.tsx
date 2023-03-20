import { EventsData } from "@/types";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

type Props = {
    data: EventsData["allEvents"];
    pageName: EventsData['allEvents'][0]['city'];
  }
export default function EventsCatPage({ data, pageName }: Props) {
  return (
    <>
    <Head>
     <title>Events in {pageName} </title>
    </Head>
      <h1>Events in {pageName}</h1>
      <div>
        {data.map((ev) => (
          <Link
            key={ev.id}
            href={`/events/${ev.city}/${ev.id}`}
            passHref={true}
          >
            <Image height={300} width={300} alt={ev.title} src={ev.image} />
            <h2>{ev.title}</h2>
            <p> {ev.description} </p>
          </Link>
        ))}
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const { events_categories } = await import("data/data.json");
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });
  console.log(allPaths);
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context: { params: { cat: String; }; }) {
  const id = context?.params.cat;
  const { allEvents } = await import("data/data.json");

  const data = allEvents.filter((ev) => ev.city === id);

  return { props: { data, pageName: id } };
}
