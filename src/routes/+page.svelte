<script lang="ts">
	import { getSections } from '$lib/api/api';
	import { onMount } from 'svelte';
	import type { Author, Book, Chapter, Section, Problem } from '$lib/api/contentTypes.ts';

	let sections: Section[] = [];

	let currentlyReading: Section[] = [];

	let alreadyRead: Section[] = [];

	function setCurrentltyReading(sections: Section[]) {
		currentlyReading = sections.filter(
			(section) => section.started !== null && section.completed === null
		);
	}

	function setAlreadyRead(sections: Section[]) {
		alreadyRead = sections.filter(
			(section) => section.started !== null && section.completed !== null
		);
	}

	function getAuthors(section: Section) {
		let authors: Author = section.chapter.book.authors;
		if (authors.length === 0) {
			return 'Unknown';
		} else if (authors.length === 1) {
			return authors[0].last_name;
		} else return authors.map((author: Author) => author.name).join(', ');
	}

	onMount(async () => {
		sections = await getSections();
		setCurrentltyReading(sections);
		setAlreadyRead(sections);
	});
</script>

<h1>Collin's Textbook Tracker</h1>
{#if currentlyReading.length > 0}
	<h2>Currently Reading</h2>
	<ul>
		{#each currentlyReading as section}
			<li>
				{getAuthors(section)}
				{section.chapter.book.title}: {section.chapter.number}.{section.number}
				{section.title}
			</li>
		{/each}
	</ul>
{/if}
{#if alreadyRead.length > 0}
	<h2>Already Read</h2>
	<ul>
		{#each alreadyRead as section}
			<li>
				{getAuthors(section)}
				{section.chapter.book.title}: {section.chapter.number}.{section.number}
				{section.title}
			</li>
		{/each}
	</ul>
{/if}
