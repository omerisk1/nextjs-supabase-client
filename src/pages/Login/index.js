import React from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";

export default function Login() {
  const supabaseClient = useSupabaseClient();
  const user = useUser();
  const router = useRouter();

  if (user) {
    router.push("/List");
  }

  return (
    <Auth appearance={{ theme: ThemeSupa }} supabaseClient={supabaseClient} />
  );
}
