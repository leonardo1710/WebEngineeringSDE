import { getApiEndpoint } from '@/config/config';

export async function getAllTeams() {
  const response = await fetch(`${getApiEndpoint()}team/getAll`);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const teams = await response.json();
  return teams.message;
}
