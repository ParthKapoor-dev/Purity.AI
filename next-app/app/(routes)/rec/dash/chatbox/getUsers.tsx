"use server"

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function getUsersByIds(userIds: string[]) {
  try {
    // Fetch users with their profile data
    const users = await prisma.user.findMany({
      where: {
        id: {
          in: userIds, // Match user IDs
        },
      },
      include: {
        profile: true, // Include the related Profile model
      },
    });

    return users;
  } catch (error) {
    console.error('Error fetching users with profiles:', error);
    return [];
  }
}
