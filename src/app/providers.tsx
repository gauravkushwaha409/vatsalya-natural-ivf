"use client";
import { ProgressProvider } from "@bprogress/next/app";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import store from "../store/store";
import { ChatProvider } from "./(chatbot)/context/ChatContext";

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
        <Provider store={store}>
          {" "}
          <ChatProvider>{children}</ChatProvider>
        </Provider>
      </ProgressProvider>
    </>
  );
};
export default Providers;
