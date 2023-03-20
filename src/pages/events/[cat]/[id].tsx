import { EventsData } from 'src/types';
import Image from 'next/image'
import Head from 'next/head';

type Props = {
  data: EventsData["allEvents"][0];
}

export default function EventPage({ data }:Props ){
   console.log(data)
   return(
  <>
    <Head>
      <title>{data.title}</title>
    </Head>
    <div>
      <Image src={data.image} width={1000} height={500} alt={data.title}/>
      <h1>{data.title}</h1> 
      <p>{data.description}</p>
    </div>
 </>
    )
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
  console.log(context); /* loga o retorno no console */
  const id = context.params.id;
  const {allEvents}: EventsData = await import('data/data.json');
  const eventData = allEvents.find((ev) => id === ev.id)

  return {
    props: {data: eventData},
  }
}