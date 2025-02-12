'use client'

import AdminHeader from '@/components/ui/admin/admin-table/admin-header/AdminHeader'
import AdminList from '@/components/ui/admin/admin-table/admin-list/AdminList'
import Heading from '@/components/ui/heading/Heading'

import { useAdminMovies } from './useAdminMovies'

const Movies: React.FC = () => {
	const {
		handleSearch,
		isLoading,
		movies,
		searchTerm,
		deleteAsync,
		createAsync
	} = useAdminMovies()

	return (
		<div className='px-6'>
			<Heading>Фильмы</Heading>

			<AdminHeader
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				onClick={createAsync}
			/>

			<AdminList
				listItems={movies || []}
				headerItems={['Название', 'Жанры', 'Просмотры']}
				isLoading={isLoading}
				removeHandler={deleteAsync}
			/>
		</div>
	)
}

export default Movies
