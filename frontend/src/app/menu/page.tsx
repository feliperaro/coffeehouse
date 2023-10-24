"use client";

import Header from "@/components/Header";
import { useEffect, useState } from "react";

const URL_API = "http://127.0.0.1:1337/api";

export default function MenuPage() {
  const [menu, setMenu] = useState<any>([]);
  const [drinks, setDrinks] = useState<any>([]);
  const [foods, setFoods] = useState();

  const getMenu = async () => {
    await fetch(`${URL_API}/menu`)
      .then((response) => response.json())
      .then((data) => {
        setMenu(data);

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
      <main className="flex w-auto h-full min-h-screen flex-col items-center justify-start">
        <h1 className="font-extrabold">Menu</h1>
        <div className="flex flex-col h-4/5 w-max mt-5">
          <h2 className="font-bold w-auto text-center">Drinks</h2>
          {drinks.length > 0 ? (
            <div className="flex flex-col h-full w-full">
              <ul className="border-x border-y border-pink-500 flex flex-col gap-5 h-full w-full">
                {drinks.map((type: any) => (
                  <li className="h-auto w-auto" key={type.id}>
                    <span>{type.name}</span>
                    {type.subCategories !== 0 && (
                      <ul className="border-x border-y border-green-500 gap-5 flex flex-col h-full w-full">
                        {type.subCategories.map((subCategory: any) => (
                          <li className="h-auto w-auto" key={subCategory.id}>
                            <span>{subCategory.name}</span>
                            {subCategory.items !== 0 && (
                              <ul className="border-x border-y gap-1 border-red-500 ">
                                {subCategory.items.map((item: any) => (
                                  <li className="h-auto w-auto" key={item.id}>
                                    <span>{item.name}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>Loading data...</p>
          )}
        </div>
      </main>
    </>
  );
}
