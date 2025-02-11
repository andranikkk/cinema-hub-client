import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import Actors from './Actors'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Актеры',
	...NO_INDEX_PAGE
}

export default function ActorsPage() {
	return (
		<div>
			<Actors />
		</div>
	)
}
