import { withPageAuth } from "@supabase/auth-helpers-nextjs";
import React from "react";

export default function Create() {
  return <div>Create</div>;
}

export const getServerSideProps = withPageAuth({ redirectTo: "/Login" });
