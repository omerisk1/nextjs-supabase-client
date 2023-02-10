import Navbar from "@/layout/Navbar";
import "@/styles/globals.css";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";
import { store } from "../store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "next-themes";
import { ToastContainer, toast } from "react-toastify";

export default function App({ Component, pageProps }) {
  const [supabase] = useState(() => createBrowserSupabaseClient());
  let persistor = persistStore(store);
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SessionContextProvider
            supabaseClient={supabase}
            initialSession={pageProps.initialSession}
          >
            <ThemeProvider>
              <Navbar />
              <Component {...pageProps} />
              <ToastContainer />
            </ThemeProvider>
          </SessionContextProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
