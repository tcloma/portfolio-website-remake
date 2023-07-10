type Props = {
	type: string
	name: string
}

import { ForwardedRef, forwardRef } from "react"

const InputField = forwardRef(function InputField({ type, name }: Props, ref: ForwardedRef<any>) {
	return (
		<div className="form-control">
			<label className="label" htmlFor={name}>
				<span className="label-text">{name}</span>
			</label>
			{type == 'area' ? (
				<textarea
					className="textarea border-2 border-neutral"
					name={name}
					placeholder="Type here..."
                    ref={ref}
				/>
			) : (
				<input
					className="input border-2 border-neutral"
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