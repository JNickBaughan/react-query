import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const WithQCProvider = ({
  children,
}: {
  children: JSX.ElementChildrenAttribute;
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default WithQCProvider;
