import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

function useSimpsons() {
  return useQuery("simpsons", async () => {
    const { data } = await axios.get("/simpsons");
    return data;
  });
}

const Simpson = ({ name }: { name: string }) => {
  return <li>{name}</li>;
};

const Simpsons = () => {
  const { data, error, isFetching, isLoading } = useSimpsons();
  if (isFetching || isLoading) {
    return "loading...";
  }
  if (error) {
    return "Something went wrong getting the data";
  }
  return (
    <ul>
      {data.map((simpson: { name: string }) => {
        return <Simpson name={simpson.name} />;
      })}
    </ul>
  );
};

export default Simpsons;
