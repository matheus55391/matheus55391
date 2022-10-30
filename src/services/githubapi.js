import axios from 'axios'

export const listAllRepositories = async () => {
	const response = await axios.get('https://api.github.com/users/matheus55391/repos')
	const data = response.data
	return data
}