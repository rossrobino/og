import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
	runtime: "edge",
};

const mansFont = fetch(
	new URL("../../assets/Mansalva-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
	try {
		const font = await mansFont;

		return new ImageResponse(
			(
				<div
					tw="w-full h-full p-18 flex items-center justify-between bg-slate-50"
					style={{ color: "#0E1317", borderWidth: 20, borderColor: "#0E1317" }}>
					<h1 tw="text-9xl">Ross Robino</h1>
					<img
						width="300"
						height="300"
						src={`https://github.com/rossrobino.png`}
						style={{
							borderRadius: 3,
						}}
					/>
				</div>
			),
			{
				width: 1200,
				height: 630,
				fonts: [
					{
						name: "mansalva",
						data: font,
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
