import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import axios from "axios";
import HomePage from "../src/pages/HomePage";
import MainLayout from "../src/layout/MainLayout";
import JobsPage from "../src/pages/JobsPage";
import PageNotFound from "../src/pages/PageNotFound";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

const App = () => {
  // Add Job
  const addJob = async (newJob) => {
    const res = await axios.post("/api/jobs", newJob, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return;
  };

  //Update job
  const updatedJob = async (job) => {
    const res = await axios.put(`/api/jobs/${job.id}`, job, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return;
  };

  // Delete Job
  const deleteJob = async (id) => {
    const res = await axios.delete(`/api/jobs/${id}`, {});
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updatedJobSubmit={updatedJob} />}
          loader={jobLoader}
        />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
