import { GovData } from "./GovData";

export interface KanbanEntry {
    id: string;
    title: string;
    status: number;
    assignee: Assignee;
}

export interface Assignee {
    name: string;
    image: string;
}


export default function toKanbanEntries(data: GovData[]): KanbanEntry[] {
    return data.map((entry) => ({
        title: entry.titel,
        id: "JIRA-" + entry.id,
        assignee: getAssignee(entry.id),
        status: getEntryStatus(entry.statusId),
    }));
}

function getEntryStatus(id: number): number {
    return [1, 3, 11, 12, 2].indexOf(id);
}

export function getStatusName(id: number): string {
    const statusNames = ['Backlog', 'In Progress', 'Done', 'Review', 'Blocked'];
    return statusNames[id];
}

function getAssignee(id: number): Assignee {
    const assignees = [
        {
            name: 'John Doe',
            image: 'https://randomuser.me/api/portraits/men/87.jpg'
        },
        {
            name: 'Martin Smith',
            image: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        {
            name: 'Alice Johnson',
            image: 'https://randomuser.me/api/portraits/women/81.jpg'
        },
        {
            name: 'Hailey Brown',
            image: 'https://randomuser.me/api/portraits/women/44.jpg'
        },
    ];
    return assignees[id % assignees.length];
}


