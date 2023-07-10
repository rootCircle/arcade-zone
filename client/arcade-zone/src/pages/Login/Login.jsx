import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
} from '@chakra-ui/react';

import { redirect } from 'react-router-dom';

import { useState } from 'react';

import { Form, Link as ReactLink } from "react-router-dom";

import imgBanner from '../../assets/img/signupbanner.png'
import { useEffect } from 'react';

export default function SplitScreen() {

  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");

  const loginner = (e) => {

    const data = {
      "email": email,
      "password": password
    }

    fetch('http://localhost:8080/login', {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    ).then((response) => {
      const res = response.json().
        then((respy) => { 
          console.log(respy) 
          sessionStorage.setItem('jwtToken', JSON.stringify(respy))
          window.location.href="/home";
        })
        .catch((e) => {
          console.log(e);
        });
    }).catch((e) => {
      console.log(e)
    })
  }
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" onChange={(e) => setEamil(e.target.value)} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Link color={'blue.500'} as={ReactLink} to="/forgotAccount">Forgot password?</Link>
            </Stack>
            <Button colorScheme={'blue'} variant={'solid'} onClick={loginner}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={imgBanner}
        />
      </Flex>
    </Stack>
  );
}
