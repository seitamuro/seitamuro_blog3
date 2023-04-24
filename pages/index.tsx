import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Box, UnorderedList, ListItem, Link } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Box>
        Welcome to seitamuro blog!
      </Box>
      <Box>
        このページではこれまでに作成したものや技術検証のために作成したものを展示しています。
      </Box>
      <Box>
        作ったもの
        <UnorderedList>
          <ListItem> <Link href="https://chrome.google.com/webstore/detail/cliproach/icbaojdekddkoigpidooabchlgffedmf?hl=ja">ClipRoach</Link> </ListItem>
          <ListItem> <Link href="https://smore.vercel.app/">S&apos;more</Link></ListItem>
        </UnorderedList>
      </Box>
      <Box>
        Links
        <UnorderedList>
          <ListItem> <Link href="https://twitter.com/vimmerseita">Twitter</Link></ListItem>
          <ListItem> <Link href="https://github.com/seitamuro">GitHub</Link></ListItem>
        </UnorderedList>
      </Box>
    </>
  )
}
