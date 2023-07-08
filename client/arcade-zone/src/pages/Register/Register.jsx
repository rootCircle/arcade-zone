import { useState } from "react"
import {
    Tabs,
    TabList,
    TabPanel,
    Tab,
    TabPanels,
} from '@chakra-ui/react';
import RegisterAdmin from './RegisterAdmin'
import RegisterUser from './RegisterUser'

import {
    Flex,
    Box,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Image,
} from '@chakra-ui/react';

import imgBanner from '../../assets/img/signupbanner.png'

export default function Register() {
    const [tabIndex, setTabIndex] = useState(0)

    const handleSliderChange = (event) => {
        setTabIndex(parseInt(event.target.value, 10))
    }

    const handleTabsChange = (index) => {
        setTabIndex(index)
    }

    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}
                p={8} flex={1}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'} textAlign={'center'}>
                            Sign up
                        </Heading>
                        <Text fontSize={'lg'} color={'gray.600'}>
                            to enjoy all of our cool features ✌️
                        </Text>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}
                        >

                        <Box>
                            <Tabs isLazy>
                                <TabList>
                                    <Tab>User</Tab>
                                    <Tab>Admin</Tab>
                                </TabList>
                                <TabPanels padding={4}>
                                    <TabPanel>
                                        <RegisterUser/>
                                    </TabPanel>
                                    <TabPanel>
                                        <RegisterAdmin />
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </Box>

                    </Box>
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={ imgBanner
                    }
                />
            </Flex>
        </Stack>
    );
}


