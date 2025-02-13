import cn from 'clsx'
import parse from 'html-react-parser'

const Description: React.FC<{ text: string; className?: string }> = ({
	text,
	className
}) => {
	return <div className={cn('text-white/60', className)}>{parse(text)}</div>
}

export default Description
