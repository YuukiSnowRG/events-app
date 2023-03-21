import React from 'react'
import Image from 'next/image'
import Head from 'next/head';
import { EventsData } from 'src/types';

type Props = {
  data: EventsData["allEvents"][0];
}

export default function SingleEvent({data}:Props) {
  return (
    <>
    <Head>
      <title>{data.title}</title>
    </Head>
    <div>
      <h1>{data.title}</h1> 
      <Image src={data.image} width={1000} height={500} alt={data.title}/>
      <p>{data.description}</p>

      <input type="email" name="" id="" /> <button type="submit">Submit</button>
    </div>
 </>
  )
}

