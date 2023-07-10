import { FormEvent, useRef } from 'react'
import InputField from './InputField'

export default function ContactForm() {
	const nameRef = useRef<HTMLInputElement>(null)
	const subjectRef = useRef<HTMLInputElement>(null)
	const emailRef = useRef<HTMLInputElement>(null)
	const messageRef = useRef<HTMLTextAreaElement>(null)

	function handleSubmit(e: FormEvent) {
		e.preventDefault()
		const formData = {
			name: nameRef.current?.value,
			subject: subjectRef.current?.value,
			emailRef: emailRef.current?.value,
			message: messageRef.current?.value,
		}

		console.log(formData)
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="flex w-full flex-col items-center justify-center gap-2 px-4"
		>
			<div className="flex w-full items-center justify-center gap-2">
				<InputField name="Name" type="text" ref={nameRef} />
				<InputField name="Subject" type="text" ref={subjectRef} />
			</div>
			<InputField name="Email" type="email" ref={emailRef} />
			<InputField name="Message" type="area" ref={messageRef}/>
			<button className='btn btn-block'>Submit</button>
		</form>
	)
}
