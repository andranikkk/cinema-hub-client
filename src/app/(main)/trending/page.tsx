import Catalog from '@/components/ui/catalog-movies/Catalog'

import { movieService } from '@/services/movie.service'

import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Фильмы в тренде'
}

export const revalidate = 60

async function getMovies() {
	const data = await movieService.getMostPopularMovies()
	return data
}

export default async function TrendingPage() {
	const data = await getMovies()

	return (
		<div className='px-6'>
			<Catalog
				title='Фильмы в тренде'
				movies={data}
				description='Смотреть популярные фильмы во всем мире'
			/>
		</div>
	)
}
