import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteJob } from "@/store/features/counter/counterSlice";
import { ToastContainer, toast } from "react-toastify";

export default function JobList() {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.job.value);
  const notify = () =>
    toast.error(" Job Deleted.", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const handleClick = (id) => {
    dispatch(deleteJob(id));
    notify();
  };

  return (
    <>
      <div className="text-center mt-10 border-b-2">
        <p className="text-3xl mb-3">Jobs Title</p>
      </div>
      {jobs.length > 0 ? (
        jobs.map((job, index) => (
          <div className="text-center flex justify-center align-center">
            <p key={index} className="text-center mt-10 text-xl">
              - {job}
            </p>

            <button
              className="mt-10 bg-red-500 ml-5 rounded p-1"
              onClick={() => handleClick(index)}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p className="text-center mt-5">No Jobs</p>
      )}
    </>
  );
}
