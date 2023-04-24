import Head from "next/head";
import {
  Box,
  Center,
  Container,
  Divider,
  Heading,
  Image,
  Link,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";



export default function Home() {
  return (
    <>
      <Container maxW="container.md" py={10}>
        <Heading as="h1" size="xl" textAlign="center" mb={6}>
          Welcome to seitamuro blog!
          <Box>
            <Center>
              <Image src="/seitamuro.svg" h="100" w="100" alt="seitamuro" borderRadius="full" boxShadow="outline" />
            </Center>
          </Box>
        </Heading>
        <VStack spacing={6} align="start">
          <Box>
            <Heading as="h2" size="lg" mb={2}>
              About
            </Heading>
            <Text>このページではこれまでに作成したものや技術検証のために作成したものを展示しています。</Text>
          </Box>
          <Divider />
          <Box>
            <Heading as="h2" size="lg" mb={2}>
              作ったもの
            </Heading>
            <UnorderedList spacing={2}>
              <ListItem>
                <Link
                  href="https://chrome.google.com/webstore/detail/cliproach/icbaojdekddkoigpidooabchlgffedmf?hl=ja"
                  isExternal
                >
                  ClipRoach
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://smore.vercel.app/" isExternal>
                  S&apos;more
                </Link>
              </ListItem>
            </UnorderedList>
          </Box>
          <Divider />
          <Box>
            <Heading as="h2" size="lg" mb={2}>
              Links
            </Heading>
            <UnorderedList spacing={2}>
              <ListItem>
                <Link href="https://twitter.com/vimmerseita" isExternal>
                  Twitter
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://github.com/seitamuro" isExternal>
                  GitHub
                </Link>
              </ListItem>
            </UnorderedList>
          </Box>
        </VStack>
      </Container>
    </>
  );
}
