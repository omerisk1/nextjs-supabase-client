import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const count = useSelector((state) => state.job.value);
  return (
    <>
      {/* <div className="text-center mt-10 border-b-2">
        <p className="text-3xl mb-3">Jobs Title</p>
      </div> */}
    </>
  );
}
