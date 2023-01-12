import Head from "next/head";
import Link from "next/link";
export default function Home() {
	return (
		<>
			<Head>
				<title>rossrobino/og</title>
				<meta name="description" content="og image api" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>
			<main>
				<h1>rossrobino/og</h1>
				<p>
					Navigate to the url and copy the link to into an og:image
					meta tag.
				</p>
				<h2>Images & Search Params</h2>
				<p>
					Use search params by adding ? at the end of the url and
					separating with &.
				</p>
				<ul>
					<li>
						<Link href="/api/robino">robino</Link>
					</li>
					<li>
						<Link href="/api/blog">blog</Link>
					</li>
					<ul>
						<li>title</li>
						<li>desc</li>
						<li>author</li>
					</ul>
				</ul>
			</main>
		</>
	);
}
