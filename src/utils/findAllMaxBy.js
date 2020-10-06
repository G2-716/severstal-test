export const findAllMaxBy = (array, fn) => {
    const mapped = array.map(fn);
    const max = Math.max(...mapped);
    return array.filter(item => fn(item) === max);
};