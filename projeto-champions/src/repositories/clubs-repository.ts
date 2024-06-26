import { ClubModel } from "../models/club-model";
import fs from "fs/promises";
const filePath = './src/data/clubs.json';

export const findAllClubs = async (): Promise<ClubModel[]> => {
  const data = await fs.readFile(filePath, "utf-8");
  const clubs: ClubModel[] = JSON.parse(data);
  return clubs;
};

export const findClubById = async (
  id: number
): Promise<ClubModel | undefined> => {
  const clubs = await findAllClubs()
  return clubs.find((player) => player.id === id);
};

export const insertClub = async (player: ClubModel): Promise<void> => {
  try {
    const database = await findAllClubs();
    database.push(player);
    await fs.writeFile(filePath, JSON.stringify(database, null, 2), 'utf-8');
    console.log('Club inserted successfully');
  } catch (error) {
    console.error('Error inserting Club:', error);
  }
};

export const deleteOneClub = async (id: number): Promise<boolean> => {
  try {
    const database = await findAllClubs();
    const index = database.findIndex((p) => p.id === id);

    if (index !== -1) {
      database.splice(index, 1);
      await fs.writeFile(filePath, JSON.stringify(database, null, 2), 'utf-8');
      console.log(`Club with id ${id} deleted successfully`);
      return true;
    }

    console.log(`Club with id ${id} not found`);
    return false;
  } catch (error) {
    console.error('Error deleting club:', error);
    return false;
  }
};

export const findAndModifyClub = async (
  id: number,
  newName: string
): Promise<ClubModel | null> => {
  try {
    const database = await findAllClubs();
    const clubIndex = database.findIndex((club) => club.id === id);

    if (clubIndex !== -1) {
      database[clubIndex].name = newName;
      await fs.writeFile(filePath, JSON.stringify(database, null, 2), 'utf-8');
      console.log(`Club with id ${id} updated successfully`);
      return database[clubIndex];
    }

    console.log(`Club with id ${id} not found`);
    return null;
  } catch (error) {
    console.error('Error updating club:', error);
    return null;
  }
};