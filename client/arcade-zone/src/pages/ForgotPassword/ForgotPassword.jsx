import {
    Button,
    FormControl,
    Flex,
    Heading,
    Input,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import axios from 'axios'
import { useState } from 'react';

export default function ForgotPasswordForm() {
    const [email, setEmail] = useState("");

    function handleSubmit() {
        axios.post(`http://localhost:8080/forget/email/${email}`).then(
            (response) => {
                console.log(response)
                alert("If your mail exists in our system, then a mail will be sent to you!")
            }
        ).catch((error) => {
            console.log("error" + error)
        })
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
                    Forgot your password?
                </Heading>
                <Text
                    fontSize={{ base: 'sm', sm: 'md' }}
                    color={useColorModeValue('gray.800', 'gray.400')}>
                    You&apos;ll get an email with a reset link
                </Text>
                <FormControl id="email">
                    <Input
                        placeholder="your-email@example.com"
                        _placeholder={{ color: 'gray.500' }}
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormControl>
                <Stack spacing={6}>
                    <Button
                        bg={'blue.400'}
                        onClick={handleSubmit}
                        color={'white'}
                        _hover={{
                            bg: 'blue.500',
                        }}>
                        Request Reset
                    </Button>
                </Stack>
            </Stack>
        </Flex>
    );
}
