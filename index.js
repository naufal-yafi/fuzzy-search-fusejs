import Fuse from "fuse.js";
import blogs from './blogs.js'

const fuse = new Fuse(blogs, {
    keys: [
        {
            name: 'title',
            weight: 0.4,
        },
        {
            name: 'descriptions',
            weight: 0.2,
        },
        {
            name: 'categories',
            weight: 0.4
        }
    ],
    includeScore: false, 
    threshold: 0.2,
    minMatchCharLength: 3,
});

const search = (query) => {
    if (typeof query !== 'string' || query.length < 3) {
        return 'Minimal 3 karakter';
    }

    const result =  fuse.search(query).map((result) => result.item);

    if (result.length === 0) {
        return 'Keyword yang kamu cari tidak ada';
    } else {
        return result;
    }
}

console.log('Percobaan 1 (Backend): ', search('Backend'));
console.log('------------');
console.log('Percobaan 2 (buat anime): ', search('buat anime'));
console.log('------------');
console.log('Percobaan 3 (Fro): ', search('Fro'));
console.log('------------');


