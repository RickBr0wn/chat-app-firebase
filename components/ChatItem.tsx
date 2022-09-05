import { Avatar, Flex, Text } from '@chakra-ui/react'
import { NextPage } from 'next/types'

const ChatItem: NextPage = () => {
	return (
		<Flex p={3} align={'center'} _hover={{ bg: 'gray.100', cursor: 'pointer' }}>
			<Avatar src={''} marginEnd={3} />
			<Text>user@gmail.com</Text>
		</Flex>
	)
}

export default ChatItem
