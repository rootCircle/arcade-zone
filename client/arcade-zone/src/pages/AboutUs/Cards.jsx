// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Stack,
//   Heading,
//   Button,
//   Image,
//   Text,
// } from "@chakra-ui/react";
// import React from "react";
import styles from "../../css/Cards.module.css";

// function Cards() {
//   return (
//     <>
//       <div className={styles.bg}>
//         <div className={styles.Card2}>
//           <Card
//             className={styles.NeonCard}
//             direction={{ base: "column", sm: "row" }}
//             overflow="hidden"
//             variant="outline"
//             margin={4}
//             maxW={{ base: "100%", sm: "60rem" }}
//             padding={8}
//           >
//             <Stack>
//               <CardBody>
//                 <Heading size="xl" className={styles.NeonText}>
//                   About Us
//                 </Heading>

//                 <Text py="2" fontSize="lg" className={styles.NeonText}>
//                   A place where you can find multiple arcade games to play
//                   online and set new highscores
//                 </Text>
//               </CardBody>

//               <CardFooter></CardFooter>
//             </Stack>
//             <Image
//               objectFit="cover"
//               maxW={{ base: "100%", sm: "200px" }}
//               src="https://marketplace.canva.com/EAE93oDu61A/1/0/1600w/canva-purple-blue-neon-gaming-desktop-wallpaper-PWYZmwkPtUg.jpg"
//               alt="Caffe Latte"
//             />
//           </Card>
//         </div>

//         <div className={styles.Card1}>
//           <Card
//             direction={{ base: "column", sm: "row" }}
//             overflow="hidden"
//             variant="outline"
//             margin={4}
//             maxW={{ base: "100%", sm: "60rem" }}
//             padding={8}
//           >
//             <Image
//               objectFit="cover"
//               maxW={{ base: "100%", sm: "200px" }}
//               src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
//               alt="Caffe Latte"
//             />

//             <Stack>
//               <CardBody>
//                 <Heading size="xl">We Believe In</Heading>

//                 <Text py="2" fontSize="lg">
//                   The power of entertainment. How its wonders can make you smile
//                   and widen your eyes.
//                 </Text>
//               </CardBody>

//               <CardFooter></CardFooter>
//             </Stack>
//           </Card>
//         </div>

//         <div className={styles.Card2}>
//           <Card
//             direction={{ base: "column", sm: "row" }}
//             overflow="hidden"
//             variant="outline"
//             margin={4}
//             maxW={{ base: "100%", sm: "60rem" }}
//             padding={8}
//           >
//             <Stack>
//               <CardBody>
//                 <Heading size="xl">We Believe That</Heading>

//                 <Text py="2" fontSize="lg">
//                   Games can let you do extraordinary things. They bring you this
//                   pure moment of escapism that just makes you happy.
//                 </Text>
//               </CardBody>

//               <CardFooter></CardFooter>
//             </Stack>
//             <Image
//               objectFit="cover"
//               maxW={{ base: "100%", sm: "200px" }}
//               src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
//               alt="Caffe Latte"
//             />
//           </Card>
//         </div>

//         <div className={styles.Card1}>
//           <Card
//             direction={{ base: "column", sm: "row" }}
//             overflow="hidden"
//             variant="outline"
//             margin={4}
//             maxW={{ base: "100%", sm: "60rem" }}
//             padding={8}
//           >
//             <Image
//               objectFit="cover"
//               maxW={{ base: "100%", sm: "200px" }}
//               src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
//               alt="Caffe Latte"
//             />

//             <Stack>
//               <CardBody>
//                 <Heading size="xl">We Believe That</Heading>

//                 <Text py="2" fontSize="lg">
//                   Everyone should be able to enjoy games. Wherever you are,
//                   whenever you want, whatever you like.
//                 </Text>
//               </CardBody>

//               <CardFooter></CardFooter>
//             </Stack>
//           </Card>
//         </div>
//         <div className={styles.Card2}>
//           <Card
//             direction={{ base: "column", sm: "row" }}
//             overflow="hidden"
//             variant="outline"
//             margin={4}
//             maxW={{ base: "100%", sm: "60rem" }}
//             padding={8}
//           >
//             <Stack>
//               <CardBody>
//                 <Heading size="xl">Our Main Goal</Heading>

//                 <Text py="2" fontSize="lg">
//                   Is to make user happy and enjoy time in our website by setting
//                   new highscores and Explore new Games
//                 </Text>
//               </CardBody>

//               <CardFooter></CardFooter>
//             </Stack>
//             <Image
//               objectFit="cover"
//               maxW={{ base: "100%", sm: "200px" }}
//               src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
//               alt="Caffe Latte"
//             />
//           </Card>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Cards;

import React from "react";

function Cards() {
  return (
    <div className={styles["main-container"]}>
      <div></div>
      <div className={`${styles["main1"]} flex justify-center items-center`}>
        <div
          className={`${styles["flex1"]} flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 max-w-3xl md:flex-row px-8 py-6`}
        >
          <img
            className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://marketplace.canva.com/EAE93oDu61A/1/0/1600w/canva-purple-blue-neon-gaming-desktop-wallpaper-PWYZmwkPtUg.jpg"
            alt=""
          />
          <div className="flex flex-col justify-start p-6">
            <h5
              className={`${styles["neontext1"]} mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50`}
            >
              Card title
            </h5>
            <p className={`${styles["neontext1"]} mb-4 text-base `}>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>

      <div className={`${styles["main2"]} flex justify-center items-center`}>
        <div
          className={`${styles["flex2"]} flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 max-w-3xl md:flex-row px-8 py-6`}
        >
          <img
            className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://img.freepik.com/premium-photo/gaming-desktop-pc-computer-setup-gamer-illustration_691560-5765.jpg"
            alt=""
          />
          <div className="flex flex-col justify-start p-6">
            <h5
              className={`${styles["neontext2"]} mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50`}
            >
              Card title
            </h5>
            <p className={`${styles["neontext2"]} mb-4 text-base `}>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>

      <div className={`${styles["main1"]} flex justify-center items-center`}>
        <div
          className={`${styles["flex3"]} flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 max-w-3xl md:flex-row px-8 py-6`}
        >
          <img
            className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://img.freepik.com/premium-photo/gaming-desktop-pc-computer-setup-gamer-illustration_691560-5795.jpg?w=2000"
            alt=""
          />
          <div className="flex flex-col justify-start p-6">
            <h5
              className={`${styles["neontext3"]} mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50`}
            >
              Card title
            </h5>
            <p className={`${styles["neontext3"]} mb-4 text-base `}>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>

      <div className={`${styles["main2"]} flex justify-center items-center`}>
        <div
          className={`${styles["flex4"]} flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 max-w-3xl md:flex-row px-8 py-6`}
        >
          <img
            className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://wallpaperaccess.com/full/4161698.jpg"
            alt=""
          />
          <div className="flex flex-col justify-start p-6">
            <h5
              className={`${styles["neontext4"]} mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50`}
            >
              Card title
            </h5>
            <p className={`${styles["neontext4"]} mb-4 text-base `}>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
