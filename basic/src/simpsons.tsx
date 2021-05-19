import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

function useSimpsons(name: string) {
  return useQuery(["simpsons", name], async () => {
    const { data } = await axios.get(`/simpsons/${name}`);
    return data;
  });
}

const Simpson = ({ name }: { name: string }) => {
  return <li>{name}</li>;
};

const Simpsons = ({ name }: { name: string }) => {
  const { data, error, isFetching, isLoading } = useSimpsons(name);
  if (isFetching || isLoading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>Something went wrong getting the data</div>;
  }
  if (data.length === 0) {
    return <div>D'oh! Looks like that character isn't in the list</div>;
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
