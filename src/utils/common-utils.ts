export function slugify(input?: string) {
    if (!input) return '';

    // make lower case and trim
    var slug = input.toLowerCase().trim();

    // remove accents from charaters
    slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    // replace invalid chars (keep Chinese/CJK, alphanumeric, spaces, hyphens) with spaces
    slug = slug.replace(/[^a-z0-9\u4e00-\u9fff\u3400-\u4dbf\s-]/g, ' ').trim();

    // replace multiple spaces or hyphens with a single hyphen
    slug = slug.replace(/[\s-]+/g, '-');

    return slug;
}
