import Button from '@/components/ui/form-elements/button/Button'
import Heading from '@/components/ui/heading/Heading'

import { DASHBOARD_URL } from '@/config/url.config'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import styles from './Thanks.module.scss'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Спасибо за покупку',
	...NO_INDEX_PAGE
}
const ThanksPage: React.FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.area}>
				<Heading>Успешная покупка</Heading>
				<p>Спасибо за приобретение на нашем сайте.</p>
				<Link href={DASHBOARD_URL.root()}>
					<Button>Перейти в личный кабинет</Button>
				</Link>
			</div>
		</div>
	)
}

export default ThanksPage
