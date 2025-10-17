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

export const VIDEOS: Video[] = [
	{
		id: 'video-1',
		title: 'Fondamentale',
		lessons: [
			{ id: 'v1-l1', title: 'Introduction' , href: '/formations/video-1' },
			{ id: 'v1-l2', title: 'Les bases', href: '/formations/video-1/lesson-2' },
			{ id: 'v1-l3', title: 'Concepts avancés', href: '/formations/video-1/lesson-3' },
		],
	},
	{
		id: 'video-2',
		title: 'Server components + Prisma',
		lessons: [
			{ id: 'v2-l1', title: 'Sevrer components + prisma', href: '/formations/video-2' },
			{ id: 'v2-l2', title: 'Configuration Prisma', href: '/formations/video-2/lesson-2' },
			{ id: 'v2-l3', title: 'Modèles et migrations', href: '/formations/video-2/lesson-3' },
		],
	},
	{
		id: 'video-3',
		title: 'Server functions + Mutation',
		lessons: [
			{ id: 'v3-l1', title: 'serveur function + Mutation', href: '/formations/video-3' },
			{ id: 'v3-l2', title: 'API Routes', href: '/formations/video-3/lesson-2' },
			{ id: 'v3-l3', title: 'Gestion d\'état', href: '/formations/video-3/lesson-3' },
		],
	},
];


export type Caca = {
    id: string;
    title:  string;
    lessons: Lesson[];
};
export const CACA: Caca[] = [

    {
        id: 'prout-1',
        title: 'Le gros proute sa mère',
        lessons: [
            { id: 'page caca', title: 'caca', href: '/formations/prout-1'},
            { id: 'prout-1-l2', title: 'Super caca', href: '/formations/prout-1/lesson-2'},
            { id: 'prout-1-l3', title: 'Méga caca', href: '/formations/prout-1/lesson-3'}
        ]
    }
];
