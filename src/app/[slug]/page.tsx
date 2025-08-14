import RootLevelPageWrapper from "@/components/models/RootLevelPage/RootLevelPageWrapper";
import {
	AllPageSlugsDocument,
	AllRootLevelPageSlugsDocument,
} from "@/graphql/generated/graphql";
import { datoRequest } from "@/graphql/graphql-request";

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
