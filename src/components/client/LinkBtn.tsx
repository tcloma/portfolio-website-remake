interface Props {
	name: string
	link: string
}

export default function LinkBtn({ name, link }: Props) {
	return (
		<button
			className=""
			onClick={() => {
				window.open(link)
			}}
		>
			{name}
		</button>
	)
}
