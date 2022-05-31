<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:'Achieved a DevOps Engineer. I am a good communicator and motivator, able to work as part of a team but also under my own initiative. I am a person who is self-motivated, energetic hardworking and reliable. My current work experience includes Cloud Native DevOps infrastructure migration. Monitoring, securing and taking part of the form in automating and supporting to ensure CI/CD in product development.',
				},
				{
					id: 2,
					bio:
						'I enjoy collaborating with developers, businesses and operations. I have improved on and developed new skills throughout the years and ensured I am up-to-date with the current key trends within the industry.',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="https://storage.googleapis.com/dicodingku/profileku.jpg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
