import Button from '@/components/ui/form-elements/button/Button'

import { PUBLIC_URL } from '@/config/url.config'

import styles from './PremiumPlaceholder.module.scss'
import Link from 'next/link'

const PremiumPlaceholder: React.FC = () => {
	return (
		<div className={styles.placeholder}>
			<div>
				<div>Для просмотра фильмов необходимо оформить подписку.</div>
				<Link href={PUBLIC_URL.premium()}>
					<Button className={styles.button} size='sm'>
						Подписаться
					</Button>
				</Link>
			</div>
		</div>
	)
}

export default PremiumPlaceholder
