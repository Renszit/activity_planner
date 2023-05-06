import {
  Activity,
  ActivityType,
  ActivityUser,
  ActivityPitch,
} from '@/types/activities';
import dayjs, { Dayjs } from 'dayjs';

import { useState } from 'react';

interface Props {
  onSubmit: (activity: Activity) => void;
}

const AddActivityForm: React.FC<Props> = ({ onSubmit }) => {
  const [type, setType] = useState<ActivityType>('Mowing');
  const [date, setDate] = useState<Dayjs>(dayjs());
  const [user, setUser] = useState<ActivityUser>('John');
  const [pitch, setPitch] = useState<ActivityPitch>(1);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newActivity: Activity = { id: '', type, date, user, pitch };
    onSubmit(newActivity);
  };

  return (
    <form
      className='bg-white border rounded-lg flex-3 p-6 space-y-4 my-4 place-content-center max-h-96'
      onSubmit={handleSubmit}
    >
      <div className='flex flex-col'>
        <label htmlFor='type' className='text-gray-700'>
          Type
        </label>
        <select
          id='type'
          value={type}
          onChange={(event) => setType(event.target.value as ActivityType)}
          className='rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-1'
        >
          <option value='Mowing'>Mowing</option>
          <option value='Fertilisation'>Fertilisation</option>
          <option value='Irrigation'>Irrigation</option>
          <option value='Aeration'>Aeration</option>
        </select>
      </div>

      <div className='flex flex-col'>
        <label htmlFor='date' className='text-gray-700'>
          Date
        </label>
        <input
          id='date'
          type='datetime-local'
          value={dayjs(date).format('YYYY-MM-DDTHH:mm')}
          onChange={(event) => setDate(dayjs(event.target.value))}
          className='rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-1'
        />
      </div>
      <div className='flex flex-col'>
        <label htmlFor='user' className='text-gray-700'>
          User
        </label>
        <select
          id='user'
          value={user}
          onChange={(event) => setUser(event.target.value as ActivityUser)}
          className='rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-1'
        >
          <option value='John'>John</option>
          <option value='Tom'>Tom</option>
          <option value='Tony'>Tony</option>
        </select>
      </div>
      <div className='flex flex-col'>
        <label htmlFor='pitch' className='text-gray-700'>
          Pitch
        </label>
        <select
          id='pitch'
          value={pitch}
          onChange={(event) =>
            setPitch(Number(event.target.value) as ActivityPitch)
          }
          className='rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-1'
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
      </div>
      <button
        type='submit'
        className='bg-blue-500 w-full  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
      >
        Add task
      </button>
    </form>
  );
};

export default AddActivityForm;
