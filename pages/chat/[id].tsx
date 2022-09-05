import {
	Avatar,
	Button,
	Flex,
	FormControl,
	Heading,
	Input,
	Text
} from '@chakra-ui/react'
import { NextPage } from 'next'
import Sidebar from '../../components/Sidebar'

export const Top: NextPage = () => {
	return (
		<Flex bg={'gray.100'} h={81} w={'100%'} align='center' p={5}>
			<Avatar src='' marginEnd={3} />
			<Heading size={'lg'}>user@gmail.com</Heading>
		</Flex>
	)
}

export const Bottom: NextPage = () => {
	return (
		<FormControl p={3}>
			<Input placeholder='Type a message' />
			<Button>Submit</Button>
		</FormControl>
	)
}

export const Middle: NextPage = () => {
	return <Flex flex={1}></Flex>
}

const Chat: NextPage = () => {
	return (
		<Flex h={'100vh'}>
			<Sidebar />
			<Flex flex={1} direction='column'>
				<Top />
				<Middle />
				<Bottom />
			</Flex>
		</Flex>
	)
}

export default Chat
