import { IMovie } from './movie.types'

export interface IActor {
	id: string
	name: string
	slug: string
	photoUrl: string
	movies: IMovie[]
	description?: string
}

export interface IActorEditInput extends Omit<IActor, 'id' | 'movies'> {}
