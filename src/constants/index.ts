import { useMemo } from "react";

export const navRoutes = () => {
	const routes = useMemo(() => [
		{
			num: '00',
			path: "/",
		},
		{
			num: '01',
			path: "/destination",
		},
		{
			num: '02',
			path: "/crew",
		},
		{
			num: '03',
			path: "/technology",
		},
	]);
	return routes;
};
