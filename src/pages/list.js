import JobList from "@/components/Job/JobList";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";

import React from "react";

export default function List() {
  return (
    <>
      <JobList />
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx);
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session)
    return {
      redirect: {
        destination: "/Login",
        permanent: false,
      },
    };

  return {
    props: {
      initialSession: session,
      user: session.user,
    },
  };
};
