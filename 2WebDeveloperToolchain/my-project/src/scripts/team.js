import { getApiEndpoint } from './config';

const getAllTeams = async () => {
  // eslint-disable-next-line no-undef
  const response = await fetch(`${getApiEndpoint()}team/getAll`);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const teams = await response.json();
  return teams.message;
};

// eslint-disable-next-line import/prefer-default-export
export { getAllTeams };
