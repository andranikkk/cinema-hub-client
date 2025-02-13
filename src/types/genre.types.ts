import { TypeIconName } from '@/components/ui/Icon'

import { IMovie } from './movie.types'

export interface IGenre {
	id: string
	name: string
	slug: string
	description: string
	icon: TypeIconName
	movies: IMovie[]
}

export interface IGenreEditInput extends Omit<IGenre, 'id'> {}
