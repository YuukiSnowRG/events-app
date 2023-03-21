import React from 'react'
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { EventsData } from '@/types';

type Props = {
  data: EventsData["allEvents"];
  pageName: EventsData['allEvents'][0]['city'];
}

export default function CatEvent({data, pageName}: Props) {
  return (
    <div className='cat-events'>
      <h1>Events in {pageName}</h1>

      <div className='content'>
        {data.map((ev) => (
          <Link
            key={ev.id}
            href={`/events/${ev.city}/${ev.id}`}
            passHref={true}
            className='card'
          >
            <Image height={300} width={369} alt={ev.title} src={ev.image} />
            <h2>{ev.title}</h2>
            <p> {ev.description} </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

