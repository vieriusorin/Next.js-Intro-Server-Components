import { Card } from "@/components/Card";
import { Suspense } from "react";

const DocsPage = ({ params }: any) => {
	return (
		<div>
			<h1>Docs page</h1>
			<Suspense fallback={<div>Loading...</div>}>
				<Card />
			</Suspense>
		</div>
	);
};

export default DocsPage;
