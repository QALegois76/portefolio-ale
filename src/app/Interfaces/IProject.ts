import { Timestamp } from "rxjs";

export interface IProject
{
    name: string;
    description: string;
    icon: string;
    date: Date;
    images : IDescriptedMedia[];
}

export interface IDescriptedMedia
{
    icon: string;
    description: string;
    type: EMediaType;
}


export enum EMediaType
{
    Image,
    Video,
    Text
}