// types/types.ts
interface BaseContent {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
}

export interface Region extends BaseContent {}

export interface Character extends BaseContent {
    race: string;
}

export interface Event extends BaseContent {
    date: string;
}

export interface Location extends BaseContent {}

export interface Race extends BaseContent {}

export interface Item extends BaseContent {}

export interface Section {
    title: string;
    description: string;
}

export interface Note {
    title: string;
    description: string;
}

export interface ContentSection {
    heading: string;
    content: string;
}

export interface Page {
    title: string;
    content: ContentSection[];
    sections: Section[];
    notes: Note[];
    imageUrl: string;
}

export interface Chapter {
    title: string;
    content: string;
}

export interface PageData {
    title: string;
    content: string;
    slug: string;
}

export type ContentType = Region | Character | Event | Location | Race | Item | Chapter | PageData;