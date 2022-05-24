// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Google Cloud Platform Migrations',
		category: 'Cloud Computing',
		img: require('@/assets/images/web-project-2.jpg'),
	},
	{
		id: 2,
		title: 'Implementing AWS Elastic Kubernetes Service',
		category: 'Kubernetes',
		img: require('@/assets/images/eks.png'),
	},
	{
		id: 3,
		title: 'Provisoning Infrastructure Google Cloud Platform',
		category: 'Provisioning',
		img: require('@/assets/images/ui-project-1.jpg'),
	},
	{
		id: 4,
		title: 'Create CI/CD Pipeline in Digital Ocean',
		category: 'DevOps',
		img: require('@/assets/images/ui-project-2.jpg'),
	},
	{
		id: 5,
		title: 'Setup Monitoring In Microsoft Azure',
		category: 'Cloud Computing',
		img: require('@/assets/images/azure-project-1.png'),
	},
	{
		id: 6,
		title: 'Restructuring Microservices App',
		category: 'Microservices',
		img: require('@/assets/images/microservice-project.jpg'),
	},
];

export default projects;
