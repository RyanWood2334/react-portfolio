import React from "react";
import Card from "./Card";
import pokemon from "../assets/drypokemon.png";
import dirtyNomad from "../assets/dirtyNomad.png";
import noteTaker from "../assets/noteTaker.png";
import brewery from "../assets/breweryFoolery.png";
import nfl from "../assets/nflQuiz.png";

export default function Display() {
  const cardSize = {
    width: "calc(50% - 20px)", // Adjust the width as needed
    height: "400px",
  };

  const projects = [
    {
      id: 1,
      name: "DRTY Nomad",
      description:
        "DRTY Nomad is a platform that connects travelers, facilitates sharing of experiences, and fosters a sense of community in exploring unique destinations, while showcasing our expertise in web development, database management, and user authentication.",
      photo: dirtyNomad,
      link: "https://drty-nomad-2023.herokuapp.com/",
    },
    {
      id: 3,
      name: "NFLquiz!",
      description:
        "This quiz is for all you football fans out there! giving you the opportunity to test your football knowledge with a dynamic quiz!",
      photo: nfl,
      link: "https://github.com/RyanWood2334/nfl-quiz",
    },
    {
      id: 4,
      name: "DRY Pokemon",
      description:
        "This application is a robust game featuring everyone's favorite: Pokemon! It allows the creation of your own trainer profile, lets you battle other trainers' pokemon, battle gym leaders for badges, and catch more pokemon!",
      photo: pokemon,
      link: "https://drypokemon.netlify.app/",
    },
    {
      id: 5,
      name: "Note Taker Organizer",
      description:
        "The note taking application is a web-based tool that streamlines note creation, organization, and storage, offering features such as search, sorting, categorization, and backup, making it an ideal solution for staying organized and managing important information efficiently.",
      photo: noteTaker,
      link: "https://github.com/RyanWood2334/note-taker-app",
    },
    {
      id: 6,
      name: "Brewery Foolery",
      description:
        "This application allows you to search for breweries in your area, and provides you and your friends fun trivia to use at the brewery you find and head out to!",
      photo: brewery,
      link: "https://github.com/fevercatdream/brewery-foolery",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
        padding: "20px",
      }}
    >
      {projects.map((project) => (
        <Card key={project.id} style={cardSize} project={project} />
      ))}
    </div>
  );
}
