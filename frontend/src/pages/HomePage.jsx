import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Spinner,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { useRecoilState } from "recoil";
import useShowToast from "../hooks/useShowToast";
import Post from "../components/Post";
import Add from "../components/Add";
import SuggestedUsers from "../components/SuggestedUsers";
import postsAtom from "../atoms/postsAtom";
import addsAtom from "../atoms/addAtoms";
import Sidebar from "./sidebar";
import "./Home.css";

const HomePage = () => {
  const [posts, setPosts] = useRecoilState(postsAtom);
  const [adds, setAdds] = useRecoilState(addsAtom);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [filteredAdds, setFilteredAdds] = useState([]);
  const showToast = useShowToast();

  useEffect(() => {
    const getFeedPosts = async () => {
      setLoading(true);
      setPosts([]);
      try {
        const res = await fetch("/api/posts/feed");
        const data = await res.json();
        if (data.error) {
          showToast("Error", data.error, "error");
          return;
        }
        console.log(data);
        setPosts(data);
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setLoading(false);
      }
    };
    getFeedPosts();
  }, [showToast, setPosts]);

  useEffect(() => {
    const getFeedAdds = async () => {
      setLoading(true);
      setAdds([]);
      try {
        const res = await fetch("/api/adds/feed");
        const data = await res.json();
        if (data.error) {
          showToast("Error", data.error, "error");
          return;
        }
        console.log(data);
        setAdds(data);
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setLoading(false);
      }
    };
    getFeedAdds();
  }, [showToast, setAdds]);

  useEffect(() => {
    if (Array.isArray(posts)) {
      const filteredPosts = posts.filter((post) =>
        post.postedBy.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPosts(filteredPosts);
    }
  }, [posts, searchQuery]);

  useEffect(() => {
    if (Array.isArray(adds)) {
      const filteredAdds = adds.filter((add) =>
        add.postedBy.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredAdds(filteredAdds);
    }
  }, [adds, searchQuery]);

  return (
    <Flex gap="20" alignItems="flex-start">
      <Sidebar />
      <Box flex={80}>
        <InputGroup>
          <Input
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            pr="4.5rem"
          />
          <InputRightElement width="4.5rem">
            <Icon as={FaSearch} color="gray.500" />
          </InputRightElement>
        </InputGroup>
        {loading && (
          <Flex justify="center">
            <Spinner size="xl" />
          </Flex>
        )}
        {!loading &&
          filteredPosts.length === 0 &&
          filteredAdds.length === 0 && <h1>No users found.</h1>}
        {filteredPosts.map((post) => (
          <Post key={post._id} post={post} postedBy={post.postedBy} />
        ))}
        {filteredAdds.map((add) => (
          <Add key={add._id} add={add} postedBy={add.postedBy} />
        ))}
      </Box>

      <Box
        flex={30}
        style={{ marginRight: "-17%" }}
        position="sticky"
        top="10"
        height="100vh"
        overflowY="auto"
      >
        <SuggestedUsers />
      </Box>
    </Flex>
  );
};

export default HomePage;
