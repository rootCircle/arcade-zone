import React from 'react';
import {
    Box,
    Heading,
    Link,
    Image,
    Text,
    Divider,
    HStack,
    Tag,
    Wrap,
    WrapItem,
    useColorModeValue,
    Container,
    VStack,
} from '@chakra-ui/react';

const BlogTags = (props) => {
    return (
        <HStack spacing={2} marginTop={props.marginTop}>
            {props.tags.map((tag) => {
                return (
                    <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
                        {tag}
                    </Tag>
                );
            })}
        </HStack>
    );
};



export const BlogAuthor = (props) => {
    return (
        <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
            <Image
                borderRadius="full"
                boxSize="40px"
                src="https://github.com/rootcircle.png"
                alt={`Avatar of ${props.name}`}
            />
            <Text fontWeight="medium">{props.name}</Text>
            <Text>—</Text>
            <Text>{props.date.toLocaleDateString()}</Text>
        </HStack>
    );
};

const BlogCard = (props) => {

    return (
        <>
            <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
                <Box w="100%">
                    <Box borderRadius="lg" overflow="hidden">
                        <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                            <Image
                                transform="scale(1.0)"
                                src={props.imageURL}
                                alt="some text"
                                objectFit="contain"
                                width="100%"
                                transition="0.3s ease-in-out"
                                _hover={{
                                    transform: 'scale(1.05)',
                                }}
                            />
                        </Link>
                    </Box>
                    <BlogTags tags={[...props.conTags]} marginTop="3" />
                    <Heading fontSize="xl" marginTop="2">
                        <Link textDecoration="none" isExternal href={props.href} _hover={{ textDecoration: 'none' }}>
                            {props.title}
                        </Link>
                    </Heading>
                    <Text as="p" fontSize="md" marginTop="2">
                        {props.content}
                    </Text>
                    <BlogAuthor
                        name={props.author}
                        date={new Date(props.creationTime)}
                    />
                </Box>



            </WrapItem>
        </>
    );
};

const ArticleList = () => {
    return (
        <Container maxW={'7xl'} p="12">
            <Heading as="h1">Stories @ KAMP IV</Heading>
            <Box
                marginTop={{ base: '1', sm: '5' }}
                display="flex"
                flexDirection={{ base: 'column', sm: 'row' }}
                justifyContent="space-between">
                <Box
                    display="flex"
                    flex="1"
                    marginRight="3"
                    position="relative"
                    alignItems="center">
                    <Box
                        width={{ base: '100%', sm: '85%' }}
                        zIndex="2"
                        marginLeft={{ base: '0', sm: '5%' }}
                        marginTop="5%">
                        <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                            <Image
                                borderRadius="lg"
                                src={
                                    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                                }
                                alt="some good alt text"
                                objectFit="contain"
                            />
                        </Link>
                    </Box>
                    <Box zIndex="1" width="100%" position="absolute" height="100%">
                        <Box
                            bgGradient={useColorModeValue(
                                'radial(orange.600 1px, transparent 1px)',
                                'radial(orange.300 1px, transparent 1px)'
                            )}
                            backgroundSize="20px 20px"
                            opacity="0.4"
                            height="100%"
                        />
                    </Box>
                </Box>
                <Box
                    display="flex"
                    flex="1"
                    flexDirection="column"
                    justifyContent="center"
                    marginTop={{ base: '3', sm: '0' }}>
                    <BlogTags tags={['Engineering', 'Product']} />
                    <Heading marginTop="1">
                        <Link textDecoration="none" isExternal href="https://rootcircle.github.io/blog/linux-blog" _hover={{ textDecoration: 'none' }}>
                            Linux Drama
                        </Link>
                    </Heading>
                    <Text
                        as="p"
                        marginTop="2"
                        color={useColorModeValue('gray.700', 'gray.200')}
                        fontSize="lg">
                        If you're new to Linux, this beginner's guide offers a comprehensive
                        introduction to the operating system, covering its key
                        features, basic commands, and practical tips to help you navigate
                        and utilize Linux efficiently.
                    </Text>
                    <BlogAuthor name="rootCircle" date={new Date('2021-04-06T19:01:27Z')} />
                </Box>
            </Box>
            <Heading as="h2" marginTop="5">
                Latest articles
            </Heading>
            <Divider marginTop="5" />
            <Wrap spacing="30px" marginTop="5">
                <BlogCard
                    imageURL="https://media.geeksforgeeks.org/wp-content/uploads/s2-1.jpg"
                    title="Linux"
                    content="If you're new to Linux, this beginner's guide offers a comprehensive
                             introduction to the operating system, covering its key
                             features, basic commands, and practical tips to help you navigate
                             and utilize Linux efficiently."
                    author="rootCircle"
                    creationTime="2021-04-06T19:01:27Z"
                    conTags={["engineer", "linux"]}
                    href="https://rootcircle.github.io/blog/linux-blog"
                />

                <BlogCard
                    imageURL="https://www.askbayou.com/wp-content/uploads/2021/05/1492055085222032603.jpg"
                    title="Tweaks"
                    content="Some useful Tweaks that might change your life. 
                            Based on multi year experience developers' experience."
                    author="rootCircle"
                    creationTime="2021-04-06T19:01:27Z"
                    conTags={["engineer", "tweak", "linux"]}
                    href="https://rootcircle.github.io/blog/linux-blog/tweaks.html"
                />

                <BlogCard
                    imageURL="https://shethink.in/wp-content/uploads/2021/07/react.js-img.png"
                    title="Dark Art of decreasing react-app initialization time"
                    content="Making cra pay its price. Optimizes react init time by over 200%.
                            Discusses workarounds and alternative to cra."
                    author="rootCircle"
                    creationTime="2021-04-06T19:01:27Z"
                    conTags={["engineer", "react"]}
                    href="https://rootcircle.github.io/blog/web-dev/create-react-app-optimize.html"
                />

                <BlogCard
                    imageURL="https://fireship.io/lessons/regex-cheat-sheet-js/img/featured.png"
                    title="Regex 101"
                    content="Regex (regular expressions) is a powerful tool for pattern matching
                             and manipulating text. This beginner's guide introduces you
                            to the basics of regex and helps you get started with using it 
                            effectively in your projects."
                    author="rootCircle"
                    creationTime="2021-04-06T19:01:27Z"
                    conTags={["engineer", "regex"]}
                    href="https://rootcircle.github.io/blog/notes/regex.html"
                />

                <BlogCard
                    imageURL="https://raw.githubusercontent.com/GeneKao/programming-notes/master/git/img/git-1-1.bmp"
                    title="git for beginners"
                    content="If you're new to Git, this beginner's guide will help 
                            understand the basics of version control and how to get started with
                            Git for managing your code."
                    author="rootCircle"
                    creationTime="2021-04-06T19:01:27Z"
                    conTags={["engineer", "git"]}
                    href="https://rootcircle.github.io/blog/notes/git.html"
                />



            </Wrap>
            <VStack paddingTop="5rem" spacing="2" alignItems="flex-start">
                <Heading as="h2">What we write about</Heading>
                <Text as="p" fontSize="lg">
                Teamwork is the cornerstone of success and achievement. When individuals come together, united
                 by a common purpose and shared goals, the possibilities become endless. In a collaborative 
                 environment, strengths are amplified, weaknesses are supported, and diversity of perspectives 
                 leads to innovative solutions.
                </Text>
                <Text as="p" fontSize="lg">
                So, embrace the spirit of collaboration, foster strong relationships, and create an atmosphere
                 that encourages teamwork. By working together, we can achieve extraordinary things and make a 
                 lasting impact in our shared pursuits.
                </Text>
            </VStack>
        </Container>
    );
};

export default ArticleList;
