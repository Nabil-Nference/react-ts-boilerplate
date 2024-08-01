import React, { useState } from "react";
import { Button } from "../components/atoms/Button";
import { Header } from "../components/organisms/Header";
import { CardList } from "../components/organisms/CardList";
import { get } from "../api";

const Home = () => {
  const [breeds, setBreeds] = useState<string[]>([]);

  const fetchData = async () => {
    try {
      const data = await get<{
        message: { [key: string]: string[] };
        status: string;
      }>("/breeds/list/all");
      const breedList = Object.keys(data.message);
      setBreeds(breedList);
      console.log(breedList);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const cards = breeds.map((breed) => ({
    title: breed,
    content: "Breed info goes here.",
  }));

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Header title="Home Page" />
      <Button label="Fetch Dog Breeds" onClick={fetchData} />
      <CardList cards={cards} />
    </div>
  );
};

export default Home;
