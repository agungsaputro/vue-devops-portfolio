<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';

export default {
	name: 'Projects',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
		ProjectRelatedProjects,
	},
	data: () => {
		return {
			singleProjectHeader: {
				singleProjectTitle: 'Google Cloud Platform Migrations',
				singleProjectDate: 'Jul 26, 2021',
				singleProjectTag: 'Cloud Computing',
			},
			projectImages: [
				{
					id: 1,
					title: 'Kabul Project Management UI',
					img: require('@/assets/images/azure-project-1.png'),
				},
				{
					id: 2,
					title: 'Kabul Project Management UI',
					img: require('@/assets/images/microservice-project.jpg'),
				},
				{
					id: 3,
					title: 'Kabul Project Management UI',
					img: require('@/assets/images/eks.png'),
				},
			],
			projectInfo: {
				clientHeading: 'About Client',
				companyInfos: [
					{
						id: 1,
						title: 'Name',
						details: 'Amarta Solusindo',
					},
					{
						id: 2,
						title: 'Services',
						details: 'Cloud Migration Consulting',
					},
					{
						id: 3,
						title: 'Website',
						details: 'https://amastasolusindo.com',
					},
					{
						id: 4,
						title: 'Phone',
						details: '+62 812-898-9000',
					},
				],
				objectivesHeading: 'Objective',
				objectivesDetails:
					'even as many businesses rush to adopt cloud computing processes, it is not an easy initiative. Cloud migration introduces its own challenges. Whether you are looking to take advantage of cloud infrastructure, platforms, or software services, use these solutions to help you navigate a successful migration.',
				technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'Terraform',
							'GCP',
							'GKE',
							'Compute Engine',
							'Google Cloud Storage',
							'Ansible',
						],
					},
				],
				projectDetailsHeading: 'Challenge',
				projectDetails: [
					{
						id: 1,
						details:
							'In the long run, the cost of cloud migration sees returns of increased efficiency, lower admin costs, and streamlined processes. But getting there can still feel like an (expensive) uphill battle.',
					},
					{
						id: 2,
						details:
							'Financial concerns touch on almost every challenge of migration. There’s the immediate cost to make the migration itself in addition to the long-term financial risks of low or slow adoption and training after the migration has occurred.',
					},
					{
						id: 3,
						details:
							'The solution to cloud migration costs is Companies can keep cloud computing costs low by implementing these three strategies. Focus on planning, Follow a batch adoption process, Migrate to a hybrid cloud',
					},
					{
						id: 4,
						details:
							'The financial investment and risks associated with a cloud migration can be daunting. But with careful evaluation and planning, you can navigate those obstacles and map a path to success.',
					},
				],
				socialSharingsHeading: 'Share This',
				socialSharings: [
					{
						id: 1,
						name: 'Twitter',
						icon: 'twitter',
						url: 'https://twitter.com/',
					},
					{
						id: 2,
						name: 'Instagram',
						icon: 'instagram',
						url: 'https://instagram.com/',
					},
					{
						id: 3,
						name: 'Facebook',
						icon: 'facebook',
						url: 'https://facebook.com/',
					},
					{
						id: 4,
						name: 'LinkedIn',
						icon: 'linkedin',
						url: 'https://linkedin.com/',
					},
					{
						id: 5,
						name: 'Youtube',
						icon: 'youtube',
						url: 'https://www.youtube.com/',
					},
				],
			},
			relatedProject: {
				relatedProjectsHeading: 'Related Projects',
				relatedProjects: [
					{
						id: 1,
						title: 'Mobile UI',
						img: require('@/assets/images/mobile-project-1.jpg'),
					},
					{
						id: 2,
						title: 'Web Application',
						img: require('@/assets/images/web-project-1.jpg'),
					},
					{
						id: 3,
						title: 'UI Design',
						img: require('@/assets/images/ui-project-2.jpg'),
					},
					{
						id: 4,
						title: 'Kabul Mobile App UI',
						img: require('@/assets/images/mobile-project-2.jpg'),
					},
				],
			},
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="singleProjectHeader" />

		<!-- Project gallery -->
		<ProjectGallery :projectImages="projectImages" />

		<!-- Project information -->
		<ProjectInfo :projectInfo="projectInfo" />

		<!-- Project related projects -->
		<ProjectRelatedProjects :relatedProject="relatedProject" />
	</div>
</template>

<style scoped></style>
