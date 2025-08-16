import LinkCard from "@/components/LinkCard/LinkCard";
import type { LinkCardGridFragment } from "@/graphql/generated/graphql";

const LinkCardGrid = ({ title, links }: LinkCardGridFragment) => {
	console.log("links", links);
	return (
		<div className="w-full">
			<h3>{title}</h3>
			<div className="w-full grid grid-cols-3 gap-6">
				{links.map((link) => (
					<LinkCard key={link.id} link={link} />
				))}
			</div>
		</div>
	);
};

export default LinkCardGrid;
