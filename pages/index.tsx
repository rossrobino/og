import Head from "next/head";
import Link from "next/link";
export default function Home() {
	return (
		<>
			<Head>
				<title>og.robino.dev</title>
				<meta name="description" content="og image api" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>
			<header>
				<h1>og.robino.dev</h1>
			</header>
			<main>
				<hr />
				<h2>Use</h2>
				<p>
					<code>
						&lt;meta property=&quot;og:image&quot;
						content=&quot;https://og.robino.dev/api/route?param=argument&...&quot;
						/&gt;
					</code>
				</p>
				<h2>Routes & Parameters</h2>
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
				<hr />
			</main>
			<footer>
				<Link href="https://github.com/rossrobino/og">GitHub</Link>
			</footer>
		</>
	);
}
