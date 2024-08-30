<script lang="ts">
	import { results } from "$lib/runes/results.svelte";
	import { normalizeString } from "$lib/utils";

	let query = $state("");
	const initialRepos = results.repos;

	function search() {
		const queryResults = initialRepos.filter((repo) => {
			const formattedQuery = normalizeString(query);

			return (
				normalizeString(repo.subject).includes(formattedQuery) ||
				normalizeString(repo.career).includes(formattedQuery) ||
				normalizeString(repo.formattedSemester).includes(formattedQuery) ||
				normalizeString(repo.semester.toString()).includes(formattedQuery)
			);
		});

		results.repos = queryResults;
	}
</script>

<label
	class="input input-primary mx-auto flex w-[300px] items-center gap-2 bg-transparent sm:w-[450px]"
>
	<input
		bind:value={query}
		oninput={search}
		type="text"
		class="grow placeholder-base-content/80 placeholder:text-xs sm:placeholder:text-base"
		placeholder="Buscar por materia, semestre o carrera"
	/>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 16 16"
		fill="currentColor"
		class="size-4 opacity-70"
	>
		<path
			fill-rule="evenodd"
			d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
			clip-rule="evenodd"
		/>
	</svg>
</label>
