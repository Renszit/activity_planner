// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Activity } from '@/types/activities'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

let activities: Array<Activity> = [
    {
        id: '1',
        type: 'Mowing',
        date: new Date(),
        time: 30,
        pitch: 1,
        user: 'John'
    },
    {
        id: '2',
        type: 'Fertilisation',
        date: new Date(),
        time: 30,
        pitch: 2,
        user: 'Tom'
    },
    {
        id: '3',
        type: 'Irrigation',
        date: new Date(),
        time: 30,
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
