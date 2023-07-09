import React, { useState, useEffect } from "react";
import GamingReview from './GamingReview';
import style from "../../css/GamingPage.module.css";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
// import FireflyCanvas from './Temperory/Image';
import { CopyIcon,ChatIcon,BellIcon } from '@chakra-ui/icons'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Avatar,
  Box,
  Heading,
  Button,
  Text,
  Image,
  Center,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  IconButton,
  FormControl,
  FormLabel,
  HStack,
  Stack,
  Divider,
  ButtonGroup,
  Textarea,

} from "@chakra-ui/react";
import { BiLike, BiChat, BiShare, BiDislike,BiLogoWhatsapp } from "react-icons/bi";
import {  } from "react-icons/io5";
import { color } from "framer-motion";
function GamingPage(props) {

    //toasting part

    const notify = ()=>{
     toast('Hello gamers')
    }
    const submited=()=>{
       console.log( toast.success('successful', {autoClose:3000},{position: toast.POSITION.BOTTOM_RIGHT}))
    }

    const [value, setValu] = useState('')

    const handleInputChange = (e) => {
      let inputValue = e.target.value
      setValu(inputValue)
    }
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [counter, setCounter] = useState(16900);
  const [counte, setCounte] = useState(69);
  const [likee, setvalue] = useState(0);
  const [unlikee, setValue] = useState(0);
  const like = () => {
    if (likee === 0) {
      if (unlikee === 0) {
        setCounter(counter + 1);
        setvalue(likee + 1);
      } else {
        setCounte(counte - 1);
        setValue(unlikee - 1);
        setvalue(likee + 1);
      }
    } else {
      setCounter(counter - 1);
      setvalue(likee - 1);
    }
  };

  const unlike = () => {
    if (unlikee === 0) {
      if (likee === 0) {
        setCounte(counte + 1);
        setvalue(likee + 1);
      } else {
        setCounter(counter - 1);
        setCounte(counte + 1);
        setValue(likee - 1);
        setvalue(likee + 1);
      }
    } else {
      setCounter(counte - 1);
      setvalue(unlikee - 1);
    }
  };

  return (
    <>
      <div className={style.header}>
        {/* <FireflyCanvas/> */}
        <div className={style.iframeTag}>
          <iframe
            src={props.link}
            title="abc"
            display="initial"
            position="relative"
            allowFullScreen
          />

          <div className={style.icon}>
            {/* <img src="Icon\man.png" className={style.avtar} />
            <h2 className={style.namee}>{props.name}</h2>
            <button
              onClick={like}
              className={style.lik}
              style={{
                verticalAlign: "middle",
                display: "flex",
                alignItem: "center",
              }}
            >
              {" "}
              <img
                src="\Icon\icons8-facebook-like-64.png"
                alt=""
                className={style.like}
              />
              <span className={style.tooltiptext}>I like this</span>
              {counter}
            </button>
            <button
              onClick={unlike}
              className={style.dlik}
              style={{
                verticalAlign: "middle",
                display: "flex",
                alignItems: "center",
              }}
            >
              {" "}
              <img
                src="\Icon\icons8-thumbs-down-64.png"
                alt=""
                className={style.dislike}
              />
              <span className={style.tltiptext}>I dislike this</span>
              {counte}
            </button> */}
            {/* <Button flex='1' variant='ghost' leftIcon={<BiShare />} onClick={onOpen}>
      Share
    </Button> */}

            <Flex spacing='6'>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        

      
    <Avatar to="ai" name='Segun Adebayo' src='https://bit.ly/sage-adebayo' className={style.avatar} color={'black'}/>
    <Text flex={1} alignItems={'center'} display={'flex'}>{props.name}</Text>
    <Button flex='1' variant='ghost' leftIcon={<BiLike />} color={'black'} onClick={like} className={style.like}>
      Like {counter}
    </Button>
    <Button flex='1' variant='ghost' leftIcon={<BiShare /> } color={'black'} onClick={onOpen}>
      Share
    </Button>

<Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
   <ModalOverlay /> 
  <ModalContent>
    <ModalHeader>Share</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
    <FormControl pb={6} mt={4} flex='1'>
        <HStack>
<CopyIcon boxSize={6} color="gray.500" />
 <FormLabel>CopyLink</FormLabel>
<ChatIcon boxSize={6} color="blue.500" />
<FormLabel>Message</FormLabel>
<BellIcon boxSize={6}  color="yellow.500"/>
<FormLabel>SnapChat</FormLabel></HStack>
{/* <BiLogoWhatsapp boxSize={6}  color="green.500" mt={4}  pb={6}/>
<FormLabel>WhataApp</FormLabel> */}

     </FormControl>

    </ModalBody>

    <ModalFooter>
      <Button colorScheme='blue' mr={3} onClick={onClose}>
        Cancel
      </Button>
    </ModalFooter>
  </ModalContent>
</Modal>


    <Button flex='1' variant='ghost' leftIcon={<BiDislike />} color={'black'} onClick={unlike}>
      Dislike {counte}
    </Button>
    </Flex>
    </Flex>
    </div>

    <div className={style.new}>
    <div className={style.new_container}>
    <div  className={style.descreption} style={{ marginRight:'1rem'}}>
    <Card align='center'>
  <CardHeader>
    <Heading size='xl'> Game Descreption </Heading>
  </CardHeader>
  <CardBody>
    <Text>If YOU want to see any about the game u can see from here </Text>
  </CardBody>
  <CardFooter>
    <Button colorScheme='blue'>View here</Button>
  </CardFooter>
</Card>
    </div>
    <div className={style.descreption}style={{ marginLeft:'1rem'}} >
<Card align='center'  >
  <CardHeader>
  <Heading size='xl'>YOUR REVIEW </Heading>
  </CardHeader>
  <CardBody>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder='write here '
        size='l'
        width='500px'
        marginLeft='10px'
        marginRight='10px'
        >
      </Textarea>
  </CardBody>
  <CardFooter justifyContent={'center'}>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue' onclick={submited}>
        Submit
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</div> 
        </div>
        </div>
        </div>

        <div className={style.review}>
          <div className={style.heading}>
            <h1>Rating and Reviews</h1>
          </div>
          <div className={style.rev_container}>
          <GamingReview/>
          <GamingReview/>
          <GamingReview/>
          <GamingReview/> 
          </div>
        </div>
      </div>
    </>
  );
}
export default GamingPage;
