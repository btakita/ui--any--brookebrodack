import { class_ } from 'ctx-core/html'
import { type relement_env_T } from 'relementjs'
import { div_, span_ } from 'relementjs/html'
export function spinner__div_<env_T extends relement_env_T>({
	class:_class,
	center,
	center_x,
}:{
	class?:string
	center?:boolean
	center_x?:boolean
}) {
	return div_<env_T>({
		class: class_(
			'inline-block',
			'h-8',
			'w-8',
			...center
				? ['absolute', 'top-[calc(50%-16px)]', 'left-[calc(50%-16px)]']
				: center_x
					? ['absolute', 'left-[calc(50%-16px)]']
					: [],
			'animate-spin',
			'rounded-full',
			'border-4',
			'border-solid',
			'border-current',
			'border-r-transparent',
			'align-[-0.125em]',
			'text-teal-500',
			'motion-reduce:animate-[spin_1.5s_linear_infinite]',
			_class),
		role: 'status'
	}, [
		span_({
			class: class_(
				'!absolute',
				'!-m-px',
				'!h-px',
				'!w-px',
				'!overflow-hidden',
				'!whitespace-nowrap',
				'!border-0',
				'!p-0',
				'![clip:rect(0,0,0,0)]')
		})
	])
}
