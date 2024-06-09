import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">here! :)</span>
          </h1>
          <p className="mt-11">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, eos
            minus velit rem quam inventore sit quidem cumque sint tempora
            dignissimos aliquid facere, officiis culpa nemo nihil. Quisquam, cum
            harum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolore, eos minus velit rem quam inventore sit quidem cumque sint
            tempora dignissimos aliquid facere, officiis culpa nemo nihil.
            Quisquam, cum harum!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white hover:bg-pink-700 rounded-md px-4 py-2 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
