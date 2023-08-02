import { Activity } from "@/types/activities";
import { useState, useEffect, MouseEventHandler } from "react";
import SingleActivity from "./SingleActivity";
import AddActivityForm from "./AddActivityForm";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

const Activities = () => {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    const dataFetch = async () => {
      const res = await fetch("/api/activities");
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
    const pitchTaken = activities.find((act) => {
      return act.pitch == activity.pitch &&
        dayjs(act.date).isSame(activity.date, "day")
        ? act
        : false;
    });

    if (pitchTaken) {
      return alert(
        `Pitch ${pitchTaken.pitch} already worked on on ${dayjs(
          pitchTaken.date
        ).format("DD/MM/YYYY")} by ${pitchTaken.user}`
      );
    }

    const newActivity: Activity = {
      ...activity,
      id: uuidv4(),
    };

    const newActivities = [...activities, newActivity];
    const sortedActivities = newActivities.sort((a, b) => {
      return dayjs(a.date).isBefore(dayjs(b.date)) ? -1 : 1;
    });
    setActivities([...sortedActivities]);
  };

  const addEditedActivity = (activity: Activity) => {
    const pitchTaken = activities.find((act) => {
      return act.pitch == activity.pitch &&
        act.id != activity.id &&
        dayjs(act.date).isSame(activity.date, "day")
        ? act
        : false;
    });

    if (pitchTaken) {
      return alert(
        `Pitch ${pitchTaken.pitch} already worked on on ${dayjs(
          pitchTaken.date
        ).format("DD/MM/YYYY")} by ${pitchTaken.user}`
      );
    }

    const newActivities = activities.map((act) =>
      act.id === activity.id ? activity : act
    );
    setActivities(newActivities);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 ">
      <AddActivityForm onSubmit={addNewActivity} />
      <div className="flex flex-row flex-wrap gap-4 my-4 border p-8 rounded-lg w-full align-middle justify-between">
        <div className="flex-1">
          <h3 className="text-turfGreen w-full text-xl font-semibold p-2">
            John
          </h3>
          {activities.map((activity: Activity) => {
            if (activity.user !== "John") return null;
            return (
              <SingleActivity
                saveEdit={addEditedActivity}
                onClick={removeActivity}
                key={activity.id}
                act={activity}
              />
            );
          })}
        </div>
        <div className="flex-1">
          <h3 className="text-turfGreen w-full text-xl font-semibold p-2">
            Tom
          </h3>
          {activities.map((activity: Activity) => {
            if (activity.user !== "Tom") return null;
            return (
              <SingleActivity
                saveEdit={addEditedActivity}
                onClick={removeActivity}
                key={activity.id}
                act={activity}
              />
            );
          })}
        </div>
        <div className="flex-1">
          <h3 className="text-turfGreen w-full text-xl font-semibold p-2">
            Tony
          </h3>
          {activities.map((activity: Activity) => {
            if (activity.user !== "Tony") return null;
            return (
              <SingleActivity
                saveEdit={addEditedActivity}
                onClick={removeActivity}
                key={activity.id}
                act={activity}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Activities;
