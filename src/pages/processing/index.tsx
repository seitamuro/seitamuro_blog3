import { Box, Center } from "@chakra-ui/react";

import FirstSketch from "@/sketch/FirstSketch";

const Processing = () => {
  return (
    <Center>
      <Box minW="100" maxW="100" color="black">
        <FirstSketch height="100" />
      </Box>
    </Center>
  );
};

export default Processing;
