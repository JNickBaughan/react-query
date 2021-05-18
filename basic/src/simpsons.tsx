import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

function useSimpsons() {
  return useQuery("simpsons", async () => {
    const { data } = await axios.get("/simpsons");
    return data;
  });
}

const Simpsons = () => {
  //const queryClient = useQueryClient();
  const { status, data, error, isFetching } = useSimpsons();
  console.dir(data);
  return <div>simpsons</div>;
};

export default Simpsons;
