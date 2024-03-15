import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import services from '../../services/services'

const CatFact: FC = () => {
	const { status, data, refetch } = useQuery({
		queryKey: ['catFact'],
		queryFn: services.fetchCatFact,
		refetchOnWindowFocus: false,
		enabled: false
	})

	const getFact = () => {
		refetch()
	}
	return (
		<div className='flex gap-4 mb-4'>
			<button
				className='bg-blue-600 w-[200px] py-3 rounded-xl text-lg transition-all hover:bg-blue-700'
				onClick={getFact}
			>
				Получить факт
			</button>
			<input
				className='bg-transparent text-white rounded-md px-3 w-[400px] border-blue-500 border focus:border-blue-500 '
				type='text'
				value={status === 'success' ? data : ''}
				readOnly
			/>
		</div>
	)
}

export default CatFact
