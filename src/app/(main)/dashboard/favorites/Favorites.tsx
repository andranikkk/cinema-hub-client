'use client'

import Catalog from '@/components/ui/catalog-movies/Catalog'

import { useProfile } from '@/hooks/useProfile'

const Favorites: React.FC = () => {
	const { user, isLoading } = useProfile()

	return (
		<div className='px-6'>
			<Catalog
				title='Избранное'
				movies={user?.favorites || []}
				isLoading={isLoading}
			/>
		</div>
	)
}

export default Favorites
