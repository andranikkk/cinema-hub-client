import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { IPageIdParam } from '@/types/page-params.types'

import MovieEdit from './MovieEdit'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Настройка фильма',
	...NO_INDEX_PAGE
}

export default function MovieEditPage({ params }: IPageIdParam) {
	return (
		<div>
			<MovieEdit movieId={params.id} />
		</div>
	)
}
