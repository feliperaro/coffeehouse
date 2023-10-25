"use client";

import Header from "@/components/Header";
import { useEffect, useState } from "react";

const URL_API = "http://127.0.0.1:1337/api";

export default function Home() {
  const [randomMenu, setRandomMenu] = useState<any>();

  const getRandomMenu = async () => {
    await fetch(`${URL_API}/random-menu`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRandomMenu(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getRandomMenu();
  }, []);

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Coffeehouse</h1>
      </main>
    </>
  );
}
