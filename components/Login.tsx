import { ChatIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Stack } from '@chakra-ui/react'
import { NextPage } from 'next'
import Head from 'next/head'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { auth } from '../firebase.config'

const Login: NextPage = () => {
	const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)

	return (
		<>
			<Head>
				<title>Login</title>
			</Head>

			<Center h='100vh'>
				<Stack
					align='center'
					bgColor='gray.300'
					p={16}
					rounded='3xl'
					spacing={12}
					boxShadow='lg'
				>
					<Box
						bgGradient='linear(to-r, #7928CA, #FF0080)'
						w='fit-content'
						p={5}
						rounded='3xl'
						boxShadow='md'
					>
						<ChatIcon w='100px' h='100px' color='white' />
					</Box>

					<Button
						onClick={() => signInWithGoogle([], { prompt: 'select_account' })}
						bgColor='gray.100'
						boxShadow='md'
					>
						Sign In With Google
					</Button>
				</Stack>
			</Center>
		</>
	)
}

export default Login
