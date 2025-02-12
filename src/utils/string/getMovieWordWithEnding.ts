export const getMovieWordWithEnding = (count: number) => {
	switch (count) {
		case 1:
		case 21:
			return `${count} фильм`
		case 2:
		case 3:
		case 4:
		case 22:
		case 23:
		case 24:
			return `${count} фильма`
		default:
			return `${count} фильмов`
	}
}
