import {
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Text,
    Link,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { Link as ReactLink } from "react-router-dom";
import axios from 'axios';

export default function RegisterUser() {
    const [showPassword, setShowPassword] = useState(false);
    const [firstName, setNameFirst] = useState("");
    const [lastName, setNameLast] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email,setEamil] = useState("");




    const handleSubmit = () => {

        // const {parse, stringify} = require('flatted/cjs');

        const data = {
            "name":`${firstName} ${lastName}`,
            "email": email,
            "password": password,
            "username": username,
        };
        // stringify(data);
        console.log(data);
        fetch('http://localhost:8080/register/user', {
            mode:'cors',
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        }
        ).then((response) => {
            console.log(response)
        }).catch((e) => {
            console.log(e)
        })
    };

    return (
        <Stack spacing={4}>

            <HStack>
                <Box>
                    <FormControl id="firstName" isRequired>
                        <FormLabel>First Name</FormLabel>
                        <Input type="text" onChange={(e) => setNameFirst(e.target.value)} />
                    </FormControl>
                </Box>
                <Box>
                    <FormControl id="lastName">
                        <FormLabel>Last Name</FormLabel>
                        <Input type="text" onChange={(e) => setNameLast(e.target.value)} />
                    </FormControl>
                </Box>
            </HStack>
            <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={(e) => setEamil(e.target.value)} />
            </FormControl>

            <FormControl id="username" isRequired>
                <FormLabel>Username</FormLabel>
                <Input type="text" onChange={(e) => setUsername(e.target.value)} />
            </FormControl>

            <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input type={showPassword ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)} />
                    <InputRightElement h={'full'}>
                        <Button
                            variant={'ghost'}
                            onClick={() =>
                                setShowPassword((showPassword) => !showPassword)
                            }>
                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}

                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
                <Button
                    loadingText="Submitting"
                    size="lg"
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                        bg: 'blue.500',
                    }}
                    onClick={handleSubmit}
                >
                    Sign up
                </Button>
            </Stack>
            <Stack pt={6}>
                <Text align={'center'}>
                    Already a user? <Link color={'blue.400'} as={ReactLink} to="/login">Login</Link>
                </Text>
            </Stack>
        </Stack>
    );
}



