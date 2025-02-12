import { IOption, ISelect } from '../form.interface'
import styles from './Select.module.scss'
import ReactSelect, { OnChangeValue } from 'react-select'
import makeAnimated from 'react-select/animated'

const animatedComponents = makeAnimated()

const Select: React.FC<ISelect> = ({
	options,
	isMulti,
	field,
	isLoading,
	placeholder,
	error
}) => {
	const onChange = (newValue: unknown | OnChangeValue<IOption, boolean>) => {
		field.onChange(
			isMulti
				? (newValue as IOption[]).map((item: IOption) => item.value)
				: (newValue as IOption).value
		)
	}

	const getValue = () => {
		if (field.value) {
			return isMulti
				? options?.filter(option => field.value.indexOf(option.value) >= 0)
				: options?.find(option => option.value === field.value)
		} else {
			return isMulti ? [] : ''
		}
	}

	return (
		<div className={styles.select_container}>
			<label>
				<span>{placeholder}</span>
				<ReactSelect
					classNamePrefix='custom-select'
					placeholder=''
					options={options}
					value={getValue()}
					onChange={onChange}
					isMulti={isMulti}
					isLoading={isLoading}
					components={animatedComponents}
				/>
			</label>
			{error && <div className={styles.error}>{error.message}</div>}
		</div>
	)
}

export default Select
