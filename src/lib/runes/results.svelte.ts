import type { Repo } from "$lib/types/repo";
import repos from "$lib/repos.json";

const orderedRepos = repos.slice().sort((a, b) => a.semester - b.semester);

export const results = $state<{ repos: Repo[] }>({ repos: orderedRepos });
