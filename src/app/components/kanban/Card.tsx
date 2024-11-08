import { Assignee } from '@/utils/KanbanEntryMapping';
import Image from 'next/image';

interface Props {
    id: string;
    title: string;
    assignee: Assignee;
}

export default function Card({ title, id, assignee }: Props): JSX.Element {
    return (
        <div className="h-30 bg-blue-900 rounded-xl p-4 shadow-md flex flex-col cursor-pointer">
            <span className='mb-1 text-sm text-gray-300'>{id}</span>
            <span>{title}</span>
            <div className="flex items-center mt-3">
                <Image
                    width={24}
                    height={24}
                    alt="assignee"
                    src={assignee.image}
                    className="rounded-full h-6 w-6 mr-1" />
                <span className='text-gray-300'>{assignee.name}</span>
            </div>
        </div>
    );
}
