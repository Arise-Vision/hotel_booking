"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { useContext } from "react";
import HomePageLink from "../HomeLink/HomePageLink";
import { CircleUserRound, Moon, Sun } from "lucide-react";
import ThemeContext from "@/context/themeContext";
import Image from "next/image";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const { data: session } = useSession();

  return (
    <div className="py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between">
      <div className="flex items-center w-full md:w-2/3">
        <HomePageLink classname="animate-bounce" />
        <ul className="flex items-center ml-3">
          <li className="ml-4">
            {session?.user ? (
              <Link href={`/users/${session.user.id}`}>
                {session.user.image ? (
                  <div className="w-10 h-10 rounded-full overflow-hideddn">
                    <Image
                      src={session.user.image}
                      width={40}
                      height={40}
                      alt="user image"
                      className='rounded-full img scale-animation'
                    />
                  </div>
                ) : (
                  <CircleUserRound className="text-2xl cursor-pointer" />
                )}
              </Link>
            ) : (
              <Link href="/auth">
                <CircleUserRound className="text-2xl cursor-pointer" />
              </Link>
            )}
          </li>
          <li className="ml-4">
            {theme ? (
              <Sun
                onClick={() => {
                  setTheme(false);
                  localStorage.removeItem("theme");
                }}
                className="cursor-pointer text-xl"
              />
            ) : (
              <Moon
                onClick={() => {
                  setTheme(true);
                  localStorage.setItem("theme", "true");
                }}
                className="cursor-pointer text-xl"
              />
            )}
          </li>
        </ul>
      </div>
      <ul className="flex items-center justify-around w-fit gap-4 sm:gap-2 md:w-1/3 mt-4 overflow-x-hidden">
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href="/rooms">Rooms</Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
