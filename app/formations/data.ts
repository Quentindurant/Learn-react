export type Lesson = {
	id: string;
	title: string;
	href: string;
};

export type Video = {
	id: string;
	title: string;
	lessons: Lesson[];
};

export const videos: Video[] = [
	{
		id: 'video-1',
		title: 'Fondamentale',
		lessons: [
			{ id: 'v1-l1', title: 'Introduction', href: '/formations/video-1' },
		],
	},
	{
		id: 'video-2',
		title: 'Server components + Prisma',
		lessons: [
			{ id: 'v2-l1', title: 'Sevrer components + prisma', href: '/formations/video-2' },
		],
	},
	{
		id: 'video-3',
		title: 'Server functions + Mutation',
		lessons: [
			{ id: 'v3-l1', title: 'serveur function + Mutation', href: '/formations/video-3' },
		],
	},
];

export default videos;

