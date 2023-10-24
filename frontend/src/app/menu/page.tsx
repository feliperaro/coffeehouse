"use client";

import Header from "@/components/Header";
import Link from "next/link";
import { useEffect, useState } from "react";

const URL_API = "http://127.0.0.1:1337/api";

export default function MenuPage() {
  const [menu, setMenu] = useState();
  const [drinks, setDrinks] = useState();
  const [foods, setFoods] = useState();

  const getMenu = async () => {
    await fetch(`${URL_API}/menu`)
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        setMenu(data);
        setDrinks(data.drinks);
        setFoods(data.foods);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Menu</h1>
      </main>
    </>
  );
}
