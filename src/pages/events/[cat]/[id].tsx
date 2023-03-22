import { EventsData } from 'src/types';

import SingleEvent from '@/components/events/single-event';

type Props = {
  data: EventsData["allEvents"][0];
}

export default function EventPage({ data }:Props ){
   return <SingleEvent data={data} />
}

export async function getStaticPaths(){
  const data: EventsData = await import('data/data.json');
  const allEvents = data.allEvents;

  const allPaths = allEvents.map((path)=> {
    return {
      params:{
        cat: path.city,
        id: path.id
      }
    }
  })

  return {
    paths: allPaths,
    fallback: false,
  }
}

export async function getStaticProps(context: { params: { id: string; }; }) {
  const id = context.params.id;
  const {allEvents}: EventsData = await import('data/data.json');
  const eventData = allEvents.find((ev) => id === ev.id)

  return {
    props: {data: eventData},
  }
}