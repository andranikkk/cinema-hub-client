import { useProfile } from '@/hooks/useProfile'

import { userService } from '../../../../../../services/user.service'
import styles from './FavoriteButton.module.scss'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AiFillHeart } from 'react-icons/ai'

interface IFavoriteItem {
	movieId: string
}

const FavoriteButton: React.FC<IFavoriteItem> = ({ movieId }) => {
	const { user } = useProfile()

	const queryClient = useQueryClient()

	const { mutate, isPending } = useMutation({
		mutationKey: ['toggle favorite'],
		mutationFn: () => userService.toggleFavorite(movieId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['profile']
			})
		}
	})

	if (!user) return null

	const isExists = user.favorites.some(favorite => favorite.id === movieId)

	return (
		<button
			className={styles.button}
			disabled={isPending}
			onClick={() => mutate()}
		>
			{isExists ? (
				<AiFillHeart color='red' size={33} />
			) : (
				<AiFillHeart size={33} opacity={0.7} />
			)}
		</button>
	)
}

export default FavoriteButton
