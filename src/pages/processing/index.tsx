import { Box, BoxProps, Center, Grid, Text, VStack } from "@chakra-ui/react";
import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";

import FirstSketch from "@/sketch/FirstSketch";

const MyCard: React.FC<BoxProps> = ({ children, ...rest }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="6" boxShadow="lg" bg="white" {...rest}>
      {children}
    </Box>
  );
};

const Processing = () => {
  const sketches = [
    { title: "1", sketch: <FirstSketch width="100" height="100" />, description: "サンプルです。" },
    { title: "2", sketch: <FirstSketch width="100" height="100" />, description: "サンプルです。" },
    { title: "3", sketch: <FirstSketch width="100" height="100" />, description: "サンプルです。" },
    { title: "4", sketch: <FirstSketch width="100" height="100" />, description: "サンプルです。" },
    { title: "5", sketch: <FirstSketch width="100" height="100" />, description: "サンプルです。" },
  ];
  return (
    <VStack>
      <Text fontSize="2xl" color="gray.700">
        Processingの作品ページ
      </Text>
      <Grid templateColumns="repeat(3, 1fr)" gap="6">
        {sketches.map((d, k) => (
          <MyCard key={k}>
            <VStack>
              <Text fontSize="xl" color="gray.700">
                {d.title}
              </Text>
              {d.sketch}
              <Text>{d.description}</Text>
            </VStack>
          </MyCard>
        ))}
      </Grid>
    </VStack>
  );
};

export default Processing;
