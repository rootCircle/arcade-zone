import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
  import { useSearchParams } from "react-router-dom";
  import axios from 'axios';

  export default function ResetPasswordForm() {
    let [searchParams, setSearchParams] = useSearchParams();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit() {
      console.log(searchParams.get('id'))
      axios.post('http://localhost:8080/forget/newPassword', {
        "email": email,
        "password":password,
        "passwordTokengiven":searchParams.get('id')
      }).then((res)=>{console.log(res)
      alert("Account reset successfully!")})
    }



    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
            Enter new password
          </Heading>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: 'gray.500' }}
              type="email"
              onChange={(e) => {setEmail(e.target.value)}}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" onChange={(e) => {setPassword(e.target.value)}} />
          </FormControl>
          <Stack spacing={6}>
            <Button
              onClick={handleSubmit}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Submit
            </Button>
          </Stack>
        </Stack>
      </Flex>
    );
  }
  