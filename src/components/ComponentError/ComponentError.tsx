export const ComponentError = ({ message }: { message: string }) => (
	<div className="mt-10 bg-red-500/15 p-10 flex justify-center items-center">
		{message}
	</div>
);
