"use client";
import { Provider } from "react-redux";
import store from "../store/store";
import { ProgressProvider } from "@bprogress/next/app";

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
        <Provider store={store}>{children}</Provider>
      </ProgressProvider>
    </>
  );
};
export default Providers;
