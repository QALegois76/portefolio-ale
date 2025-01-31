export interface IProject
{
    name: string;
    description: string;
    icon: string;
    images : IDescriptImage[];
}

export interface IDescriptImage
{
    path: string;
    description: string;
    title: string;
}