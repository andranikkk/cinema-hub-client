import Icon from '../../Icon'
import styles from './SlideArrow.module.scss'
import cn from 'clsx'

interface ISlideArrow {
	variant: 'left' | 'right'
	clickHandler: () => void
}

const SlideArrow: React.FC<ISlideArrow> = ({ variant, clickHandler }) => {
	const isLeft = variant === 'left'

	return (
		<button
			onClick={clickHandler}
			className={cn(styles.arrow, {
				[styles.left]: isLeft,
				[styles.right]: !isLeft
			})}
		>
			<Icon
				className={styles.icon}
				name={isLeft ? 'LuChevronLeft' : 'LuChevronRight'}
			/>
		</button>
	)
}

export default SlideArrow
