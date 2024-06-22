import { Box, Heading, Text, VStack, Spinner, Button } from "@chakra-ui/react";
// Import Link from react-router-dom
import { useEffect, useState } from "react";
import useShowToast from "../../hooks/useShowToast";
import Post from "../../components/Post";
import { useRecoilState } from "recoil";
import postsAtom from "../../atoms/postsAtom";
import SuggestedUsers from "../../components/SuggestedUsers";
import { Flex } from "@chakra-ui/react";
import axios from "axios";
import "../Organization-job-page.css";
import { Link, Link as RouterLink } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import ODSideBar from "../../components/udComponents/ODSideBar";

const PostedJobs = () => {
  const [posts, setPosts] = useRecoilState(postsAtom);
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const showToast = useShowToast();
  const { id } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("/api/jobpost/Get-all-jobs"); // Change the endpoint accordingly
        setJobs(response.data.jobs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };

    fetchJobs();
  }, []);

  const handleDeleteJob = async (jobId) => {
    try {
      // Send DELETE request to delete the job
      await axios.delete(`/api/jobpost/delete-posted-jobs/${jobId}`); // Adjust endpoint if needed

      // Update the jobs list after successful deletion
      const updatedJobs = jobs.filter((job) => job._id !== jobId);
      setJobs(updatedJobs);

      // Show success toast
      showToast("Job deleted successfully", "success");
    } catch (error) {
      console.error("Error deleting job:", error);
      showToast("Error deleting job", "error");
    }
  };

  const handleUpdateJob = (jobId) => {
    navigate(`/Update-postedJobs/${jobId}`);
  };

  const handleupdateJob = (id) => {
    navigate(`/Update-postedJobs/${id}`);
  };

  return (
    <div>
      <div
        className="Create-a-post-up-container"
        style={{
          minWidth: "230vh",
          height: "40vh",
          marginLeft: "-40vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="Create-a-post-tooltip-container"
          style={{ marginLeft: "110vh" }}
        >
          <span className="Create-a-post-tooltip-1">
            Provide accurate information.
          </span>
          <span className="Create-a-post-tooltip-2">
            Make a Rich Text Editing.
          </span>
          <span className="Create-a-post-tooltip-3">
            Participate in challenges.
          </span>
          <span>Your all posted jobs</span>
        </div>

        <h1
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: "5vh",
            fontWeight: "700",
            marginLeft: "40vh",
          }}
        >
          After a job posting expires, companies should close the posting,
          review remaining applications, inform candidates,<br/> update internal records, 
          evaluate the recruitment strategy,  <br/>seek feedback, adjust future postings,
          maintain contact with promising candidates, stay compliant, and plan for succession <br/>
          to ensure an efficient and effective hiring process.
        </h1>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ODSideBar />
        <Box p={4}>
          <Heading
            mb={1}
            sx={{ display: "flex", justifyContent: "center", margin: "auto" }}
          >
            Your posted jobs
          </Heading>

          {loading ? (
            <Spinner />
          ) : (
            <VStack align="start" spacing={4}>
              {jobs.map((job) => (
                <div class="modal" style={{ marginTop: "10vh" }} key={job._id}>
                  <article class="modal-container">
                    <header class="modal-container-header">
                      <span class="modal-container-title">
                        <svg
                          aria-hidden="true"
                          height="24"
                          width="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 0h24v24H0z" fill="none"></path>
                          <path
                            d="M14 9V4H5v16h6.056c.328.417.724.785 1.18 1.085l1.39.915H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8v1h-7zm-2 2h9v5.949c0 .99-.501 1.916-1.336 2.465L16.5 21.498l-3.164-2.084A2.953 2.953 0 0 1 12 16.95V11zm2 5.949c0 .316.162.614.436.795l2.064 1.36 2.064-1.36a.954.954 0 0 0 .436-.795V13h-5v3.949z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <Heading size="md">
                          {job.jobTitle}{" "}
                          <Text fontSize="sm">
                            <div
                              style={{
                                marginTop: "-3vh",
                                marginLeft: "266px",
                                fontWeight: "100",
                                fontSize: "16px",
                              }}
                            >
                              Application Deadline: {job.applicationDeadline}
                            </div>
                          </Text>
                        </Heading>
                      </span>
                    </header>
                    <section
                      class="modal-container-body rtf"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <ol>
                        <Text fontSize="sm">
                          <div
                            style={{
                              fontWeight: "800",
                              fontSize: "26px",
                            }}
                          >
                            Send you cv to below
                          </div>{" "}
                          {job.submissionMethod}
                        </Text>
                        <Text fontSize="sm">
                          <div
                            style={{
                              fontWeight: "800",
                              fontSize: "26px",
                            }}
                          >
                            Company Email
                          </div>
                          {job.email}
                        </Text>
                        <Text fontSize="sm">
                          <div
                            style={{
                              fontWeight: "800",
                              fontSize: "26px",
                            }}
                          >
                            Salary
                          </div>
                          {job.salary}
                        </Text>
                        <Text fontSize="sm">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              fontWeight: "800",
                              fontSize: "26px",
                            }}
                          >
                            Experience
                          </div>
                          {job.experience}
                        </Text>

                        <Text fontSize="sm">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              fontWeight: "800",
                              fontSize: "26px",
                            }}
                          >
                            Skills
                          </div>{" "}
                          {job.skills}
                        </Text>
                        <Text fontSize="sm">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              fontWeight: "800",
                              fontSize: "26px",
                            }}
                          >
                            About the job
                          </div>{" "}
                          {job.jobAbout}
                        </Text>
                        <Text fontSize="sm">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              fontWeight: "800",
                              fontSize: "26px",
                            }}
                          >
                            Responsibilities
                          </div>
                          {job.responsibilites}
                        </Text>
                        <Text fontSize="sm">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              fontWeight: "800",
                              fontSize: "26px",
                            }}
                          >
                            Qualifications
                          </div>{" "}
                          {job.qualifications}
                        </Text>
                        <Text fontSize="sm">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              fontWeight: "800",
                              fontSize: "26px",
                            }}
                          >
                            Other
                          </div>{" "}
                          {job.other}
                        </Text>
                      </ol>
                    </section>
                    <footer class="modal-container-footer">
                      <Button
                        variant="contained"
                        colorScheme="red"
                        onClick={() => handleDeleteJob(job._id)}
                      >
                        Delete
                      </Button>
                      <Button
                        variant="contained"
                        onClick={() => handleupdateJob(job._id)}
                      >
                        Edite{" "}
                      </Button>
                    </footer>
                  </article>
                </div>
              ))}
            </VStack>
          )}
        </Box>
      </div>
    </div>
  );
};

export default PostedJobs;
