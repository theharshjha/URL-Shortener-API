import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

export function writeCode(url, code) {
    return prisma.links.create({
        data: {
            url,
            code
        }
    });
}

export function readCode(code) {
    return prisma.links.findUnique({
        where: {
            code
        }
    });
}

export async function resetDatabase() {
  try {
    await prisma.links.deleteMany();
    console.log('DB cleared on startup');
  } catch (err) {
    console.error('Failed to clear DB:');
    process.exit(1)
  }
}

