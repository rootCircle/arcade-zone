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
        Hello my name si monark jain, this is a fantastic page made by Mrs mnaish Rawat. Using I frame. Akshaj is my son and praveen also and udit also. Are mai to papa hu raja hu,poori duniya ka papa ~ JACK the DON
    </CardBody>
    
  </Card>
        </Stack>
      </Center>
    );
  }
  