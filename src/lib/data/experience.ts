import type { ExperienceEntry } from "$lib/utils/types";

const careerStart = new Date(2014, 8, 22);
export const yearsOfExperience = Math.abs(
	new Date(Date.now() - careerStart.getTime()).getUTCFullYear() - 1970
);

export const entries = [
	{
		companySlug: 'usefulgroup',
		company: 'Rema 1000',
		jobTitle: 'Manual worker',
		timeframe: '2019 → Now',
		current: true,
		location: 'Horsens, Denmark',
		description:
			'Working with boxes',
		tags: [
			{
				color: 'primary',
				label: 'Warehouse'
			},
			{
				color: 'primary',
				label: 'Logistics'
			}
		]
	},
	{
		companySlug: 'agora',
		company: 'Normal warehouse',
		jobTitle: 'Manual worker',
		timeframe: '2021 → 2022',
		current: true,
		location: 'Horsens, Denmark',
		description:
			'Picking',
		tags: [
			{
				color: 'primary',
				label: 'tag1'
			},
			{
				color: 'primary',
				label: 'tag2'
			}
		]
	},
	{
		companySlug: 'agora',
		company: 'Autodoctor',
		jobTitle: 'supply-chain stuff member',
		timeframe: '2018 → 2019',
		current: true,
		location: 'Chisinau, Moldova',
		description:
			'taking care of cars',
		tags: [
			{
				color: 'primary',
				label: 'tag1'
			},
			{
				color: 'primary',
				label: 'tag2'
			}
		]
	},
	
	
] as ExperienceEntry[];
