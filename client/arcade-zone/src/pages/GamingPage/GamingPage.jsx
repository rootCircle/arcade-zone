import React, { useState, useEffect } from "react";
import GamingReview from "./GamingReview";
import GamingCardReview from "./GamingCardReview";
import GamingTextArea from "./GamingTextArea";
import GamingDescription from "./GamingDescription";
import style from "../../css/GamingPage.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { CopyIcon, ChatIcon, BellIcon } from "@chakra-ui/icons";
import {
  Flex,
  Avatar,
  Button,
  Text,
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
  FormControl,
  FormLabel,
  HStack,

} from "@chakra-ui/react";
import {
  BiLike,
  BiChat,
  BiShare,
  BiDislike,
  BiLogoWhatsapp,
} from "react-icons/bi";
import {} from "react-icons/io5";
import { color } from "framer-motion";

function GamingPage(props) {

  const notify = () => {
    toast("Hello gamers");
  };
  const submited = () => {
    console.log(
      toast.success(
        "successful",
        { autoClose: 3000 },
        { position: toast.POSITION.BOTTOM_RIGHT }
      )
    );
  };

  const [value, setValu] = useState("");

  const handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValu(inputValue);
  };
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
        <div className={style.iframeTag}>
          <iframe
            src={props.link}
            title="abc"
            display="initial"
            position="relative"
            allowFullScreen
          />

          <div className={style.icon}>
            <Flex spacing="6">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar
                  to="ai"
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                  className={style.avatar}
                  color={"black"}
                />
                <Text flex={1} alignItems={"center"} display={"flex"} >

                  <span style={{whiteSpace:"nowrap" , fontWeight:"bolder"}}>
                    {props.name}
                  </span>
                </Text>
                <Button
                  flex="1"
                  variant="ghost"
                  leftIcon={<BiLike />}
                  color={"black"}
                  onClick={like}
                  className={style.like}
                >
                  Like {counter}
                </Button>
                <Button
                  flex="1"
                  variant="ghost"
                  leftIcon={<BiShare />}
                  color={"black"}
                  onClick={onOpen}
                >
                  Share
                </Button>

                <Modal
                  blockScrollOnMount={false}
                  isOpen={isOpen}
                  onClose={onClose}
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Share</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <FormControl pb={6} mt={4} flex="1">
                        <HStack>
                        <Button><CopyIcon boxSize={6} color="gray.500" /></Button>
                          <FormLabel>CopyLink</FormLabel>
                          <Button><ChatIcon boxSize={6} color="blue.500" /></Button>
                          <FormLabel>Message</FormLabel>
                          <Button><BellIcon boxSize={6} color="yellow.500" /></Button>
                          <FormLabel>SnapChat</FormLabel>
                        </HStack>

                      </FormControl>
                    </ModalBody>

                    <ModalFooter>
                      <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Cancel
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>

                <Button
                  flex="1"
                  variant="ghost"
                  leftIcon={<BiDislike />}
                  color={"black"}
                  onClick={unlike}
                >
                  Dislike {counte}
                </Button>
              </Flex>
            </Flex>
          </div>

          <div className={style.new}>
            <div className={style.new_container}>
              <div
                className={style.descreption}
                style={{ marginRight: "1rem" }}
              >
                <GamingDescription/>
              </div>
              <div className={style.descreption} style={{ marginLeft: "1rem" }}>
                <GamingTextArea />
              </div>
            </div>
          </div>
        </div>

        <div className={style.review}>
          <div className={style.heading}>
            <h1>Rating and Reviews</h1>
          </div>
          <div className={style.rev_container}>
            <GamingCardReview imageURL={'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'} name='Lindsey James' reviewText={' like this game a lot. It is very fun and addicting. I like that when you do a challenge, you get a cool new skin. Also that all of the challenges are very well thought up. If you want something easy you have it, and if you want something hard you have it.'}/>
            <GamingCardReview imageURL={'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg'} name='Jake Paul' reviewText={'*There are so many ads on this game that I can’t click touch to continue, If you completely got rid of ads this game just might be way better. **Another thing eliminating yourself!'}/>
            <GamingCardReview imageURL={'https://image.cnbcfm.com/api/v1/image/107228941-1682027700192-_DSC5658.jpg?v=1682427601&w=1920&h=1080'} name='Ram Charan' reviewText={'The game is fun I will not lie but you don’t even update it. I have played some of you games before and I did like them a bit but a main problem is you don’t really update them and just make a new game with a bunch of ads.'}/>
            <GamingCardReview imageURL={'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/27/08/jennifer-lawrence.jpg'} name='Jennifer Lawrence' reviewText={' This game is simple, and addictive, and can be a fast play, or extended out if you are slow and methodical in your acquisition of territory.'}/>
          </div>

          <br/>
          <br/>
          <br/>
        </div>
      </div>
    </>
  );
}
export default GamingPage;
