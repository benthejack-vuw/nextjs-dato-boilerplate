import { AllRootLevelPageSlugsDocument } from "@catalyst/types/dato/graphql";
import RootLevelPageWrapper from "@/components/models/root-level-page/root-level-page-wrapper";
import { datoRequest } from "@/lib/dato/dato-request";

type PageProps = {
	params: Promise<{
		slug: string;
	}>;
};

export async function generateStaticParams() {
	const result = await datoRequest(AllRootLevelPageSlugsDocument);
	return result.allRootLevelPages.map(({ slug }) => ({
		slug,
	}));
}

const Page = async ({ params }: PageProps) => {
	const { slug } = await params;
	return <RootLevelPageWrapper slug={slug} />;
};

export default Page;
