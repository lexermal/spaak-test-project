"use client";

import Card from './Card';
import { KanbanEntry } from '@/utils/KanbanEntryMapping';
import DraggableLayout from 'react-draggable-layout';

interface Props {
    entries: KanbanEntry[];
    onChange: (id: string, status: number) => void
}

interface KanbanComponent {
    id: string;
    col: number;
    component: JSX.Element;
}

export default function Kanban({ entries, onChange }: Props) {

    const components: KanbanComponent[] = entries.map((entry) => {
        return {
            id: entry.id,
            col: entry.status,
            component: <Card
                id={entry.id}
                title={entry.title}
                assignee={entry.assignee} />
        };
    });

    const onEntryStatusChange = (updatedEntries: KanbanComponent[]) => {
        // Find the entry that changed status
        const entry = updatedEntries.filter((entry) => {
            return entry.col !== entries.find((e) => e.id === entry.id)?.status;
        });
        onChange(entry[0].id, entry[0].col);
    };

    return (
        <DraggableLayout
            columns={5}
            draggable={true}
            components={components}
            onChange={onEntryStatusChange} />
    );
}