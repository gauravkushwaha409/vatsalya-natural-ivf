"use client";
import { ProgressProvider } from "@bprogress/next/app";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import store from "../store/store";

const Providers: React.FC<Readonly<{ children: React.ReactNode }>> = ({
  children,
}) => {
  return (
    <>
      <ProgressProvider
        height="4px"
        color="#a03879"
        options={{ showSpinner: false }}
        shallowRouting
      >
        <Toaster />
        <Provider store={store}>{children}</Provider>
      </ProgressProvider>
    </>
  );
};
export default Providers;
