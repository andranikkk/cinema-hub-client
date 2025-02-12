'use client'

import SkeletonLoader from '@/components/ui/SkeletonLoader'
import formStyles from '@/components/ui/form-elements/AdminForm.module.scss'
import Button from '@/components/ui/form-elements/button/Button'
import Field from '@/components/ui/form-elements/field/Field'
import Select from '@/components/ui/form-elements/select/Select'
import SlugField from '@/components/ui/form-elements/slug-field/SlugField'
import UploadField from '@/components/ui/form-elements/upload-field/UploadField'
import Heading from '@/components/ui/heading/Heading'

import { IUserEditInput, UserRole } from '@/types/user.types'

import generateSlug from '@/utils/string/generateSlug'

import { useUserEdit } from './useUserEdit'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

interface IUserEdit {
	userId: string
}

const UserEdit: FC<IUserEdit> = ({ userId }) => {
	const { user, onSubmit, isLoading } = useUserEdit(userId)

	const {
		handleSubmit,
		register,
		formState: { errors },
		control,
		setValue,
		getValues
	} = useForm<IUserEditInput>({
		mode: 'onChange',
		values: {
			name: user?.name || '',
			email: user?.email || '',
			role: user?.role || UserRole.USER
		}
	})

	const roles = [
		{ label: 'Пользователь', value: UserRole.USER },
		{ label: 'Администратор', value: UserRole.ADMIN }
	]

	return (
		<div className='px-6'>
			<Heading>Настройка пользователя</Heading>
			<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
				{isLoading ? (
					<div className='space-y-4'>
						{Array.from({ length: 3 }).map((_, index) => (
							<SkeletonLoader className='h-10' key={index} />
						))}
					</div>
				) : (
					<>
						<div className={formStyles.fields}>
							<Field
								{...register('name', {
									required: 'Имя обязательно'
								})}
								placeholder='Имя'
								error={errors.name}
							/>

							<Field
								{...register('email', {
									required: 'Почта обязательна'
								})}
								placeholder='Почта'
								error={errors.email}
								style={{ width: '31%' }}
							/>

							<Controller
								name='role'
								control={control}
								rules={{ required: 'Выберите роль!' }}
								render={({ field, fieldState: { error } }) => (
									<Select
										error={error}
										options={roles || []}
										field={field}
										placeholder='Роль'
									/>
								)}
							/>
						</div>

						<Button>Сохранить</Button>
					</>
				)}
			</form>
		</div>
	)
}

export default UserEdit
