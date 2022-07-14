export const filtration = (items, filter) => {
    return items.filter(item => item.genre.name === filter);
}