<script lang="ts">
	import { results } from "$lib/runes/results.svelte";
</script>

<div class="mt-4 grid grid-cols-12 justify-center gap-8">
	{#if results.repos.length === 0}
		<p class="col-span-12 text-center text-base-content/80">No se encontraron resultados</p>
	{/if}
	{#each results.repos as repo}
		<div
			class="card col-span-12 rounded-xl border border-base-content/50 transition-colors duration-300 hover:border-primary sm:col-span-6 lg:col-span-4 2xl:col-span-3"
		>
			<figure>
				<img
					src={`https://opengraph.githubassets.com/${new Date().toDateString()}/${repo.repoUrl.split(".com/").slice(-1)}`}
					alt="Preview de repositorio"
					width="1200"
					height="600"
				/>
			</figure>
			<div class="card-body">
				<h2 class="card-title line-clamp-2 text-balance text-primary">{repo.subject}</h2>
				<p class="text-base font-extrabold">
					Semestre: <span class="font-normal">{repo.formattedSemester}</span>
				</p>
				<p class="text-base font-extrabold">
					Carrera: <span class="font-normal">{repo.career}</span>
				</p>
				<a
					href={repo.authorUrl}
					target="_blank"
					class="z-20 w-fit text-base font-extrabold transition-colors hover:text-secondary"
				>
					Autor: <span class="font-normal">@{repo.author}</span>
				</a>
			</div>
			<a href={repo.repoUrl} target="_blank" class="absolute inset-0 z-10 block"> </a>
		</div>
	{/each}
</div>
