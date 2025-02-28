import Premium from './Premium'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Оформить премиум'
}

export default function PremiumPage() {
	return (
		<div>
			<Premium />
		</div>
	)
}
