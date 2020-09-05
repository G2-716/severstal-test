export const createOpenGraphMeta = (name, content) => {
    const meta = document.createElement('meta');
    meta.setAttribute('property', `og:${name}`);
    meta.setAttribute('content', content);
    return meta;
};