export const SelectTravelerList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A sole travels in exploration",
    icon: "✈️",
    people: "1 Person",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two travelers in tandem",
    icon: "🥂",
    people: "2 People",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun adventurers",
    icon: "🏡",
    people: "3 to 5 People",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill-seekers",
    icon: "🛩️",
    people: "5 to 10 People",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of costs",
    icon: "💵",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep cost on the average side",
    icon: "💸",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Don't worry about cost",
    icon: "💰",
  },
];

export const AI_PROMPT =
  "Generate Travel Plan for Location : {location}, for {totalDays} days and {totalNight} Night for {traveler} with a {budget} budget with a Flight Details, Flight Price with Booking url, Hotels options list with Hotel Name, Hotel Address, Price, Hotel image url, Geo coordinates, rating, descriptions and Places to visit nearby with Place Name, Place Details, Place Image url, Geo Coordinates, Ticket Pricing, Time to travel each of the location for {totalDays} days and {totalNight} night with each day plan with best time to visit in JSON format.";
