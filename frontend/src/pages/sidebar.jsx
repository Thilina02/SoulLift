import React from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  Link,
  Divider,
  Image,
} from "@chakra-ui/react";
import { MdOutlineSettings } from "react-icons/md";
import { FiShoppingCart, FiBriefcase } from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { MdAccessibilityNew } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { BsFillChatQuoteFill } from "react-icons/bs";
import useLogout from "../hooks/useLogout";
import userAtom from "../atoms/userAtom";
import { AiFillHome } from "react-icons/ai";
const Sidebar = () => {

	const user = useRecoilValue(userAtom);
  const logout = useLogout();
  return (
    <Box
      as="nav"
      position="fixed"
      left="0"
      top="0"
      w="250px"
      h="100vh"
      bg="gray.500"
      color="white"
      p="5"
      style={{
        background: "linear-gradient(to right, #626cf0, #515ac6, #999ff9)",
      }}
    >
      <VStack
        align="start"
        spacing="5"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HStack spacing="3" mb="5">
          <Image
            src="https://cdn-icons-png.flaticon.com/128/1292/1292370.png"
            alt="Sidebar Logo"
            boxSize="50px"
          />
          <Text fontSize="2xl" fontWeight="bold">
            SoulLift
          </Text>
        </HStack>
        <Divider />
        <br/>
        <Link
          as={RouterLink}
          to="/"
          style={{
            backgroundColor: "#7e82b6",
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          _hover={{ textDecoration: "none", color: "gray.900" }}
        >
          <AiFillHome size={24} style={{ marginRight: "32px" }} />
          Home
        </Link>
        <br/>
        <Link
          as={RouterLink} to={`/${user.username}`}
          style={{
            backgroundColor: "#7e82b6",
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          _hover={{ textDecoration: "none", color: "gray.900" }}
        >
          <RxAvatar size={20} style={{ marginRight: "32px" }} />{" "}
          Profile
        </Link>
        <br/>
        <Link
          as={RouterLink}
          to="/business"
          style={{
            backgroundColor: "#7e82b6",
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          _hover={{ textDecoration: "none", color: "gray.900" }}
        >
          <FiShoppingCart size={24} style={{ marginRight: "26px" }} /> Business
        </Link>
        <br/>
        <Link
          as={RouterLink}
          to={`/organization-job`}
          style={{
            backgroundColor: "#7e82b6",
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          _hover={{ textDecoration: "none", color: "gray.900" }}
        >
          <FiBriefcase size={20} style={{ marginRight: "49px" }} /> Jobs
        </Link>
        <br/>
        <Link
         as={RouterLink} to={`/chat`}
          style={{
            backgroundColor: "#7e82b6",
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          _hover={{ textDecoration: "none", color: "gray.900" }}
        >
          <BsFillChatQuoteFill size={20} style={{ marginRight: "49px" }} />{" "}
          Chat
        </Link>
       <br/>
        <Link
          as={RouterLink}
          to={`/consultant`}
          style={{
            backgroundColor: "#7e82b6",
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          _hover={{ textDecoration: "none", color: "gray.900" }}
        >
          <MdAccessibilityNew  size={20} style={{ marginRight: "8px" }} />{" "}
          Consultants
        </Link>
        <br/>
        <Link
          as={RouterLink} to={`/settings`}
          style={{
            backgroundColor: "#7e82b6",
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          _hover={{ textDecoration: "none", color: "gray.900" }}
        >
          <MdOutlineSettings size={20} style={{ marginRight: "32px" }} />{" "}
          Settings
        </Link>
        <Divider />
        <Link
        
          style={{
            backgroundColor: "#202780",
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          _hover={{ textDecoration: "none", color: "gray.300" }}
          onClick={logout}
        >
          Logout
        </Link>

        {!user && (
				<Link as={RouterLink} to={"/auth"} onClick={() => setAuthScreen("signup")}>
					Sign up
				</Link>
			)}
      </VStack>
    </Box>
  );
};

export default Sidebar;
