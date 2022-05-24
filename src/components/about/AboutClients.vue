<script>
import AboutClientSingle from './AboutClientSingle.vue';

export default {
	components: {
		AboutClientSingle,
	},
	data: () => {
		return {
			clientsHeading: 'Some of the technologies I am good at',
			clients: [
				{
					id: 1,
					title: 'kubernetes',
					img: require('@/assets/images/brands/Kubernetes.png'),
				},
				{
					id: 2,
					title: 'docker',
					img: require('@/assets/images/brands/Dockerku.png'),
				},
				{
					id: 3,
					title: 'azure',
					img: require('@/assets/images/brands/Azure.png'),
				},
				{
					id: 4,
					title: 'gcp',
					img: require('@/assets/images/brands/gcp.png'),
				},
				{
					id: 5,
					title: 'aws',
					img: require('@/assets/images/brands/aws.png'),
				},
				{
					id: 6,
					title: 'digitalocean',
					img: require('@/assets/images/brands/DigitalOcean.png'),
				},
				{
					id: 7,
					title: 'github',
					img: require('@/assets/images/brands/GitHub.png'),
				},
				{
					id: 8,
					title: 'gitlab',
					img: require('@/assets/images/brands/GitLab.png'),
				},
			],
		};
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
		>
			{{ clientsHeading }}
		</p>
		<div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
			<AboutClientSingle
				v-for="client in clients"
				:key="client.id"
				:client="client"
			/>
		</div>
	</div>
</template>
