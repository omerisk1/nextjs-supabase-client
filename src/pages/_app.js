import Navbar from "@/layout/Navbar";
import "@/styles/globals.css";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";
import { store } from "../store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

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
            <Navbar />
            <Component {...pageProps} />
          </SessionContextProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
