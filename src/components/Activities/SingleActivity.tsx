import { Activity } from '@/types/activities';
import dayjs from 'dayjs';

const SingleActivity = ({ act }: { act: Activity }) => {
  return (
    <div className='flex flex-col m-4 bg-green-200 hover:bg-teal-200 p-2 rounded-lg h-40'>
      <h2>{act.type}</h2>
      <p>{act.date.toString()}</p>
    </div>
  );
};

export default SingleActivity;
