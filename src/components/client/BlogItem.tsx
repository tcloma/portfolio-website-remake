interface Props {
	title: string
	slug: string
}

export default function BlogItem({ title, slug }: Props) {
	return (
		<a
			className="hover:font-bold w-full duration-200 border-b-2 py-4"
			href={`/blog/${slug}`}
		>
			{title}
		</a>
	)
}
