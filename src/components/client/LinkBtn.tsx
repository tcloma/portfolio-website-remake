interface Props {
	name: string
	link: string
	children: any
	styles?: string
}

export default function LinkBtn({ name, link, children, styles }: Props) {
	return (
		<button
			className={`flex h-full w-full items-center justify-center ${styles}`}
			onClick={() => {
				window.open(link)
			}}
		>
			{children}
			{name}
		</button>
	)
}
