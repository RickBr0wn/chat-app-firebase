import { Center, ChakraProvider, Spinner, Text } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { useAuthState } from 'react-firebase-hooks/auth'
import Login from '../components/Login'
import { auth } from '../firebase.config'

function MyApp({ Component, pageProps }: AppProps) {
	const [user, loading, error] = useAuthState(auth)

	if (loading)
		return (
			<ChakraProvider>
				<Center h={'100vh'}>
					<Spinner size='xl' />
				</Center>
			</ChakraProvider>
		)

	if (!user)
		return (
			<ChakraProvider>
				<Login />
			</ChakraProvider>
		)

	if (error)
		return (
			<ChakraProvider>
				<Center h={'100vh'}>
					<Text>{error.message}</Text>
				</Center>
			</ChakraProvider>
		)

	return (
		<ChakraProvider>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default MyApp
