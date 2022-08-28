import { Team } from './Team';

export interface Response{
  success: boolean;
  message: Array<Team>;
}