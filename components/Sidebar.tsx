import { ArrowLeftIcon } from '@chakra-ui/icons'
import { Avatar, Button, Flex, IconButton, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import ChatItem from './ChatItem'

const Sidebar: NextPage = () => {
	return (
		<Flex
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
					<Avatar src='' marginEnd={3} />
					<Text>Albert Einstien</Text>
				</Flex>

				<IconButton
					size={'sm'}
					isRound
					icon={<ArrowLeftIcon />}
					aria-label={''}
				/>
			</Flex>
			<Button m={5} p={4}>
				New Chat
			</Button>
			<Flex
				overflowX={'scroll'}
				flexDir={'column'}
				sx={{ scrollbarWidth: 'none' }}
			>
				<ChatItem />
			</Flex>
		</Flex>
	)
}

export default Sidebar
