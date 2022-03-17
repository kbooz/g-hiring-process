export type FilterButton = { label: string; total?: number };

export const features = {
	skills: [
		{ label: "UX Design", total: 1 },
		{ label: "UI Design" },
		{ label: "Marketing" },
		{ label: "Branding", total: 10 },
		{ label: "Product Strategy" },
		{ label: "Social" },
		{ label: "Product Design" },
		{ label: "Typography" },
		{ label: "Prototyping", total: 2 },
	] as FilterButton[],
	knowledges: [
		{ label: "Web 3" },
		{ label: "Business Law" },
		{ label: "AI", total: 3 },
		{ label: "Business Development" },
		{ label: "Product Development" },
	] as FilterButton[],
	attitudes: [
		{ label: "Pro-active" },
		{ label: "Business Driven" },
		{ label: "Collaborative" },
		{ label: "Leadership", total: 12 },
		{ label: "Innovative", total: 4 },
	] as FilterButton[],
};
