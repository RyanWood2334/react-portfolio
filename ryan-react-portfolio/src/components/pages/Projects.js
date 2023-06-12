import React from "react";
import Card from "./Card";
import drty from "../assets/drty.png";
import brewvey from "../assets/brew.png";
import note from "../assets/note.png";
import mvc from "../assets/mvc.png";
import poke from "../assets/poke.png";
import weather from "../assets/weather.png";

export default function Display() {
  const work = [
    {
      id: 1,
      name: "DRTY Nomad",
      description:
        "DRTY Nomad is a platform that connects travelers, facilitates sharing of experiences, and fosters a sense of community in exploring unique destinations, while showcasing our expertise in web development, database management, and user authentication.",
      photo: drty,
      link: " https://drty-nomad-2023.herokuapp.com/",
    },
    {},
    {
      id: 3,
      name: "NFLquiz!",
      description:
        "This quiz is for all you football fans out there! giving you the opportunity to test your football knowledge with a dynamic quiz!",
      photo: mvc,
      link: "https://github.com/RyanWood2334/nfl-quiz",
    },
    {
      id: 4,
      name: "DRY Pokemon",
      description:
        "This application is a robust game featuring everyone's favorite: Pokemon! It allows the creation of your own trainer profile, lets you battle other trainers' pokemon, battle gym leaders for badges, and catch more pokemon!",
      photo: poke,
      link: "https://drypokemon.netlify.app/",
    },
    {
      id: 5,
      name: "Note Taker Organizer",
      description:
        "The note taking application is a web-based tool that streamlines note creation, organization, and storage, offering features such as search, sorting, categorization, and backup, making it an ideal solution for staying organized and managing important information efficiently.",
      photo: note,
      link: "https://github.com/RyanWood2334/note-taker-app",
    },
    {
      id: 6,
      name: "Brewery Foolery",
      description:
        "Thsi application allows you to search for breweries in your area, and provides you and your friends fun trivia to use at the brewery you find and head out to!",
      photo: weather,
      link: "https://github.com/fevercatdream/brewery-foolery",
    },
  ];
  // console.log(work);

  return (
    <div>
      {work.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          description={item.description}
          photo={item.photo}
          link={item.link}
        />
      ))}
    </div>
  );
}
