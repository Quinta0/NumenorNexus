// lib/api.ts
import { ContentType, Section, Note, Page } from '@/types/types';
import contentData from '@/data/content.json';

const data: Record<string, ContentType[]> = {
    characters: [
        { id: 'aragorn', name: 'Aragorn', race: 'Men', description: 'King of Gondor', imageUrl: 'aragorn.webp' },
        { id: 'frodo', name: 'Frodo Baggins', race: 'Hobbit', description: 'Ring-bearer', imageUrl: 'frodo.webp' },
        { id: 'gandalf', name: 'Gandalf', race: 'Maia', description: 'Wizard and leader of the Fellowship', imageUrl: 'gandalf.webp' },
        { id: 'legolas', name: 'Legolas', race: 'Elf', description: 'Prince of the Woodland Realm', imageUrl: 'legolas.avif' },
        { id: 'gimli', name: 'Gimli', race: 'Dwarf', description: 'Dwarf warrior and member of the Fellowship', imageUrl: 'gimli.avif' },
        { id: 'samwise', name: 'Samwise Gamgee', race: 'Hobbit', description: 'Frodo\'s loyal companion', imageUrl: 'samwise.webp' },
        { id: 'saruman', name: 'Saruman', race: 'Maia', description: 'Corrupted wizard', imageUrl: 'saruman.jpg' },
        { id: 'gollum', name: 'Gollum', race: 'Hobbit', description: 'Former Ring-bearer', imageUrl: 'gollum.webp' },
        { id: 'boromir', name: 'Boromir', race: 'Men', description: 'Son of the Steward of Gondor', imageUrl: 'boromir.jpg' },
        { id: 'arwen', name: 'Arwen', race: 'Elf', description: 'Elven princess of Rivendell', imageUrl: 'arwen.jpg' },
        { id: 'faramir', name: 'Faramir', race: 'Men', description: 'Brother of Boromir', imageUrl: 'faramir.avif' },
        { id: 'eowyn', name: 'Éowyn', race: 'Men', description: 'Shieldmaiden of Rohan', imageUrl: 'eowyn.webp' },
        { id: 'theoden', name: 'Théoden', race: 'Men', description: 'King of Rohan', imageUrl: 'theoden.avif' },
        { id: 'melkor', name: 'Melkor', race: 'Valar', description: 'Original Dark Lord', imageUrl: 'melkor.webp' },
        { id: 'sauron', name: 'Sauron', race: 'Maia', description: 'Dark Lord of Mordor', imageUrl: 'sauron.avif' },
    ],
    locations: [
        { id: 'rivendell', name: 'Rivendell', description: 'Elven outpost in Middle-earth', imageUrl: 'rivendell.png' },
        { id: 'minas-tirith', name: 'Minas Tirith', description: 'Capital of Gondor', imageUrl: 'minas-tirith.jpg' },
        { id: 'mordor', name: 'Mordor', description: 'Sauron\'s realm', imageUrl: 'mordor.webp' },
        { id: 'shire', name: 'The Shire', description: 'Homeland of the Hobbits', imageUrl: 'shire.jpg' },
        { id: 'rohan', name: 'Rohan', description: 'Kingdom of the Horse-lords', imageUrl: 'rohan.jpg' },
        { id: 'helms-deep', name: 'Helm\'s Deep', description: 'Fortress of Rohan', imageUrl: 'helms-deep.jpg' },
        { id: 'lothlorien', name: 'Lothlórien', description: 'Elven realm of Lady Galadriel', imageUrl: 'lothlorien.webp' },
        { id: 'gondor', name: 'Gondor', description: 'South-kingdom of the Dúnedain', imageUrl: 'gondor.jpg' },
        { id: 'isengard', name: 'Isengard', description: 'Saruman\'s stronghold', imageUrl: 'isengard.jpg' },
        { id: 'fangorn', name: 'Fangorn Forest', description: 'Ancient forest home to the Ents', imageUrl: 'fangorn.jpg' },
        { id: 'barad-dur', name: 'Barad-dûr', description: 'Sauron\'s Dark Tower', imageUrl: 'barad-dur.jpg'},
        { id: 'moria', name: 'Moria', description: 'Ancient Dwarven city', imageUrl: 'moria.jpg' },
        { id: 'dead-marshes', name: 'Dead Marshes', description: 'Haunted marshes in Mordor', imageUrl: 'dead-marshes.jpg' },
        { id: 'mount-doom', name: 'Mount Doom', description: 'Volcano in Mordor', imageUrl: 'mount-doom.jpg' },
        { id: 'weathertop', name: 'Weathertop', description: 'Ancient watchtower in Eriador', imageUrl: 'weathertop.jpg' },
        { id: 'bree', name: 'Bree', description: 'Village in Eriador', imageUrl: 'bree.jpg' },
        { id: 'erebor', name: 'Erebor', description: 'Lonely Mountain', imageUrl: 'erebor.webp' },
        { id: 'valinor', name: 'Valinor', description: 'Undying Lands', imageUrl: 'valinor.jpg' },
        { id: 'eagles-eyrie', name: 'Eagles\' Eyrie', description: 'Home of the Great Eagles', imageUrl: 'eagles-eyrie.jpg' },
        { id: 'grey-havens', name: 'Grey Havens', description: 'Elven port in the West', imageUrl: 'grey-havens.jpg' },
        { id: 'glittering-caves', name: 'Glittering Caves', description: 'Caves behind Helm\'s Deep', imageUrl: 'glittering-caves.jpg' },
        { id: 'angband', name: 'Angband', description: 'Fortress of Morgoth', imageUrl: 'angband.jpg' },
        { id: 'numenor', name: 'Númenor', description: 'Island kingdom of the Dúnedain', imageUrl: 'numenor.webp' },
        { id: 'dol-guldur', name: 'Dol Guldur', description: 'Sauron\'s fortress in Mirkwood', imageUrl: 'dol-guldur.jpg' },
        { id: 'lothgallen', name: 'Lothgallen', description: 'Ruined city in Gondor', imageUrl: 'lothgallen.jpg' },
        { id: 'dunharrow', name: 'Dunharrow', description: 'Refuge of the Rohirrim', imageUrl: 'dunharrow.jpg' },
        { id: 'gladden-fields', name: 'Gladden Fields', description: 'Site of Isildur\'s death', imageUrl: 'gladden-fields.jpg' },
        { id: 'valmar', name: 'Valmar', description: 'City of the Valar', imageUrl: 'valmar.jpg' },
        { id: 'tirion', name: 'Tirion', description: 'City of the Noldor', imageUrl: 'tirion.jpg' },
        { id: 'nargothrond', name: 'Nargothrond', description: 'Elven stronghold in Beleriand', imageUrl: 'nargothrond.jpg' },
        { id: 'menegroth', name: 'Menegroth', description: 'Elven city in Doriath', imageUrl: 'menegroth.jpg' },
    ],
    events: [
        { id: 'war-of-the-ring', name: 'War of the Ring', date: 'T.A. 3018-3019', description: 'The final war against Sauron', imageUrl: 'war-of-the-ring.jpg' },
        { id: 'council-of-elrond', name: 'Council of Elrond', date: 'T.A. 3018', description: 'Meeting to decide the fate of the One Ring', imageUrl: 'council-of-elrond.jpg' },
        { id: 'battle-of-helms-deep', name: 'Battle of Helm\'s Deep', date: 'T.A. 3019', description: 'Major battle in the War of the Ring', imageUrl: 'battle-of-helms-deep.jpg' },
        { id: 'siege-of-minas-tirith', name: 'Siege of Minas Tirith', date: 'T.A. 3019', description: 'Climactic battle of the War of the Ring', imageUrl: 'siege-of-minas-tirith.jpg' },
        { id: 'destruction-of-the-one-ring', name: 'Destruction of the One Ring', date: 'T.A. 3019', description: 'End of Sauron\'s power', imageUrl: 'destruction-of-the-one-ring.webp' },
        { id: 'journey-of-the-fellowship', name: 'Journey of the Fellowship', date: 'T.A. 3018-3019', description: 'The quest to destroy the One Ring', imageUrl: 'journey-of-the-fellowship.jpg' },
        { id: 'fall-of-isengard', name: 'Fall of Isengard', date: 'T.A. 3019', description: 'Ents\' attack on Isengard', imageUrl: 'fall-of-isengard.jpg' },
        { id: 'battle-of-pelennor-fields', name: 'Battle of the Pelennor Fields', date: 'T.A. 3019', description: 'Battle outside Minas Tirith', imageUrl: 'battle-of-pelennor-fields.jpg' },
        { id: 'coronation-of-aragorn', name: 'Coronation of Aragorn', date: 'T.A. 3019', description: 'Aragorn becomes King of Gondor', imageUrl: 'coronation-of-aragorn.jpg' },
        { id: 'scouring-of-the-shire', name: 'Scouring of the Shire', date: 'T.A. 3019', description: 'Hobbits liberate the Shire from Saruman', imageUrl: 'scouring-of-the-shire.jpg' },

    ],
    items: [
        { id: 'one-ring', name: 'The One Ring', description: 'The master ring forged by Sauron', imageUrl: 'one-ring.jpg' },
        { id: 'sting', name: 'Sting', description: 'Frodo\'s Elven sword', imageUrl: 'sting.jpg' },
        { id: 'mithril', name: 'Mithril Shirt', description: 'Frodo\'s protective chainmail', imageUrl: 'mithril.jpg' },
        { id: 'phial-of-galadriel', name: 'Phial of Galadriel', description: 'Light given to Frodo by Galadriel', imageUrl: 'phial-of-galadriel.jpg' },
        { id: 'elven-cloak', name: 'Elven Cloak', description: 'Cloak given to the Fellowship by Galadriel', imageUrl: 'elven-cloak.jpg' },
        { id: 'ring-of-barrow-wights', name: 'Ring of Barrow-wights', description: 'Ring found in the Barrow-downs', imageUrl: 'ring-of-barrow-wights.jpg' },
    ],
    races: [
        { id: 'elves', name: 'Elves', description: 'Immortal beings of Middle-earth', imageUrl: 'elves.jpg' },
        { id: 'men', name: 'Men', description: 'Mortal inhabitants of Middle-earth', imageUrl: 'men.jpg' },
        { id: 'dwarves', name: 'Dwarves', description: 'Sturdy and secretive race', imageUrl: 'dwarves.jpg' },
        { id: 'hobbits', name: 'Hobbits', description: 'Small and peaceful people', imageUrl: 'hobbits.jpg' },
        { id: 'orcs', name: 'Orcs', description: 'Corrupted and violent creatures', imageUrl: 'orcs.jpg' },
        { id: 'ent', name: 'Ents', description: 'Ancient tree-like beings', imageUrl: 'ents.jpg' },
        { id: 'maia', name: 'Maia', description: 'Lesser Ainur', imageUrl: 'maia.jpg' },
        { id: 'valar', name: 'Valar', description: 'Powers of the world', imageUrl: 'valar.jpg' },
    ],
    artifacts: [
        { id: 'anduril', name: 'Andúril', description: 'Sword of Aragorn, reforged from Narsil', imageUrl: 'narsil.webp' },
        { id: 'palantir', name: 'Palantír', description: 'Seeing-stones of Númenor', imageUrl: 'palantir.jpg' },
        { id: 'silmarils', name: 'Silmarils', description: 'Three jewels crafted by Fëanor', imageUrl: 'silmarils.webp' },
        { id: 'white-tree', name: 'White Tree of Gondor', description: 'Symbol of Gondor', imageUrl: 'white-tree.jpg' },
        { id: 'black-arrow', name: 'Black Arrow', description: 'Arrow used by Bard to kill Smaug', imageUrl: 'black-arrow.jpg' },
        { id: 'necklace-of-girion', name: 'Necklace of Girion', description: 'A necklace given to Bard', imageUrl: 'necklace-of-girion.jpg' },
        { id: 'wargs', name: 'Wargs', description: 'Evil wolves allied with the Orcs', imageUrl: 'wargs.jpg' },
        { id: 'arda', name: 'Arda', description: 'The world of Middle-earth', imageUrl: 'arda.jpg' },
    ],
    languages: [
        { id: 'quenya', name: 'Quenya', description: 'High-elven language', imageUrl: 'quenya.jpg' },
        { id: 'sindarin', name: 'Sindarin', description: 'Grey-elven language', imageUrl: 'sindarin.jpg' },
        { id: 'khuzdul', name: 'Khuzdul', description: 'Dwarven language', imageUrl: 'khuzdul.jpg' },
        { id: 'black-speech', name: 'Black Speech', description: 'Language of Mordor and Sauron', imageUrl: 'black-speech.jpg' },
        { id: 'entish', name: 'Entish', description: 'Language of the Ents', imageUrl: 'entish.jpg' },
        { id: 'westron', name: 'Westron', description: 'Common speech of Middle-earth', imageUrl: 'westron.jpg' },
    ],
};

export async function getContentData(contentType: string, slug: string): Promise<Page> {
    if (!contentType || !slug) {
        throw new Error('Invalid content type or slug');
    }

    const contentTypeData = data[contentType];
    if (!contentTypeData) {
        throw new Error(`Content type "${contentType}" not found`);
    }

    const item = contentTypeData.find(item => item.id === slug);
    if (!item) {
        throw new Error(`Content with slug "${slug}" not found in "${contentType}"`);
    }

    const itemContent = contentData[contentType]?.[slug] || contentData[contentType]?.[item.id];
    if (!itemContent) {
        throw new Error(`Content for "${slug}" not found in content data`);
    }

    return {
        title: item.name,
        content: Array.isArray(itemContent.mainContent)
            ? itemContent.mainContent
            : [{ heading: "Description", content: itemContent.mainContent || item.description }],
        sections: itemContent.relevantSections || [],
        notes: itemContent.notes || [],
        imageUrl: item.imageUrl,
    };
}

export async function getContentList(contentType: string): Promise<{ contentType: string }[]> {
    const validContentTypes = ['characters', 'locations', 'events', 'items', 'races', 'artifacts', 'languages', 'chapters'];
    if (!validContentTypes.includes(contentType)) {
        throw new Error(`Invalid content type: ${contentType}. Valid content types are: ${validContentTypes.join(', ')}`);
    }
    return data[contentType].map(item => ({...item, contentType})) || [];
}