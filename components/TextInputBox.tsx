import { Box, Flex, Input, Button, Stack, Center } from "@chakra-ui/react";
import { useClipboard } from "@chakra-ui/react";
import { useState } from "react";
import { parseText } from "../utils/parseText";
export const TextInputBox = () => {
  const [inputText, setInputText] = useState("");
  const [linesAmmount, setLinesAmmount] = useState(0);
  const { onCopy, value, setValue, hasCopied } = useClipboard("");
  const handleParse = () => {
    const parsedText = parseText(inputText, linesAmmount);
    setValue(parsedText);
  };

  return (
    <Center h="100vh" w="100vw">
      <Box
        alignItems="center"
        justifyContent="center"
        width="700px"
        height="600px"
        bgColor={"gray.100"}
        borderRadius="lg"
        boxShadow="lg"
        p={4}
      >
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          width="100%"
          height="100%"
          gridColumn={3}
          gap={4}
        >
          <Stack h={"100%"} w={"100%"}>
            <Input
              placeholder="How many lines do you want?"
              value={linesAmmount > 0 ? linesAmmount : ""}
              onChange={(e) => setLinesAmmount(parseInt(e.target.value))}
              width="100%"
              height="10%"
              gridColumn={3}
              bgColor={"white"}
              type="number"
            />
            <Input
              placeholder="Paste your text here"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              width="100%"
              height="90%"
              bgColor={"white"}
            />
          </Stack>
          <Button onClick={handleParse} variant="solid" colorScheme="teal">
            Parse
          </Button>
          <Stack h={"100%"} w={"100%"}>
            {/* <Button onClick={onCopy} variant="solid" colorScheme="teal">
              {hasCopied ? "Copied" : "Copy"}
            </Button> */}
            <Input
              placeholder="Your parsed text will appear here"
              value={value}
              width="100%"
              height="100%"
              bgColor={"white"}
              wordBreak="break-all"
              overflowWrap={"break-word"}
            />
          </Stack>
        </Flex>
      </Box>
    </Center>
  );
};
