import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try {
        return Response.json(await prisma.govData.findMany());
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.error('Error fetching data from the database: ', error.message);
        return Response.json({ error: 'Failed to fetch data from the database' }, { status: 500 });
    }
}