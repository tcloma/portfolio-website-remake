import { useRef } from 'react'
import InputField from './InputField'

export default function ContactForm() {
	const nameRef = useRef<HTMLInputElement>(null)
	const subjectRef = useRef<HTMLInputElement>(null)
	const emailRef = useRef<HTMLInputElement>(null)
	const messageRef = useRef<HTMLTextAreaElement>(null)

	return (
		<form className="flex w-full flex-col items-center justify-center">
			<InputField name="Name" type="text" ref={nameRef} />
			<InputField name="Subject" type="text" ref={subjectRef} />
			<InputField name="Email" type="email" ref={emailRef} />
			<InputField name="Message" type="area" ref={messageRef} />
			<button>Test</button>
		</form>
	)
}
