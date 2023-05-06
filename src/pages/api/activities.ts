// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Activity } from '@/types/activities'
import dayjs from 'dayjs'
import type { NextApiRequest, NextApiResponse } from 'next'

let activities: Array<Activity> = [
    {
        id: '1',
        type: 'Mowing',
        date: dayjs(),
        pitch: 1,
        user: 'John'
    },
    {
        id: '2',
        type: 'Fertilisation',
        date: dayjs(),
      
        pitch: 2,
        user: 'Tom'
    },
    {
        id: '3',
        type: 'Irrigation',
        date: dayjs(),
        pitch: 3,
        user: 'Tony'
    }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Activity>>
) {
  res.status(200).json(activities)
}
