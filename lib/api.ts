import { ContentType, Section, Note, Page } from '@/types/types';
import contentData from '@/data/content.json';

const data: Record<string, ContentType[]> = {
    characters: [
        { id: 'aragorn', name: 'Aragorn', race: 'Men', description: 'King of Gondor', imageUrl: 'aragorn.webp', content: 'Aragorn, son of Arathorn, is a ranger of the North and the heir to the throne of Gondor. He played a crucial role in the War of the Ring and was crowned King Elessar after the defeat of Sauron.' },
        { id: 'frodo', name: 'Frodo Baggins', race: 'Hobbit', description: 'Ring-bearer', imageUrl: 'frodo.jpg', content: 'Frodo Baggins is a hobbit of the Shire and the main protagonist of The Lord of the Rings. He is chosen to carry the One Ring to Mount Doom to destroy it and end Sauron\'s power.' },
        { id: 'gandalf', name: 'Gandalf', race: 'Maia', description: 'Wizard and leader of the Fellowship', imageUrl: 'gandalf.jpg', content: 'Gandalf the Grey, later Gandalf the White, is a Maia sent by the Valar to assist the Free Peoples of Middle-earth in their struggle against Sauron. He is a wise and powerful wizard, and a leader of the Fellowship of the Ring.' },
        { id: 'legolas', name: 'Legolas', race: 'Elf', description: 'Prince of the Woodland Realm', imageUrl: 'legolas.avif', content: 'Legolas is an Elven prince from the Woodland Realm and a member of the Fellowship of the Ring. He is renowned for his keen eyesight, excellent archery skills, and deep loyalty to his friends.' },
        { id: 'gimli', name: 'Gimli', race: 'Dwarf', description: 'Dwarf warrior and member of the Fellowship', imageUrl: 'gimli.avif', content: 'Gimli, son of Glóin, is a Dwarf warrior and a member of the Fellowship of the Ring. He forms an unlikely but strong friendship with Legolas and plays a key role in the War of the Ring.' },
        { id: 'samwise', name: 'Samwise Gamgee', race: 'Hobbit', description: 'Frodo\'s loyal companion', imageUrl: 'samwise.jpg', content: 'Samwise Gamgee, known as Sam, is Frodo Baggins\' loyal gardener and companion. His unwavering loyalty, bravery, and resourcefulness are crucial in the quest to destroy the One Ring.' },
        { id: 'saruman', name: 'Saruman', race: 'Maia', description: 'Corrupted wizard', imageUrl: 'saruman.jpg', content: 'Saruman the White is a Maia and the head of the Istari order. Initially a leader in the fight against Sauron, he is eventually corrupted by his desire for power and becomes an enemy to the Free Peoples of Middle-earth.' },
        { id: 'gollum', name: 'Gollum', race: 'Hobbit', description: 'Former Ring-bearer', imageUrl: 'gollum.webp', content: 'Gollum, originally known as Sméagol, is a creature corrupted by the power of the One Ring. His obsession with the Ring drives much of the plot in The Lord of the Rings.' },
        { id: 'boromir', name: 'Boromir', race: 'Men', description: 'Son of the Steward of Gondor', imageUrl: 'boromir.jpg', content: 'Boromir is the eldest son of Denethor, the Steward of Gondor. A brave and noble warrior, he joins the Fellowship of the Ring but struggles with the temptation of the One Ring.' },
        { id: 'arwen', name: 'Arwen', race: 'Elf', description: 'Elven princess of Rivendell', imageUrl: 'arwen.jpg', content: 'Arwen is the daughter of Elrond and Celebrian, and the granddaughter of Galadriel. She is an immortal Elf, while her love, Aragorn, is a mortal human. Their love story is one of the central themes of The Lord of the Rings, and Arwen\'s choice to forsake her immortality for Aragorn is a key moment in the story.' },
    ],
    locations: [
        { id: 'rivendell', name: 'Rivendell', description: 'Elven outpost in Middle-earth', imageUrl: 'rivendell.jpg', content: 'Rivendell is an Elven refuge in Middle-earth, founded by Elrond. It is a place of peace and healing, and serves as a sanctuary for the Fellowship before their journey.' },
        { id: 'minas-tirith', name: 'Minas Tirith', description: 'Capital of Gondor', imageUrl: 'minas-tirith.jpg', content: 'Minas Tirith, also known as the White City, is the capital of Gondor. It is a fortress city and the site of the climactic battle in the War of the Ring.' },
        { id: 'mordor', name: 'Mordor', description: 'Sauron\'s realm', imageUrl: 'mordor.webp', content: 'Mordor is the dark realm of Sauron, located in the southeast of Middle-earth. It is a land of ash and fire, dominated by Mount Doom, where the One Ring must be destroyed.' },
        { id: 'shire', name: 'The Shire', description: 'Homeland of the Hobbits', imageUrl: 'shire.jpg', content: 'The Shire is a peaceful, rural region in Eriador, inhabited by Hobbits. It is the home of Frodo Baggins and the starting point of his quest.' },
        { id: 'rohan', name: 'Rohan', description: 'Kingdom of the Horse-lords', imageUrl: 'rohan.jpg', content: 'Rohan is a kingdom of horsemen, known as the Rohirrim, led by King Théoden. Its people are known for their cavalry and played a significant role in the War of the Ring.' },
        { id: 'helms-deep', name: 'Helm\'s Deep', description: 'Fortress of Rohan', imageUrl: 'helms-deep.jpg', content: 'Helm\'s Deep is a fortress in Rohan, famous for the Battle of Helm\'s Deep, where the Rohirrim, aided by Aragorn and his companions, defend against Saruman\'s forces.' },
        { id: 'lothlorien', name: 'Lothlórien', description: 'Elven realm of Lady Galadriel', imageUrl: 'lothlorien.jpg', content: 'Lothlórien is an Elven realm ruled by Lady Galadriel and Lord Celeborn. It is a place of great beauty and magic, offering refuge and gifts to the Fellowship.' },
        { id: 'gondor', name: 'Gondor', description: 'South-kingdom of the Dúnedain', imageUrl: 'gondor.jpg', content: 'Gondor is a major kingdom of Men in Middle-earth, known for its strong fortresses and noble heritage. It plays a crucial role in the defense against Sauron.' },
        { id: 'isengard', name: 'Isengard', description: 'Saruman\'s stronghold', imageUrl: 'isengard.jpg', content: 'Isengard is a fortress controlled by Saruman, located in the northwestern part of Middle-earth. It becomes a base for his treachery against the Free Peoples.' },
        { id: 'fangorn', name: 'Fangorn Forest', description: 'Ancient forest home to the Ents', imageUrl: 'fangorn.jpg', content: 'Fangorn Forest is an ancient, dense forest inhabited by the Ents, tree-like beings led by Treebeard. It plays a significant role in the downfall of Saruman.' },
    ],
    events: [
        { id: 'war-of-the-ring', name: 'War of the Ring', date: 'T.A. 3018-3019', description: 'The final war against Sauron', imageUrl: 'war-of-the-ring.jpg', content: 'The War of the Ring is the central conflict in The Lord of the Rings, involving the forces of Sauron against the Free Peoples of Middle-earth. It culminates in the destruction of the One Ring and the fall of Sauron.' },
        { id: 'council-of-elrond', name: 'Council of Elrond', date: 'T.A. 3018', description: 'Meeting to decide the fate of the One Ring', imageUrl: 'council-of-elrond.jpg', content: 'The Council of Elrond is a meeting held in Rivendell where representatives of the Free Peoples decide on the course of action to destroy the One Ring. It leads to the formation of the Fellowship of the Ring.' },
        { id: 'battle-of-helms-deep', name: 'Battle of Helm\'s Deep', date: 'T.A. 3019', description: 'Major battle in the War of the Ring', imageUrl: 'battle-of-helms-deep.jpg', content: 'The Battle of Helm\'s Deep is a significant conflict in the War of the Ring, where the forces of Rohan, with the aid of Aragorn, Legolas, and Gimli, defend against Saruman\'s army of Uruk-hai.' },
        { id: 'siege-of-minas-tirith', name: 'Siege of Minas Tirith', date: 'T.A. 3019', description: 'Climactic battle of the War of the Ring', imageUrl: 'siege-of-minas-tirith.jpg', content: 'The Siege of Minas Tirith is a major battle in the War of the Ring, where Sauron\'s forces besiege the capital of Gondor. It ends with the arrival of the Riders of Rohan and the Army of the Dead.' },
        { id: 'destruction-of-the-one-ring', name: 'Destruction of the One Ring', date: 'T.A. 3019', description: 'End of Sauron\'s power', imageUrl: 'destruction-of-the-one-ring.jpg', content: 'The Destruction of the One Ring occurs when Frodo Baggins and Samwise Gamgee reach Mount Doom, and the Ring is destroyed in the fires where it was forged, leading to the fall of Sauron.' },
        { id: 'journey-of-the-fellowship', name: 'Journey of the Fellowship', date: 'T.A. 3018-3019', description: 'The quest to destroy the One Ring', imageUrl: 'journey-of-the-fellowship.jpg', content: 'The Journey of the Fellowship follows the quest of the nine members of the Fellowship of the Ring to take the One Ring to Mount Doom and destroy it, facing numerous challenges along the way.' },
        { id: 'fall-of-isengard', name: 'Fall of Isengard', date: 'T.A. 3019', description: 'Ents\' attack on Isengard', imageUrl: 'fall-of-isengard.jpg', content: 'The Fall of Isengard occurs when the Ents, led by Treebeard, attack and destroy Saruman\'s fortress, reclaiming the land for nature and halting Saruman\'s plans.' },
    ],
    items: [
        { id: 'one-ring', name: 'The One Ring', description: 'The master ring forged by Sauron', imageUrl: 'one-ring.jpg', content: 'The One Ring is a powerful artifact created by Sauron to control the other Rings of Power and dominate Middle-earth. It must be destroyed to defeat Sauron.' },
        { id: 'sting', name: 'Sting', description: 'Frodo\'s Elven sword', imageUrl: 'sting.jpg', content: 'Sting is a short sword given to Frodo Baggins by Bilbo. It glows blue in the presence of Orcs and proves to be a valuable weapon in Frodo\'s journey.' },
        { id: 'mithril', name: 'Mithril Shirt', description: 'Frodo\'s protective chainmail', imageUrl: 'mithril.jpg', content: 'The Mithril Shirt is a lightweight and incredibly strong chainmail shirt given to Frodo by Bilbo. It provides essential protection throughout Frodo\'s quest.' },
        { id: 'phial-of-galadriel', name: 'Phial of Galadriel', description: 'Light given to Frodo by Galadriel', imageUrl: 'phial-of-galadriel.jpg', content: 'The Phial of Galadriel is a small crystal vial containing the light of Eärendil\'s star. It is given to Frodo by Galadriel and helps him in moments of darkness and despair.' },
        { id: 'elven-cloak', name: 'Elven Cloak', description: 'Cloak given to the Fellowship by Galadriel', imageUrl: 'elven-cloak.jpg', content: 'Elven Cloaks are magical cloaks given to the members of the Fellowship by Galadriel. They provide camouflage and protection against the elements.' },
        { id: 'ring-of-barrow-wights', name: 'Ring of Barrow-wights', description: 'Ring found in the Barrow-downs', imageUrl: 'ring-of-barrow-wights.jpg', content: 'The Ring of Barrow-wights is a ring found by the Hobbits in the Barrow-downs. It is a relic of ancient times, associated with dark magic and the wights that inhabit the barrows.' },
    ],
    races: [
        { id: 'elves', name: 'Elves', description: 'Immortal beings of Middle-earth', imageUrl: 'elves.jpg', content: 'Elves are an ancient and immortal race in Middle-earth, known for their beauty, wisdom, and connection to nature. They play a crucial role in the history and events of Middle-earth.' },
        { id: 'men', name: 'Men', description: 'Mortal inhabitants of Middle-earth', imageUrl: 'men.jpg', content: 'Men are the mortal race of Middle-earth, known for their strength, bravery, and diversity. They play a significant role in the fight against Sauron and the War of the Ring.' },
        { id: 'dwarves', name: 'Dwarves', description: 'Sturdy and secretive race', imageUrl: 'dwarves.jpg', content: 'Dwarves are a sturdy and secretive race known for their skills in mining and craftsmanship. They are brave warriors and play an important role in the history of Middle-earth.' },
        { id: 'hobbits', name: 'Hobbits', description: 'Small and peaceful people', imageUrl: 'hobbits.jpg', content: 'Hobbits are small, peaceful people who live in the Shire. Known for their love of comfort and simple pleasures, they become unexpected heroes in the fight against Sauron.' },
        { id: 'orcs', name: 'Orcs', description: 'Corrupted and violent creatures', imageUrl: 'orcs.jpg', content: 'Orcs are corrupted and violent creatures, bred by Morgoth and later used by Sauron as soldiers in his armies. They are fierce and ruthless enemies of the Free Peoples.' },
        { id: 'ent', name: 'Ents', description: 'Ancient tree-like beings', imageUrl: 'ents.jpg', content: 'Ents are ancient, tree-like beings who protect the forests of Middle-earth. Led by Treebeard, they play a key role in the War of the Ring, particularly in the destruction of Isengard.' },
        { id: 'maia', name: 'Maia', description: 'Lesser Ainur', imageUrl: 'maia.jpg', content: 'Maiar are lesser Ainur, divine spirits who entered the world to help shape and guide it. Some, like Gandalf and Saruman, took human form to assist in the fight against Sauron.' },
    ],
    artifacts: [
        { id: 'anduril', name: 'Andúril', description: 'Sword of Aragorn, reforged from Narsil', imageUrl: 'narsil.webp', content: 'Andúril, also known as the Flame of the West, is the sword reforged from the shards of Narsil. It is wielded by Aragorn and symbolizes his rightful claim to the throne of Gondor.' },
        { id: 'palantir', name: 'Palantír', description: 'Seeing-stones of Númenor', imageUrl: 'palantir.jpg', content: 'Palantíri are ancient seeing-stones created by the Númenóreans. They allow communication and vision over great distances, but can be dangerous if used by those with ill intent.' },
        { id: 'silmarils', name: 'Silmarils', description: 'Three jewels crafted by Fëanor', imageUrl: 'silmarils.webp', content: 'Silmarils are three brilliant jewels crafted by Fëanor in the First Age. They contain the light of the Two Trees of Valinor and play a central role in the history of Middle-earth.' },
        { id: 'white-tree', name: 'White Tree of Gondor', description: 'Symbol of Gondor', imageUrl: 'white-tree.jpg', content: 'The White Tree of Gondor is a symbol of the kingdom and its line of kings. It stands in Minas Tirith and represents the continuity and resilience of Gondor.' },
        { id: 'black-arrow', name: 'Black Arrow', description: 'Arrow used by Bard to kill Smaug', imageUrl: 'black-arrow.jpg', content: 'The Black Arrow is a special arrow used by Bard the Bowman to kill the dragon Smaug. It is a symbol of hope and heroism in the story of The Hobbit.' },
        { id: 'necklace-of-girion', name: 'Necklace of Girion', description: 'A necklace given to Bard', imageUrl: 'necklace-of-girion.jpg', content: 'The Necklace of Girion is a valuable necklace given to Bard by the Elvenking Thranduil. It symbolizes the alliance and friendship between the Men of Dale and the Elves of Mirkwood.' },
        { id: 'wargs', name: 'Wargs', description: 'Evil wolves allied with the Orcs', imageUrl: 'wargs.jpg', content: 'Wargs are evil wolves often allied with Orcs. They are used as mounts and are known for their ferocity and cunning in battle.' },
        { id: 'arda', name: 'Arda', description: 'The world of Middle-earth', imageUrl: 'arda.jpg', content: 'Arda is the world in which Middle-earth exists. It is created by the Ainur and is the setting for all the events in the stories of The Lord of the Rings and The Silmarillion.' },
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
        content: itemContent.mainContent,
        sections: itemContent.relevantSections,
        notes: itemContent.notes,
        imageUrl: item.imageUrl,
    };
}

export async function getContentList(contentType: string): Promise<ContentType[]> {
    return data[contentType].map(item => ({...item, contentType})) || [];
}