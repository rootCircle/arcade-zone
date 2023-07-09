import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  Textarea,
  CardBody,
  Card,
  CardHeader,
  CardFooter,
  ButtonGroup,
} from "@chakra-ui/react";
import {useState} from 'react';
import TextareaAutosize from "@mui/base/TextareaAutosize";
export default function GamingTextArea() {

  const [value, setValu] = useState('')

    const handleInputChange = (e) => {
      let inputValue = e.target.value
      setValu(inputValue)
    }
    const submited=()=>{
      console.log( toast.success('successful', {autoClose:3000},{position: toast.POSITION.BOTTOM_RIGHT}))
   }
  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "540px" }}
        height={{ sm: "476px", md: "20rem" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"2xl"}
        padding={4}
      >
       <Card align='center'  >
  <CardHeader>
  <Heading size='xl'>YOUR REVIEW </Heading>
  </CardHeader>
  <CardBody>
      <Textarea
       
        placeholder='write here '
        size='l'
        width='500px'
        marginLeft='10px'
        marginRight='10px'
        padding='10px'
        
        >
      </Textarea>
  </CardBody>
  <CardFooter justifyContent={'center'}>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue' onClick={submited}>
        Submit
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
      </Stack>
    </Center>
  );
}
