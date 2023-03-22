import { NextApiRequest, NextApiResponse } from "next"
import path from "path";
import fs from 'fs';
import { EventsData } from "@/types";

type Data = {
  message: string
}


function buildPath(){
  return path.join(process.cwd(), 'data', 'data.json')
}
// Access our data
function extractData(filePath:string){
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData.toString());
  return data;
}
// Extract our data (AllEvents)

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
 const {method} = req;



const filePath: string = buildPath();
const {events_categories, allEvents}:EventsData = extractData(filePath)


if(!allEvents){
  return res.status(404).json({message: "Events data not found"})
}
// res 404 if there are no AllEvents
 if(method === "POST") {
  const {email, eventId} = req.body;

  if(!email || !email.includes('@')){
    res.status(422).json({message:"invalid email address"})
    return
  }
  // check if the format of the email is correct

  const newAllEvents = allEvents.map((ev) => {
    if(ev.id === eventId) {
      if(ev.emails_registered.includes(email)){
        res.status(409).json({message: "this email has already been registered"});
        return ev
      }
    // AllEvents loop through them and indentify the EventID
    // add the email into emails_registered
    // only if said email isn't already registered

    return {
      ...ev, emails_registered:[...ev.emails_registered, email]
    };
  };
  return ev
  });

  fs.writeFileSync(filePath, JSON.stringify({events_categories, allEvents: newAllEvents}))

/* we add code here */
  res.status(200).json({message: `You have been registered successfully with the  email: ${email}`})
 }
}
