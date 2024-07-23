interface Author {
	id: number;
	first_name: string;
	last_name: string;
}

interface Book {
	id: number;
	title: string;
	authors: Author[];
	edition: number;
	year: number;
}

interface Chapter {
	id: number;
	book: Book;
	title: string;
	number: number;
}

interface Section {
	id: number;
	chapter: Chapter;
	title: string;
	number: number;
	started?: string; // ISO format date string or null
	completed?: string; // ISO format date string or null
}

interface Problem {
	id: number;
	section: Section;
	number: number;
	done?: string; // ISO format date string or null
}
