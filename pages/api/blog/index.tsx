import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
	runtime: "edge",
};

const font = fetch(
	new URL("../../../assets/NotoSerif-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
	try {
		const fontData = await font;
		const { searchParams } = new URL(req.url);

		const hasTitle = searchParams.has("title");
		const title = hasTitle
			? searchParams.get("title")?.slice(0, 70)
			: "blog.robino.dev";
		const hasDesc = searchParams.has("desc");
		const desc = hasDesc
			? searchParams.get("desc")?.slice(0, 100)
			: "Ross Robino's blog";
		const hasAuthor = searchParams.has("author");
		const author = hasAuthor
			? searchParams.get("author")?.slice(0, 30)
			: "Ross Robino";

		return new ImageResponse(
			(
				<div tw="w-full h-full p-12 flex flex-col justify-around bg-emerald-900 text-neutral-50">
					<div tw="text-7xl p-4">{title}</div>
					<div tw="text-4xl text-neutral-200 p-4">{desc}</div>
					<div tw="text-5xl text-neutral-200 p-4">{author}</div>
				</div>
			),
			{
				width: 1200,
				height: 630,
				fonts: [
					{
						name: "NotoSerif",
						data: fontData,
					},
				],
			}
		);
	} catch (e: any) {
		console.log(`${e.message}`);
		return new Response("Failed to generate the image.", {
			status: 500,
		});
	}
}
