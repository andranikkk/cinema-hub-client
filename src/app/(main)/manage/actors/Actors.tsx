'use client'

import AdminHeader from '@/components/ui/admin/admin-table/admin-header/AdminHeader'
import AdminList from '@/components/ui/admin/admin-table/admin-list/AdminList'
import Heading from '@/components/ui/heading/Heading'

import { useAdminActors } from './useAdminActors'

const Actors: React.FC = () => {
	const {
		handleSearch,
		isLoading,
		actors,
		searchTerm,
		deleteAsync,
		createAsync
	} = useAdminActors()

	return (
		<div className='px-6'>
			<Heading>Жанры</Heading>

			<AdminHeader
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				onClick={createAsync}
			/>

			<AdminList
				listItems={actors || []}
				headerItems={['Имя', 'Ссылка', 'Количество фильмов']}
				isLoading={isLoading}
				removeHandler={deleteAsync}
			/>
		</div>
	)
}

export default Actors
