import { type CollectionEntry } from 'astro:content';
import { slugify } from './common-utils';

type TaggedEntry = CollectionEntry<'blog'> | CollectionEntry<'news'> | CollectionEntry<'projects'>;

export function sortItemsByDateDesc(itemA: TaggedEntry, itemB: TaggedEntry) {
    return new Date(itemB.data.publishDate).getTime() - new Date(itemA.data.publishDate).getTime();
}

export function getAllTags(items: TaggedEntry[]) {
    const tags: string[] = [...new Set(items.flatMap((item) => item.data.tags || []).filter(Boolean))];
    return tags
        .map((tag) => ({ name: tag, id: slugify(tag) }))
        .filter((obj, pos, arr) => arr.map((mapObj) => mapObj.id).indexOf(obj.id) === pos);
}

export function getItemsByTag<T extends TaggedEntry>(items: T[], tagId: string): T[] {
    return items.filter((item) => (item.data.tags || []).map((tag) => slugify(tag)).includes(tagId));
}

// Kept for backward compatibility
export function getPostsByTag(posts: CollectionEntry<'blog'>[], tagId: string) {
    return getItemsByTag(posts, tagId);
}
