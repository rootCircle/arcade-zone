import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import Error404 from '../../pages/Error404/Error404'
const NoResultFound = () => {
    return (
        <Box textAlign="center" py={10} px={6} h={'65vh'} margin={'auto'}>
            <Box display="inline-block">
                <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    bg={'red.500'}
                    rounded={'50px'}
                    w={'55px'}
                    h={'55px'}
                    textAlign="center">
                    <CloseIcon boxSize={'20px'} color={'white'} />
                </Flex>
            </Box>
            <Heading as="h2" size="xl" mt={6} mb={2}>
                No Results found!
            </Heading>
            <Text color={'gray.500'} maxW={'70vw'}>
                Oops! It seems we couldn't find what you were searching for in our vast gaming universe. But don't worry, because just like a
                hidden treasure chest, the perfect game may be waiting to be discovered elsewhere. <br/> Take a moment to explore other realms of
                gaming possibilities and embark on a quest to find your next epic adventure. Remember, the gaming world is full of surprises,
                and your ideal game might be just around the corner. Keep that gamer spirit alive and happy hunting!
            </Text>
        </Box>
    );
}

export default NoResultFound


