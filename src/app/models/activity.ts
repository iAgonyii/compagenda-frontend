import {Note} from './note';

export class Activity {
  id: number;
  category: string;
  starttime: Date;
  endtime: Date;
  userId: number;
  teamId?: number;
  notes: Note[];
}
