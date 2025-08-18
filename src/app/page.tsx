import { Button } from "@catalyst/ui/components/button";
import { Headline } from "@catalyst/ui/components/headline";
import { CirclePlus } from "lucide-react";
import { ServiceList } from "@/components/service-list";

export default function Page() {
	return (
		<main className="px-6 md:px-[75px] max-w-[1440px] mx-auto snap-y snap-mandatory">
			<header className="min-h-dvh flex flex-col justify-center items-center snap-start snap-always">
				<div className="max-w-2xl space-y-4">
					<Headline level={1}>Great wealth brings significant complexity.</Headline>
					<p className="leading-4 md:text-lg md:leading-[26px] text-center">
						Requiring a trusted advisor skilled in managing both. It’s what we’ve done for Silicon Valley’s most
						accomplished innovators for over a quarter century. 
					</p>
				</div>
			</header>
			<div className="min-h-dvh flex flex-col justify-center items-center snap-start snap-always">
				<div className="max-w-2xl">
					<Headline level={2}>Providing clarity and peace of mind.</Headline>
				</div>
			</div>
			<div className="min-h-dvh flex flex-col justify-center items-center snap-start snap-always">
				<div className="space-y-4 text-center">
					<Headline level={3} className="max-w-5xl mx-auto">
						A unique multi-family office as innovative as the clients we serve.
					</Headline>
					<p className="text-lg leading-[26px] max-w-2xl mx-auto">
						We take a different approach, one that serves as your family’s CFO with a fully integrated and
						comprehensive family office.  
					</p>
					<Button variant="secondary">
						Learn more <CirclePlus className="size-7 [&>circle]:fill-primary [&>circle]:stroke-0" />
					</Button>
				</div>
			</div>
			<div className="min-h-dvh flex flex-col justify-center items-center snap-start snap-always max-sm:pt-16">
				<div className="space-y-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
						<h4 className="text-[32px] leading-[34px] md:text-[55px] md:leading-[55px]">
							Fully integrated
							<br />
							services.
						</h4>
						<p className="leading-[16px] md:text-[22px] tracking-[-3%] md:leading-[22px]">
							Tailored to bring clarity to your unique wealth profile to manage complexity and mitigate risk, so
							you can move forward with confidence, purpose, and peace of mind.
						</p>
					</div>

					<ServiceList />
				</div>
			</div>
		</main>
	);
}
