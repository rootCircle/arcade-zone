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
import {Link as ReactLink} from "react-router-dom";
import axios from 'axios';



export default function RegisterAdmin() {
    const [showPassword, setShowPassword] = useState(false);
    const [name, setNameFirst] = useState("");
    const [lastName, setNameLast] = useState("");
    const [email,setEamil] = useState("");
    const [password,setPassword ]= useState("");


    const handleSubmit = () => {

        console.log(name);
        axios.post('http://localhost:8080/register/admin', {
            "name" : name+lastName,
            "email":email,
            "password":password
        }).then((response) => {
            console.log(response)
        }).catch((e) => {
            console.log("Error")
        })
    };

    return (
        <Stack spacing={4}>
            <HStack>
                <Box>
                    <FormControl id="firstName" isRequired>
                        <FormLabel>First Name</FormLabel>
                        <Input type="text" onChange={(e) => setNameFirst(e.target.value)}/>
                    </FormControl>
                </Box>
                <Box>
                    <FormControl id="lastName">
                        <FormLabel>Last Name</FormLabel>
                        <Input type="text" onChange={(e) => setNameLast(e.target.value)}/>
                    </FormControl>
                </Box>
            </HStack>
            <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={(e) => setEamil(e.target.value)}/>
            </FormControl>

            <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input type={showPassword ? 'text' : 'password'} onChange={(e) =>setPassword(e.target.value)}/>
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
                    onClick={handleSubmit}>
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



