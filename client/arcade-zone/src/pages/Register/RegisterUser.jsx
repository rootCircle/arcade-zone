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


export default function RegisterUser() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Stack spacing={4}>

            <HStack>
                <Box>
                    <FormControl id="firstName" isRequired>
                        <FormLabel>First Name</FormLabel>
                        <Input type="text" />
                    </FormControl>
                </Box>
                <Box>
                    <FormControl id="lastName">
                        <FormLabel>Last Name</FormLabel>
                        <Input type="text" />
                    </FormControl>
                </Box>
            </HStack>
            <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
            </FormControl>

            <FormControl id="username" isRequired>
                <FormLabel>Username</FormLabel>
                <Input type="text" />
            </FormControl>

            <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input type={showPassword ? 'text' : 'password'} />
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
                    }}>
                    Sign up
                </Button>
            </Stack>
            <Stack pt={6}>
                <Text align={'center'}>
                    Already a user? <Link color={'blue.400'} href="/login">Login</Link>
                </Text>
            </Stack>
        </Stack>
    );
}



