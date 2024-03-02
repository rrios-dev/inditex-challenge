const parseHeroId = (id: string) => id.match(/^(\d+)-/)?.[1];

export default parseHeroId;
