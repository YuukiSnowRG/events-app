import EventsPage from "@/components/events/events-page";
import { EventsData } from "@/types";

type Props = {
  data: EventsData["events_categories"]
}

export default function Events({ data }: Props) {
  return <EventsPage data={data}/>;
}

export async function getStaticProps() {
  const { events_categories } = await import("data/data.json");
  return {
    props: {
      data: events_categories,
    },
  };
}
