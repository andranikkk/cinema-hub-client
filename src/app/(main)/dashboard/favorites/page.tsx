import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import Favorites from './Favorites'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Избранное',
	...NO_INDEX_PAGE
}

export default function FavoritesPage() {
	return <Favorites />
}
