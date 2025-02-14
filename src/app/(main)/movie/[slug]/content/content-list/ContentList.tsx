import { IContentList } from '../content.interface'
import styles from './ContentList.module.scss'
import Link from 'next/link'
import { Fragment } from 'react'

const ContentList: React.FC<IContentList> = ({ links, name }) => {
	return (
		<div className={styles.list}>
			<div className={styles.name}>{name}</div>

			<div className={styles.links}>
				{links.slice(0, 3).map((link, index) => (
					<Fragment key={index}>
						<Link href={link.link} className={styles.link}>
							{link.title}
						</Link>

						{index + 1 !== links.length ? ', ' : ''}
					</Fragment>
				))}
			</div>
		</div>
	)
}

export default ContentList
