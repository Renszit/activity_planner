import { Activity } from '@/types/activities';
import dayjs from 'dayjs';
import { useState } from 'react';

type SingleActivityProps = {
  act: Activity;
  onClick?: React.MouseEventHandler;
  saveEdit: (activity: Activity) => void;
};

const SingleActivity = ({ act, onClick, saveEdit }: SingleActivityProps) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [activity, setActivity] = useState(act);

  const handleSave = () => {
    saveEdit(activity);
    setIsEditMode(false);
  };

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setActivity((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCancel = () => {
    setActivity(act);
    setIsEditMode(false);
  };

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  if (isEditMode) {
    return (
      <div className='relative flex flex-col m-4 bg-green-200 p-4 rounded-lg w-64'>
        <h2 className='font-bold text-xl'>Edit Activity</h2>
        <select
          name='type'
          value={activity.type}
          onChange={handleChange}
          className='mt-2 p-1 border rounded'
        >
          <option value='Mowing'>Mowing</option>
          <option value='Fertilisation'>Fertilisation</option>
          <option value='Irrigation'>Irrigation</option>
          <option value='Aeration'>Aeration</option>
        </select>
        <input
          type='datetime-local'
          name='date'
          value={dayjs(activity.date).format('YYYY-MM-DDTHH:mm')}
          onChange={handleChange}
          className='mt-2 p-1 border rounded'
        />
        <select
          name='pitch'
          value={activity.pitch}
          onChange={handleChange}
          className='mt-2 p-1 border rounded'
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
        <select
          name='user'
          value={activity.user}
          onChange={handleChange}
          className='mt-2 p-1 border rounded'
        >
          <option value='John'>John</option>
          <option value='Tom'>Tom</option>
          <option value='Tony'>Tony</option>
        </select>
        <button
          onClick={handleSave}
          className='mt-2 bg-green-500 text-white p-1 rounded hover:bg-green-600'
        >
          Save
        </button>
        <button
          onClick={handleCancel}
          className='mt-2 bg-red-500 text-white p-1 rounded hover:bg-red-600'
        >
          Cancel
        </button>
      </div>
    );
  }

  return (
    <div
      onClick={handleEditClick}
      className='relative flex flex-col m-4 bg-green-200 hover:bg-teal-200 cursor-pointer p-4 rounded-lg w-64'
    >
      <button
        id={act.id}
        onClick={onClick}
        className='absolute top-2 right-2 text-gray-600 cursor-pointer focus:outline-none'
      >
        &times;
      </button>
      <h2 className='font-bold text-xl'>{activity.type}</h2>
      <p className='mt-2 text-gray-700'>
        {dayjs(activity.date).format('DD.MM.YYYY')}
      </p>
      <p className='mt-2 font-medium'>pitch: {activity.pitch}</p>
      <p className='text-sm text-gray-700'>{activity.user}</p>
    </div>
  );
};

export default SingleActivity;
