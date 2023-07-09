import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CarousalGallery() {
  const [slider, setSlider] = React.useState(null);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const cards = [
    {
      title: "Spider Man",
      text: "“Iam your Friendly Nieghbourhood SPIDER MANNN!!! .” ",
      image:
        "https://th.bing.com/th/id/R.3ebef58e3dd9a41360bbda3729c2ec02?rik=0f2%2fYhIMaSdmvQ&riu=http%3a%2f%2fhdqwalls.com%2fwallpapers%2fspiderman-4k-ps4-in.jpg&ehk=HWa3a8j6uqCCYUdVgFFjGOh5I3AIQdaCCxCrf8rM3r8%3d&risl=&pid=ImgRaw&r=0",
      color: "#6527BE",
    },
    {
      title: "BGMI",
      text: "“Its not about killing, its about Surviving”",
      image:
        "https://wallpapercave.com/wp/wp7421762.jpg",
      color: "#30A2FF",
    },
    {
      title: "League Of Legends",
      text: "“Keep friends close and enemies guessing.”",
      image:
        "https://c.wallhere.com/photos/23/31/League_of_Legends_video_games-259648.jpg!d",
      color: "#1A202C",
    },
    {
      title: "Animal Crossing",
      text: "“Don’t wish it were easier, wish you were better.” ",
      image:
        "https://i.pinimg.com/564x/e2/96/c4/e296c468f1cd6df82172e0bff06ece0a.jpg",
      color: "#11009E",
    },
    {
      title: "Valorant",
      text: "“Nothing stays hidden from me. Nothing.”",
      image:
        "https://i.pinimg.com/originals/32/24/10/322410b9cfa3f5a95b22375d3933f9f9.jpg",
      color: "#F5F5F5",
    },
    {
      title: "GTA V",
      text: "“Hypocrisy, civilization's greatest virtue.”",
      image: "https://i.ytimg.com/vi/mFdxVBgrAJw/maxresdefault.jpg",
      color: "#F2BE22",
    },
    {
      title: "Resisdent Evil",
      text: "“One cannot conquer the evil in himself by resisting it ... but by transmuting its energies into other forms.” ",
      image:
        "https://c4.wallpaperflare.com/wallpaper/780/420/942/resident-evil-8-village-resident-evil-video-games-chris-redfield-artwork-hd-wallpaper-preview.jpg",
      color: "#F97B22",
      
    },
    {
      title: "GOD of WAR",
      text: "“Don’t be sorry, be better.” ",
      image:
        "https://cutewallpaper.org/23/medieval-wallpaper-4k/556928712.jpg",
      color: "#00DFA2",
    },

    {
      title: "Counter Strike",
      text: "“Bomb has been planted...!!” ",
      image: "https://1.bp.blogspot.com/-HFFl5lPPe10/XEjjguNbeNI/AAAAAAAABLQ/MYEvgqEXbK0CLTBbUbo8sqHaEK2RJLXmwCKgBGAs/w0/csgo-counter-terrorist-38-4k.jpg",
      color: "#F6F1F1",
    },
    {
      title: "Call of Duty",
      text: "“I dont Have birthdays... I stage up for COD!!!” ",
      image: "https://www.vazgaming.com/wp-content/uploads/2017/10/call-of-duty-wwii-screen-02-ps4-us-26apr17.jpg",
      color: "#4C3D3D",
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"600px"}
      width={"full"}
      overflow={"hidden"}
    >
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="60px" />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="60px" />
      </IconButton>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={"3xl"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              >
                <Heading
                  fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
                  color={card.color}
                >
                  {card.title}
                </Heading>
                <Text fontSize={{ base: "md", lg: "25px" }} color={card.color}>
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
