import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { IPageIdParam } from '@/types/page-params.types'

import ActorEdit from './ActorEdit'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Настройка актера',
	...NO_INDEX_PAGE
}

export default function ActorEditPage({ params }: IPageIdParam) {
	return (
		<div>
			<ActorEdit actorId={params.id} />
		</div>
	)
}
