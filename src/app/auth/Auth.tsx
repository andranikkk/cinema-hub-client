'use client'

import Button from '@/components/ui/form-elements/button/Button'
import Heading from '@/components/ui/heading/Heading'

import { IAuthForm } from '@/types/auth.types'

import styles from './Auth.module.scss'
import AuthFields from './AuthFields'
import { useAuthMutation } from './useAuthMutation'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { PiFilmReelFill } from 'react-icons/pi'

const Auth: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IAuthForm>({
		mode: 'onChange'
	})
	const [isLoginForm, setIsLoginForm] = useState(true)

	const { mutate } = useAuthMutation(isLoginForm, reset)

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		mutate(data)
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.left}>
				<div className={styles.left_box}>
					<div className={styles.content}>
						<Heading className={styles.heading}>
							{isLoginForm ? 'Авторизация' : 'Регистрация'}
						</Heading>
						<form onSubmit={handleSubmit(onSubmit)}>
							<AuthFields
								register={register}
								errors={errors}
								isLoginForm={isLoginForm}
							/>
							<Button className={styles.button}>
								{isLoginForm ? 'Войти' : 'Зарегистрироваться'}
							</Button>
							{isLoginForm ? (
								<div className={styles.redirect}>
									<p>У вас нет аккаунта?</p>
									<button
										type='button'
										onClick={() =>
											setIsLoginForm(isLoginForm ? false : true)
										}
										className={styles.redirectButton}
									>
										Зарегистрироваться
									</button>
								</div>
							) : (
								<div className={styles.redirect}>
									<p>Уже есть аккаунт?</p>
									<button
										type='button'
										onClick={() =>
											setIsLoginForm(isLoginForm ? false : true)
										}
										className={styles.redirectButton}
									>
										Войти
									</button>
								</div>
							)}
						</form>
					</div>
				</div>
			</div>
			<div className={styles.right}>
				<PiFilmReelFill size={150} fill='white' />
			</div>
		</div>
	)
}

export default Auth
