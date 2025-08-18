import type { LinkCardGridFragment } from "@catalyst/types/dato/graphql";
import LinkCard from "@/components/link-card";

const LinkCardGrid = ({ title, links }: LinkCardGridFragment) => {
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
