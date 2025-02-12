import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { IPageIdParam } from '@/types/page-params.types'

import UserEdit from './UserEdit'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Настройка пользователя',
	...NO_INDEX_PAGE
}

export default function UserEditPage({ params }: IPageIdParam) {
	return (
		<div>
			<UserEdit userId={params.id} />
		</div>
	)
}
