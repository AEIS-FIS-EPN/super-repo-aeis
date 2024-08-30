<script>
	import Heading from "$lib/components/heading.svelte";
	import SearchBar from "$lib/components/search-bar.svelte";
	import Repos from "$lib/components/repos.svelte";
	import Footer from "$lib/components/footer.svelte";
</script>

<main class="container flex min-h-screen flex-col gap-y-12 pb-8 pt-20">
	<Heading />
	<SearchBar />
	<Repos />
	<Footer />
</main>
