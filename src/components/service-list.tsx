"use client";
import { AccordionContent, AccordionItem, AccordionRoot, AccordionTrigger } from "@catalyst/ui/components/accordion";
import { useIsMobile } from "@catalyst/ui/hooks/use-mobile";
import { useEffect, useState } from "react";

const tempServicesData: Array<{ id: string; title: string; content: string }> = [
	{
		id: "item-1",
		title: "Tax Planning, Structuring and Compliance",
		content:
			"Designing and managing your family’s entire tax landscape. Covering individuals, trusts, and wealth-transfer structures. Seamlessly integrating year-round planning with returns, estimates, and projections.",
	},
	{
		id: "item-2",
		title: "Expense Management and Financial Reporting",
		content:
			"Orchestrating family and entity accounting with precision. Providing seamless cash management, comprehensive bill payment services, and customised financial reporting tailored to your needs.",
	},
	{
		id: "item-3",
		title: "Risk Management and Asset Protection Planning",
		content:
			"Experienced risk management professionals protect your assets through personalised programs. Collaborating with trusted insurance providers, we deliver practical solutions tailored to your needs.",
	},
	{
		id: "item-4",
		title: "Philanthropy and Legacy Planning",
		content:
			"Committed to designing philanthropic plans that truly reflect your values and family legacy. We carefully assess past giving and provide ongoing guidance to support your charitable journey with clarity and purpose.",
	},
	{
		id: "item-5",
		title: "Estate and Wealth Transfer Planning",
		content:
			"Leveraging deep expertise in estate and wealth transfer, we take a holistic approach to address complex financial and family challenges, guiding your wealth transition with clarity, confidence, and care.",
	},
	{
		id: "item-6",
		title: "Family Governance and Succession",
		content:
			"Successful wealth transition requires the intentional development of structures, agreements, and a clear decision-making framework to support effective, ongoing management of the family enterprise.",
	},
	{
		id: "item-7",
		title: "Investment Integration",
		content:
			"Partnering closely with your investment advisors as one unified team. Taking a holistic view of your family’s balance sheet while actively minimising tax impacts from portfolio rebalancing and liquidity needs.",
	},
	{
		id: "item-8",
		title: "Concierge and Lifestyle Management",
		content:
			"Facilitating, managing, and coordinating essential services to ensure you can fully enjoy your time, free from the burden of time-consuming, complex, and often overwhelming details.",
	},
];

const ServiceList = () => {
	const [accordionOpenItems, setAccordionOpenItems] = useState<string[]>([]);
	// Responsively Set default expanded items which should be the first on mobile and all items on everything else
	const isMobile = useIsMobile();
	useEffect(() => {
		if (isMobile) {
			setAccordionOpenItems([tempServicesData[0]?.id ?? ""]);
		} else {
			setAccordionOpenItems(tempServicesData.map((item) => item.id) ?? []);
		}
	}, [isMobile]);

	return (
		<AccordionRoot type="multiple" value={accordionOpenItems} asChild>
			<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-14">
				{tempServicesData.map((item) => (
					<AccordionItem key={item.id} value={item.id} asChild className="md:border-none">
						<li>
							<AccordionTrigger
								className="leading-[100%] text-left py-[30px] [&[data-state=open]]:pb-[18px] md:[&>svg]:hidden md:pointer-events-none"
								disabled={!isMobile}
								onClick={() => setAccordionOpenItems([item.id])}
							>
								<span>{item.title}</span>
							</AccordionTrigger>
							<AccordionContent className="text-xs md:text-sm leading-3.5 text-primary/50 dark:text-primary-foreground/50 max-sm:pb-[30px]">
								{item.content}
							</AccordionContent>
						</li>
					</AccordionItem>
				))}
			</ul>
		</AccordionRoot>
	);
};

export { ServiceList };
