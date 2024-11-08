import { Assignee } from '@/utils/KanbanEntryMapping';
import Image from 'next/image';

interface Props {
    id: string;
    title: string;
    assignee: Assignee;
}

export default function Card({ title, id, assignee }: Props): JSX.Element {
    return (
        <div className="h-30 bg-blue-300 rounded-xl p-6 shadow-md flex flex-col">
            <span className='mb-1 text-sm'>{id}</span>
            <span>{title}</span>
            <div className="flex items-center mt-3">
                <Image
                    width={24}
                    height={24}
                    alt="assignee"
                    src={assignee.image}
                    className="rounded-full h-6 w-6 mr-1" />
                <span>{assignee.name}</span>
            </div>
        </div>
    );
}
