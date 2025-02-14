'use client'

import Banner from '@/components/ui/banner/Banner'
import { IGalleryItem } from '@/components/ui/gallery/gallery.interface'

import { movieService } from '@/services/movie.service'

import { IMovie } from '@/types/movie.types'

import SimilarMovies from './SimilarMovies'
import Content from './content/Content'
import Reviews from './reviews/Reviews'
import { useUpdateCountViews } from './useUpdateCountViews'
import VideoPlayer from './video-player/VideoPlayer'
import { useQuery } from '@tanstack/react-query'

interface IMovieProps {
	initialMovie: IMovie
	similarMovies: IGalleryItem[]
	slug?: string
}
const Movie: React.FC<IMovieProps> = ({
	initialMovie,
	similarMovies,
	slug = ''
}) => {
	const { data: movie } = useQuery({
		queryKey: ['get movie', initialMovie.slug],
		queryFn: () => movieService.getBySlug(slug),
		initialData: initialMovie,
		enabled: !!slug
	})

	useUpdateCountViews(movie.slug)

	return (
		<div>
			<Banner
				image={movie.bigPoster}
				Detail={() => <Content movie={movie} />}
			/>

			<div className='px-6 mb-10'>
				<VideoPlayer videoSource={movie.videoUrl} />

				<SimilarMovies similarMovies={similarMovies} />

				<Reviews movieId={movie.id} reviews={movie.reviews} />
			</div>
		</div>
	)
}

export default Movie
