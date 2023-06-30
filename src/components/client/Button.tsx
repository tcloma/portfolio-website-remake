import React from 'react'

type Props = {
	text: string
}

export default function Button({ text }: Props) {
	return <button className='btn' onClick={() => alert('Clicked!')}>{text}</button>
}
