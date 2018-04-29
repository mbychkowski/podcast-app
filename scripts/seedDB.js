const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the podcasts collection and inserts the podcasts below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
  {
    useMongoClient: true
  }
);

const podcastSeed = [
  {
    title: "The New Yorker Radio Hour",
    author: "Stephen King",
    synopsis:
      "The New Yorker Radio Hour is a weekly news and arts compendium. It looks at the space between an artist’s finished product—prose, cartoons, film, music, dance—and the creators themselves. Timely, hard-news stories on the Supreme Court, the White House, Harvey Weinstein, and the other of-the-moment pieces being covered by the magazine show up in this iteration, too. But the show has a looser structure, and its host David Remnick, the editor of The New Yorker, allows the lighter-hearted narratives to meander into quiet, contemplative places, giving it variety-is-the-spice-of-life, coffeehouse vibes. And bigger is not necessarily better with the The New Yorker Radio Hour. Take, for example, a brilliant six-minute segment where the cartoonist Emily Flake takes listeners to Rudy’s, her favorite dive bar; it’s a nerdy, arty, boozy, sweet snapshot of what it’s like to be an artist in the city.",
    date: new Date(Date.now())
  },
  {
    title: "Reply All",
    host: "Alex Goldman and PJ Vogt",
    synopsis:
      "Let’s face it, data collection, hacks, and the world’s obsession with GIFs can make life seem incomprehensible. Reply All, still the best podcast out there about the internet, wants to explain it to you in a calm voice. Repeat listens make clear this is a show driven by mysteries and exploration. The hosts Alex Goldman and PJ Vogt meet, frequently in person, the people that exist in your internet blindspots. Instead of feeding the trolls, they chat with them. In one episode, Goldman flies to India to confront a scammer he felt a connection with, the grift notwithstanding. During an interview this year, Vogt mentioned how their producers and his co-host frequently hide entire details of stories from each other, just so they can record an earnest piece of tape, a genuine response, back in the studio. This kind of authenticity is hard to come by. Reply All may be the most reliable listen you’ll find on any podcatcher.",
    date: new Date(Date.now())
  },
];

db.Podcast
  .remove({})
  .then(() => db.Podcast.collection.insertMany(podcastSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
