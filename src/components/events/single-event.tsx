import React, {useRef, useState } from 'react'
import Image from 'next/image'
import Head from 'next/head';
import { EventsData } from 'src/types';
import { useRouter } from 'next/router';

type Props = {
  data: EventsData["allEvents"][0];
}

export default function SingleEvent({data}:Props) {
  const inputEmail = useRef<HTMLInputElement | null>(null)
  console.log(inputEmail)
  const router =useRouter();
  const [message, setMessage] = useState('')
  
  async function onSubmit(e: React.FormEvent<HTMLFormElement> ) {
    
    e.preventDefault()
    const emailValue = inputEmail.current?.value;
    const eventId = router?.query.id

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if(!emailValue?.match(validRegex)){
      setMessage(`Please introduce a valid email address
      `)
    }

    try {
      const response = await fetch('/api/email-registration',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: emailValue, eventId})
      });
      if(!response.ok) throw new Error(`ERROR: ${response.status}`);
      
      const data = await response.json();
      setMessage(data.message)
      
      
    } catch (error) {
      console.log('ERROR',e)
    }
  }

  return (
    <div className='event-single-page'>
    <Head>
      <title>{data.title}</title>
    </Head>
    <div>
      <h1>{data.title}</h1> 
      <Image src={data.image} width={1000} height={500} alt={data.title}/>
      <p>{data.description}</p>
      <form onSubmit={onSubmit} className="email-registration">
        <label htmlFor="">Get registered for this event!</label>
        <input 
          type="email"
          name=""
          id="email"
          ref={inputEmail} 
          placeholder="Please insert your email here" 
        />
        <button type="submit">Submit</button>
      </form>
      <p className='email-fail-message'>{message}</p>
    </div>
 </div>
  )
}

