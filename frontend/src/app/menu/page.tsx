"use client";

import Header from "@/components/Header";
import Link from "next/link";
import { useEffect, useState } from "react";

const URL_API = "http://127.0.0.1:1337/api";

export default function MenuPage() {
  const [drinks, setDrinks] = useState<any>([]);
  const [foods, setFoods] = useState<any>([]);

  const getMenu = async () => {
    await fetch(`${URL_API}/menu`)
      .then((response) => response.json())
      .then((data) => {
        const drinksData =
          data.drinks.categories === undefined ? [] : data.drinks.categories;
        setDrinks(drinksData);

        const foodsData =
          data.foods.categories === undefined ? [] : data.foods.categories;
        setFoods(foodsData);
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
      <main className="flex w-auto h-full min-h-screen">
        <div className="w-full flex mt-10 gap-16">
          <nav className="flex flex-col gap-5 ml-12 w-40 ">
            <h3 className="font-bold w-auto text-center">Drinks</h3>
            {drinks.length !== 0 && (
              <ul className="flex flex-col gap-1 h-auto mb-5 w-full">
                {drinks.map((food: any) => (
                  <li className="h-auto w-auto gap-1" key={food.id}>
                    <Link
                      className="hover:text-green-800 hover:font-bold"
                      href={`/drinks/${food.id}`}
                    >
                      {food.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            <h3 className="font-bold w-auto text-center">Foods</h3>
            {foods.length !== 0 && (
              <ul className="flex flex-col gap-1 h-full w-full">
                {foods.map((food: any) => (
                  <li className="h-auto w-auto gap-1" key={food.id}>
                    <Link
                      className="hover:text-green-800 hover:font-bold"
                      href={`/foods/${food.id}`}
                    >
                      {food.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </nav>
          <div className="flex flex-col p-8 gap-5 h-full w-full">
            <h1 className="font-extrabold ">Menu</h1>
            <section className="h-full flex flex-col">
              <h2 className="font-bold w-auto">Drinks</h2>
              {drinks.length !== 0 && (
                <ul className="border-y flex flex-wrap h-full mt-1 mb-5 w-full">
                  {drinks.map((drink: any) => (
                    <li
                      className="justify-center items-center flex h-auto w-1/2"
                      key={drink.id}
                    >
                      <Link
                        className="hover:text-green-800 hover:font-bold"
                        href={`drinks/${drink.id}`}
                      >
                        {drink.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              <h2 className="font-bold w-auto">Food</h2>
              {foods.length !== 0 && (
                <ul className="flex flex-wrap h-full w-full">
                  {foods.map((food: any) => (
                    <li
                      className="justify-center items-center flex h-auto w-1/2"
                      key={food.id}
                    >
                      <Link
                        className="hover:text-green-800 hover:font-bold"
                        href={`/foods/${food.id}`}
                      >
                        {food.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
