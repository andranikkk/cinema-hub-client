import Field from '../field/Field'
import { ISlugField } from '../form.interface'
import styles from './SlugField.module.scss'

const SlugField: React.FC<ISlugField> = ({ register, error, generate }) => {
	return (
		<div className='relative'>
			<Field
				{...register('slug', {
					required: 'Ссылка обязательна!'
				})}
				placeholder='Ссылка'
				error={error}
			/>

			<div className={styles.badge} onClick={generate}>
				Сгенерировать
			</div>
		</div>
	)
}

export default SlugField
