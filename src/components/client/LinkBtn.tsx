interface Props {
	name: string
	link: string
	children: any
	styles?: string
}

export default function LinkBtn({ name, link, children, styles }: Props) {
	return (
		<button
			className={`btn flex border-none duration-200 items-center justify-center normal-case ${styles}`}
			onClick={() => {
				window.open(link)
			}}
		>
			{children}
			{name}
		</button>
	)
}
