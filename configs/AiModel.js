const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.EXPO_PUBLIC_GOOGLE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate Travel Plan for Location : Plymouth, UK, for 3 days and 2 Night for Just Me with a Luxury budget with a Flight Details, Flight Price with Booking url, Hotels options list with Hotel Name, Hotel Address, Price, Hotel image url, Geo coordinates, rating, descriptions and Places to visit nearby with Place Name, Place Details, Place Image url, Geo Coordinates, Ticket Pricing, Time to travel each of the location for 3 days and 2 night with each day plan with best time to visit in JSON format.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "flight": {\n    "details": "London Heathrow Airport (LHR) to Plymouth Airport (PLH)",\n    "price": "$150",\n    "booking_url": "https://www.skyscanner.com/"\n  },\n  "hotel": [\n    {\n      "name": "The Boringdon Hall Hotel",\n      "address": "Boringdon Hall, Plymouth, PL7 4DP",\n      "price": "$350/night",\n      "image_url": "https://www.boringdonhall.co.uk/media/wysiwyg/Boringdon-Hall-Hotel-Plymouth-Devon-UK-1024x768.jpg",\n      "geo_coordinates": "50.4141, -4.1298",\n      "rating": "4.5",\n      "description": "A luxurious 4-star hotel set in 200 acres of parkland, offering stunning views and fine dining."\n    },\n    {\n      "name": "The Grand Hotel, Plymouth",\n      "address": "The Hoe, Plymouth, PL1 2LA",\n      "price": "$250/night",\n      "image_url": "https://www.thegrandplymouth.co.uk/media/2021/09/The-Grand-Plymouth-Exterior-High-Res-1.jpg",\n      "geo_coordinates": "50.3713, -4.1446",\n      "rating": "4.0",\n      "description": "A historic hotel located on Plymouth Hoe with panoramic views of the harbour and coastline."\n    }\n  ],\n  "places_to_visit": [\n    {\n      "name": "Plymouth Hoe",\n      "details": "A historic waterfront promenade with stunning views of the harbour and coastline.",\n      "image_url": "https://www.visitplymouth.co.uk/media/1646/plymouth-hoe-sunset.jpg",\n      "geo_coordinates": "50.3713, -4.1446",\n      "ticket_pricing": "Free",\n      "time_to_travel": "2 hours"\n    },\n    {\n      "name": "The Mayflower Steps",\n      "details": "The historic steps where the Mayflower set sail for America in 1620.",\n      "image_url": "https://www.plymouth.gov.uk/media/1269/mayflower-steps.jpg",\n      "geo_coordinates": "50.3701, -4.1458",\n      "ticket_pricing": "Free",\n      "time_to_travel": "1 hour"\n    },\n    {\n      "name": "National Marine Aquarium",\n      "details": "A world-class aquarium showcasing marine life from around the globe.",\n      "image_url": "https://www.national-aquarium.co.uk/media/images/home-hero-mobile.jpg",\n      "geo_coordinates": "50.3700, -4.1395",\n      "ticket_pricing": "$20",\n      "time_to_travel": "3 hours"\n    },\n    {\n      "name": "Plymouth City Museum and Art Gallery",\n      "details": "A museum showcasing the history and art of Plymouth.",\n      "image_url": "https://www.plymouth.gov.uk/media/624/plymouth-city-museum-and-art-gallery-exterior.jpg",\n      "geo_coordinates": "50.3716, -4.1422",\n      "ticket_pricing": "Free",\n      "time_to_travel": "2 hours"\n    },\n    {\n      "name": "The Barbican",\n      "details": "A historic waterfront area with cobbled streets, shops, restaurants and pubs.",\n      "image_url": "https://www.visitplymouth.co.uk/media/2187/barbican-plymouth.jpg",\n      "geo_coordinates": "50.3711, -4.1409",\n      "ticket_pricing": "Free",\n      "time_to_travel": "3 hours"\n    }\n  ],\n  "travel_plan": [\n    {\n      "day": "Day 1",\n      "time": "Morning",\n      "activity": "Arrive at Plymouth Airport (PLH) and check into your hotel.",\n      "location": "The Boringdon Hall Hotel",\n      "details": "Settle into your luxurious room and relax."\n    },\n    {\n      "day": "Day 1",\n      "time": "Afternoon",\n      "activity": "Explore Plymouth Hoe",\n      "location": "Plymouth Hoe",\n      "details": "Enjoy the stunning views of the harbour and coastline, take a walk along the promenade, and visit the Smeaton\'s Tower."\n    },\n    {\n      "day": "Day 1",\n      "time": "Evening",\n      "activity": "Dine at a restaurant on the Barbican",\n      "location": "The Barbican",\n      "details": "Enjoy a delicious meal at one of the many restaurants and pubs in the area."\n    },\n    {\n      "day": "Day 2",\n      "time": "Morning",\n      "activity": "Visit the National Marine Aquarium",\n      "location": "National Marine Aquarium",\n      "details": "Learn about the diverse marine life of the oceans and see sharks, rays, and other fascinating creatures."\n    },\n    {\n      "day": "Day 2",\n      "time": "Afternoon",\n      "activity": "Explore The Mayflower Steps and the Barbican",\n      "location": "The Mayflower Steps, The Barbican",\n      "details": "Walk along the historic steps where the Mayflower set sail and explore the cobbled streets of the Barbican."\n    },\n    {\n      "day": "Day 2",\n      "time": "Evening",\n      "activity": "Enjoy a fine dining experience at The Boringdon Hall Hotel",\n      "location": "The Boringdon Hall Hotel",\n      "details": "Indulge in a delicious meal at the hotel\'s renowned restaurant."\n    },\n    {\n      "day": "Day 3",\n      "time": "Morning",\n      "activity": "Visit Plymouth City Museum and Art Gallery",\n      "location": "Plymouth City Museum and Art Gallery",\n      "details": "Explore the museum\'s collection of art, history, and archaeology."\n    },\n    {\n      "day": "Day 3",\n      "time": "Afternoon",\n      "activity": "Check out of your hotel and depart from Plymouth Airport (PLH)",\n      "location": "The Boringdon Hall Hotel, Plymouth Airport (PLH)",\n      "details": "Head to the airport for your flight back home."\n    }\n  ]\n}\n```',
        },
      ],
    },
  ],
});

// const result = await chatSession.sendMessage("");
