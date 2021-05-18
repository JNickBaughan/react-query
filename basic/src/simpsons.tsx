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
  //const queryClient = useQueryClient();
  const { status, data, error, isFetching } = useSimpsons();
  if (isFetching || status === "loading") {
    return "loading...";
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
