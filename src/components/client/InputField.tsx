type Props = {
	type: string
	name: string
	styles?: string
}

import { ForwardedRef, forwardRef } from 'react'

const InputField = forwardRef(function InputField(
	{ type, name, styles }: Props,
	ref: ForwardedRef<any>
) {
	return (
		<div className="form-control">
			<label className="label" htmlFor={name}>
				<span className="label-text">{name}</span>
			</label>
			{type == 'area' ? (
				<textarea
					className={'textarea w-full border-2 border-neutral ' + styles}
					name={name}
					placeholder="Type here..."
					ref={ref}
				/>
			) : (
				<input
					className={'input w-full border-2 border-neutral ' + styles}
					type={type}
					name={name}
					placeholder="Type here..."
					ref={ref}
				/>
			)}
		</div>
	)
})

export default InputField
