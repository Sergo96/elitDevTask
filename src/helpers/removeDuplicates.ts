export function removeDuplicates<T>(array: T[]): T[] {
    const set = new Set<T>();
    const uniqueArray: T[] = [];

    for (const item of array) {
        if (!set.has(item)) {
            set.add(item);
            uniqueArray.push(item);
        }
    }

    return uniqueArray;
}
