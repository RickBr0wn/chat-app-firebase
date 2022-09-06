import { ArrowLeftIcon } from '@chakra-ui/icons'
import { Avatar, Button, Flex, IconButton, Text } from '@chakra-ui/react'
import { signOut } from 'firebase/auth'
import { NextPage } from 'next'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase.config'
import ChatItem from './ChatItem'

const Sidebar: NextPage = () => {
	const [user] = useAuthState(auth)

	return (
		<Flex
			h={'100%'}
			w={'300px'}
			borderEnd={'1px solid'}
			borderColor={'gray.200'}
			direction={'column'}
		>
			<Flex
				h={'81'}
				w={'100%'}
				align={'center'}
				justify={'space-between'}
				p={'3'}
				borderBottom={'1px solid'}
				borderColor={'gray.200'}
			>
				<Flex align={'center'}>
					<Avatar src={user?.photoURL || ''} marginEnd={3} />
					<Text>{user?.displayName}</Text>
				</Flex>

				<IconButton
					size={'sm'}
					isRound
					icon={<ArrowLeftIcon />}
					aria-label={''}
					onClick={() => signOut(auth)}
				/>
			</Flex>
			<Button m={5} p={4}>
				New Chat
			</Button>
			<Flex
				overflowX={'scroll'}
				flexDir={'column'}
				sx={{ scrollbarWidth: 'none' }}
				flex={1}
			>
				<ChatItem />
			</Flex>
		</Flex>
	)
}

export default Sidebar
