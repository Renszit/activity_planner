import { Activity } from '@/types/activities';
import { useState, useEffect } from 'react';
import SingleActivity from './SingleActivity';

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      const res = await fetch('/api/activities');
      const data = await res.json();
      setActivities(data);
    };
    dataFetch();
  }, []);

  if (activities.length === 0) return <p>Loading...</p>;

  return (
    <div className='flex flex-row gap-4 flex-wrap  bg-slate-400 rounded-lg align-middle'>
      {activities.map((activity: Activity) => (
        <SingleActivity key={activity.id} act={activity} />
      ))}
    </div>
  );
};

export default Activities;
