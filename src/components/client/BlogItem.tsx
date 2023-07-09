interface Props {
	title: string
	slug: string
}

export default function BlogItem({ title, slug }: Props) {
	return <a href={`/blog/${slug}`}>{title}</a>
}
