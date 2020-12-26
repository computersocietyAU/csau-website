export interface Card {
    id: number;
    title: string;
    description: string;
    date: string;
    preview: string;
    interviewee?: string;
    recent?: string;
    eventImages?:boolean;
    // Cursor
    author?:string;
    department?:string;
}