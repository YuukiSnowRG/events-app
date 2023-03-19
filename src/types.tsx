export interface EventsData {
  "events_categories": {
    "id": string;
    "title": string;
    "description": string;
    "image": string;
  }[];
  "allEvents": {
    "id": string;
    "title": string;
    "city": string;
    "description": string;
    "image": string;
    "emails_registered": Array<string>;
  }[];

}

/*export interface EventCatData {
  "events_categories": {
    "id": string;
    "title": string;
    "description": string;
    "image": string;
  }[];
  
}
export interface SingleEventData {
"allEvents": {
  "id": string;
  "title": string;
  "city": string;
  "description": string;
  "image": string;
  "emails_registered": Array<string>;
}[];
}
export interface EventsData {
  
} */