import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Flex,
  Input
} from '@chakra-ui/react'

import { useEffect, useState, useRef } from 'react'


function Search({onChange, input, setInput}) {


  return (
    <>
    <Flex flex={1} align={'center'} justify={'center'}>
      <FormControl p={8} width={'70vw'}>
        <FormLabel>Search Game</FormLabel>
        <Input type='text' value={input} onChange={onChange} />
      </FormControl>
      </Flex>
    </>
  )
}

export default Search