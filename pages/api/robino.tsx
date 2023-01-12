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
					tw="w-full h-full p-12 flex items-center bg-slate-50"
					style={{
						color: "#0E1317",
						borderWidth: 60,
						borderColor: "#0E1317",
					}}>
					<div style={{ fontSize: 160, lineHeight: 1 }}>
						Ross Robino
					</div>
					<img
						width="415"
						height="415"
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
