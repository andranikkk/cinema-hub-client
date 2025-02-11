import { ADMIN_URL, PUBLIC_URL } from '@/config/url.config'

import { useDebounce } from '@/hooks/useDebounce'

import { actorService } from '@/services/actor.service'

import { IListItem } from '../../../../components/ui/admin/admin-table/admin-list/admin-list.interface'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useMemo, useState } from 'react'
import toast from 'react-hot-toast'

export const useAdminActors = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debounceSearch = useDebounce(searchTerm, 500)

	const queryClient = useQueryClient()

	const { isLoading, data: actors } = useQuery({
		queryKey: ['get actors for admin dashboard', debounceSearch],
		queryFn: () => actorService.getAll(debounceSearch),
		select: data =>
			data.map(
				(actor): IListItem => ({
					id: actor.id,
					viewUrl: PUBLIC_URL.actor(actor.slug),
					editUrl: ADMIN_URL.actorEdit(actor.id),
					items: [actor.name, actor.slug, String(actor.movies.length)]
				})
			)
	})

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { push } = useRouter()

	const { mutateAsync: deleteAsync } = useMutation({
		mutationKey: ['delete actor'],
		mutationFn: (actorId: string) => actorService.delete(actorId),
		onSuccess() {
			toast.success('Актер удален')
			queryClient.invalidateQueries({
				queryKey: ['get actors for admin dashboard']
			})
		},
		onError() {
			toast.error('Произошла ошибка при удалении актера')
		}
	})

	const { mutateAsync: createAsync } = useMutation({
		mutationKey: ['create actor'],
		mutationFn: () => actorService.create(),
		onSuccess({ data: id }) {
			toast.success('Актер добавлен')
			push(ADMIN_URL.actorEdit(id))
			queryClient.invalidateQueries({
				queryKey: ['get actors for admin dashboard']
			})
		},
		onError() {
			toast.error('Произошла ошибка при добавлении актера')
		}
	})

	return useMemo(
		() => ({
			handleSearch,
			isLoading,
			actors,
			searchTerm,
			deleteAsync,
			createAsync
		}),
		[handleSearch, isLoading, actors, searchTerm, deleteAsync, createAsync]
	)
}
