import React from "react";
import { Link } from "@tanstack/react-router";
import { useTheme } from "./theme";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const linksList = [
  { title: "Home", path: "/" },
  { title: "Projects", path: "/projects" },
  { title: "Timeline", path: "/timeline"},
  // { title: "Posts", path: "/blog" }
];

export function NavBar() {
  const theme = useTheme();

  return (
    <div className="flex flex-col justify-center px-8">
      <div className="flex items-center justify-between w-full relative max-w-2xl mx-auto pt-8 pb-8">
        {linksList.map((link,i) => (
          <Link
            activeProps={{ className: "font-semibold" }}
            className="py-2 px-3 transition-all hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md font-extralight"
            inactiveProps={{ className: "font-extralight" }}
            key={`${i}-${link.path}`}
            to={link.path}
          >
            {link.title}
          </Link>
        ))}
        <button
          onClick={() =>
            theme.setTheme(theme.resolvedTheme == "dark" ? "light" : "dark")
          }
          className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all"
        >
          {theme.theme == "dark" ? <IoMoonOutline /> : <IoSunnyOutline />}
        </button>
      </div>
    </div>
  );
}
