import React from 'react';
import { Box, VStack, HStack, Text, Link, Divider, Image } from '@chakra-ui/react';

const Sidebar = () => {
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

      style={{ background: 'linear-gradient(to right, #626cf0, #515ac6, #999ff9)' }}
    >
      <VStack align="start" spacing="5">
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
        <Link href="/home" style={{backgroundColor:'#7e82b6', width:'100%', display:'flex', alignItems:'center', justifyContent:'center'}} _hover={{ textDecoration: 'none', color: 'gray.900' }}>
          Home
        </Link>
        <Link href="/profile" style={{backgroundColor:'#7e82b6', width:'100%', display:'flex', alignItems:'center', justifyContent:'center'}} _hover={{ textDecoration: 'none', color: 'gray.900' }}>
          Profile
        </Link>
        <Link href="/settings" style={{backgroundColor:'#7e82b6', width:'100%', display:'flex', alignItems:'center', justifyContent:'center'}} _hover={{ textDecoration: 'none', color: 'gray.900' }}>
          Settings
        </Link>
        <Link href="/about" style={{backgroundColor:'#7e82b6', width:'100%', display:'flex', alignItems:'center', justifyContent:'center'}} _hover={{ textDecoration: 'none', color: 'gray.900' }}>
          About
        </Link>
        <Divider />
        <Link href="/logout" style={{backgroundColor:'#202780', width:'100%', display:'flex', alignItems:'center', justifyContent:'center'}} _hover={{ textDecoration: 'none', color: 'gray.300' }}>
          Logout
        </Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;
