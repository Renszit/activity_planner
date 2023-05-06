export type ActivityType = 'Mowing' | 'Fertilisation' | 'Irrigation' | 'Aeration' ;
export type ActivityUser = 'John' | 'Tom' | 'Tony';
export type ActivityPitch = 1 | 2 | 3;
import {Dayjs} from 'dayjs';

export interface Activity {
    id: string ;
    type: ActivityType;
    date: Dayjs;
    pitch: ActivityPitch;
    user: ActivityUser;
}