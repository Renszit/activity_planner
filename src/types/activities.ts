export type ActivityType = 'Mowing' | 'Fertilisation' | 'Irrigation' | 'Aeration' ;
export type ActivityUser = 'John' | 'Tom' | 'Tony';
export type ActivityPitch = 1 | 2 | 3;

export interface Activity {
    id: string ;
    type: ActivityType;
    date: Date;
    pitch: ActivityPitch;
    user: ActivityUser;
}