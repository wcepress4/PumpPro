import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import WorkoutService from '../../services/WorkoutService';

const PumpPanel = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    getAllWorkouts();
  }, []);

  const getAllWorkouts = () => {
    WorkoutService.getAllWorkouts()
      .then(response => {
        setWorkouts(response.data);
      })
      .catch(error => {
        console.error('Error fetching workouts:', error);
      });
  };

  return (
    <div className="container">
      <h2 className='text-center'>List Workouts</h2>
      <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            <th>Workout Id</th>
            <th>Name</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Created By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map(workout => (
            <tr key={workout.id}>
              <td>{workout.id}</td>
              <td>{workout.name}</td>
              <td>{new Date(workout.startTime).toLocaleString()}</td>
              <td>{workout.endTime ? new Date(workout.endTime).toLocaleString() : '-'}</td>
              <td>{workout.userId}</td>
              <td>
                <Link className="btn btn-info" to={`/edit-workout/${workout.id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PumpPanel;
