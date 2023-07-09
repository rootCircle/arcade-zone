import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Flex,
  Input,
  InputGroup,
  InputLeftElement
} from "@chakra-ui/react";

import { useEffect, useState, useRef } from "react";
import { Search2Icon } from "@chakra-ui/icons";

function Search({ onChange, input, setInput }) {
  return (
    <>
      <Flex flex={1} align="center" justify="center">
        <FormControl p={8} width="70vw">
          <FormLabel fontSize={"30px"} fontWeight={"bolder"}>Search Game</FormLabel>
          <InputGroup 

            border = {"2px solid aliceblue"}
            borderRadius={"20px"}
            _hover={{borderRadius: "20px" }}
          >
            <InputLeftElement
              pointerEvents="none"
              children={<Search2Icon color="gray.300" />}
              mt={4}
              fontSize={"25px"}
              marginLeft={"10px"}
            />
            <Input type="text" value={input} onChange={onChange} p={9}  fontSize={"30px"} paddingLeft={"55px"}/>
          </InputGroup>
        </FormControl>
      </Flex>
    </>
  );
}

export default Search;
