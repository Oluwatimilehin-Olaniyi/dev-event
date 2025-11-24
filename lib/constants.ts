export type EventItem = {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string; // human-friendly date
  time: string;
  url: string;
  description: string;
};

export const events: EventItem[] = [
  {
    title: "React Summit",
    image: "/images/event1.png",
    slug: "react-summit-2026",
    location: "Amsterdam, Netherlands",
    date: "March 18-19, 2026",
    time: "09:00",
    url: "https://reactsummit.com/",
    description: "Large React conference with talks, workshops and community events."
  },
  {
    title: "JSConf EU",
    image: "/images/event2.png",
    slug: "jsconf-eu-2026",
    location: "Lisbon, Portugal",
    date: "April 10-12, 2026",
    time: "10:00",
    url: "https://jsconf.com/",
    description: "Community-driven JavaScript conference covering web platform and ecosystem."
  },
  {
    title: "Google I/O",
    image: "/images/event3.png",
    slug: "google-io-2026",
    location: "Mountain View, CA, USA",
    date: "May 20-22, 2026",
    time: "09:30",
    url: "https://events.google.com/io/",
    description: "Google's developer conference with product announcements and technical sessions."
  },
  {
    title: "Node+JS Interactive",
    image: "/images/event4.png",
    slug: "nodejs-interactive-2026",
    location: "Berlin, Germany",
    date: "June 3-5, 2026",
    time: "09:00",
    url: "https://nodejs.org/en/",
    description: "Official Node.js and ecosystem conference with core contributors and talks."
  },
  {
    title: "ETHGlobal Paris",
    image: "/images/event5.png",
    slug: "ethglobal-paris-2026",
    location: "Paris, France",
    date: "July 8-10, 2026",
    time: "11:00",
    url: "https://ethglobal.co/",
    description: "Ethereum & Web3 hackathon series — teams build decentralized apps over a weekend."
  },
  {
    title: "HackMIT",
    image: "/images/event6.png",
    slug: "hackmit-2026",
    location: "Cambridge, MA, USA",
    date: "September 19-20, 2026",
    time: "18:00",
    url: "https://hackmit.org/",
    description: "One of the largest student-run hackathons, welcoming hackers worldwide."
  },
  {
    title: "Local Dev Meetup: Tech Talks",
    image: "/images/event-full.png",
    slug: "local-tech-talks-2025-11",
    location: "Online / Remote",
    date: "November 28, 2025",
    time: "19:00",
    url: "https://www.meetup.com/",
    description: "Monthly online meetup featuring short tech talks and networking."
  }
];

export default events;
