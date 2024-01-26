import { class_ } from 'ctx-core/html'
import { path_, svg_ } from 'relementjs/svg'
export function fa_video_regular_({
	class: _class
}:{
	class?:string
}) {
	return (
		svg_({
			xmlns: 'http://www.w3.org/2000/svg',
			viewBox: '0 0 576 512',
			class: class_(_class)
		}, [
			path_({
				d: 'M64 112c-8.8 0-16 7.2-16 16V384c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H64zM0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64v33V351v33c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM528 363.4V148.6L416 199V146.4L520.3 99.5c5.1-2.3 10.6-3.5 16.2-3.5c21.8 0 39.5 17.7 39.5 39.5v241c0 21.8-17.7 39.5-39.5 39.5c-5.6 0-11.1-1.2-16.2-3.5L416 365.6V313l112 50.4z'
			})
		])
	)
}
