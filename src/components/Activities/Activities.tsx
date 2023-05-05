import { Activity } from '@/types/activities';
import { useState, useEffect, MouseEventHandler } from 'react';
import SingleActivity from './SingleActivity';
import AddActivityForm from './AddActivityForm';
import { v4 as uuidv4 } from 'uuid';

const Activities = () => {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    const dataFetch = async () => {
      const res = await fetch('/api/activities');
      const data = await res.json();
      setActivities(data);
    };
    dataFetch();
  }, []);

  const removeActivity: MouseEventHandler = async (e) => {
    const id = e.currentTarget.id;
    const newActivities = activities.filter((act) => act.id !== id);
    setActivities(newActivities);
  };

  const addNewActivity = (activity: Activity) => {
    const newActivity: Activity = {
      ...activity,
      id: uuidv4(),
    };
    setActivities([...activities, newActivity]);
  };

  const addEditedActivity = (activity: Activity) => {
    const newActivities = activities.map((act) =>
      act.id === activity.id ? activity : act
    );
    setActivities(newActivities);
  };

  return (
    <>
      <AddActivityForm onSubmit={addNewActivity} />
      <div className='flex flex-row gap-4 flex-wrap bg-slate-400 rounded-lg align-middle'>
        {activities.map((activity: Activity) => (
          <SingleActivity
            saveEdit={addEditedActivity}
            onClick={removeActivity}
            key={activity.id}
            act={activity}
          />
        ))}
      </div>
    </>
  );
};

export default Activities;
