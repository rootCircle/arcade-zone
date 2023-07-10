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
    <Heading size='xl'>Game Description</Heading>
    </CardHeader>
    <CardBody>
    Welcome to Paper.io 2, the ultimate conquest game from Voodoo! Conquer as much territory as possible and beat the competition with a smooth drawing experience!
Our game offers exciting and challenging gameplay that will keep you engaged for hours. With each level, you’ll face new obstacles and enemies, but don’t worry - with your strategic skills, you’ll be able to overcome them all.


    </CardBody>
    
  </Card>
        </Stack>
      </Center>
    );
  }
  