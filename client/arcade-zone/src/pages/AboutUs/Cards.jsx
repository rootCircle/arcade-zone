import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import styles from "../../css/Cards.module.css";

function Cards() {
  return (
    <>
      <div className={styles.bg}>
        <div className={styles.Card2}>
          <Card
            className={styles.NeonCard}
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            margin={4}
            maxW={{ base: "100%", sm: "60rem" }}
            padding={8}
          >
            <Stack>
              <CardBody>
                <Heading size="xl" className={styles.NeonText}>
                  About Us
                </Heading>

                <Text py="2" fontSize="lg" className={styles.NeonText}>
                  A place where you can find multiple arcade games to play
                  online and set new highscores
                </Text>
              </CardBody>

              <CardFooter></CardFooter>
            </Stack>
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src="https://marketplace.canva.com/EAE93oDu61A/1/0/1600w/canva-purple-blue-neon-gaming-desktop-wallpaper-PWYZmwkPtUg.jpg"
              alt="Caffe Latte"
            />
          </Card>
        </div>

        <div className={styles.Card1}>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            margin={4}
            maxW={{ base: "100%", sm: "60rem" }}
            padding={8}
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="Caffe Latte"
            />

            <Stack>
              <CardBody>
                <Heading size="xl">We Believe In</Heading>

                <Text py="2" fontSize="lg">
                  The power of entertainment. How its wonders can make you smile
                  and widen your eyes.
                </Text>
              </CardBody>

              <CardFooter></CardFooter>
            </Stack>
          </Card>
        </div>

        <div className={styles.Card2}>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            margin={4}
            maxW={{ base: "100%", sm: "60rem" }}
            padding={8}
          >
            <Stack>
              <CardBody>
                <Heading size="xl">We Believe That</Heading>

                <Text py="2" fontSize="lg">
                  Games can let you do extraordinary things. They bring you this
                  pure moment of escapism that just makes you happy.
                </Text>
              </CardBody>

              <CardFooter></CardFooter>
            </Stack>
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="Caffe Latte"
            />
          </Card>
        </div>

        <div className={styles.Card1}>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            margin={4}
            maxW={{ base: "100%", sm: "60rem" }}
            padding={8}
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="Caffe Latte"
            />

            <Stack>
              <CardBody>
                <Heading size="xl">We Believe That</Heading>

                <Text py="2" fontSize="lg">
                  Everyone should be able to enjoy games. Wherever you are,
                  whenever you want, whatever you like.
                </Text>
              </CardBody>

              <CardFooter></CardFooter>
            </Stack>
          </Card>
        </div>
        <div className={styles.Card2}>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            margin={4}
            maxW={{ base: "100%", sm: "60rem" }}
            padding={8}
          >
            <Stack>
              <CardBody>
                <Heading size="xl">Our Main Goal</Heading>

                <Text py="2" fontSize="lg">
                  Is to make user happy and enjoy time in our website by setting
                  new highscores and Explore new Games
                </Text>
              </CardBody>

              <CardFooter></CardFooter>
            </Stack>
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="Caffe Latte"
            />
          </Card>
        </div>
      </div>
    </>
  );
}

export default Cards;
