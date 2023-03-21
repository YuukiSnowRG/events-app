import CatEvent from "@/components/events/catEvent";
import { EventsData } from "@/types";


type Props = {
    data: EventsData["allEvents"];
    pageName: EventsData['allEvents'][0]['city'];
  }
export default function EventsCatPage({ data, pageName }: Props) {
  return <CatEvent data={data} pageName={pageName} />;
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
