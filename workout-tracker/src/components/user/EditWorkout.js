import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import WorkoutService from '../../services/WorkoutService';

const EditWorkout = () => {
  const { id } = useParams(); // Get workout id from URL params
  const navigate = useNavigate(); // Navigation hook

  // State variables to hold workout data
  const [workout, setWorkout] = useState({
    name: '',
    startTime: '',
    endTime: '',
    userId: '',
  });

  // Fetch workout details if id exists (for editing existing workout)
  useEffect(() => {
    if (id) {
      fetchWorkoutById(id);
    }
  }, [id]);

  // Function to fetch workout details by ID
  const fetchWorkoutById = (workoutId) => {
    WorkoutService.getWorkoutById(workoutId)
      .then(response => {
        const { name, startTime, endTime, userId } = response.data;
        // Convert ISO string to local date-time format for input fields
        setWorkout({ name, startTime: new Date(startTime).toLocaleString(), endTime: new Date(endTime).toLocaleString(), userId });
      })
      .catch(error => {
        console.error('Error fetching workout:', error);
      });
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWorkout(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Save or update workout
  const saveOrUpdateWorkout = (e) => {
    e.preventDefault();

    // Serialize dates to ISO format for backend
    const workoutData = {
      ...workout,
      startTime: new Date(workout.startTime).toISOString(),
      endTime: workout.endTime ? new Date(workout.endTime).toISOString() : null
    };

    if (id) { // Update existing workout
      WorkoutService.updateWorkout(id, workoutData)
        .then(response => {
          console.log('Workout updated successfully:', response.data);
          navigate('/pump-panel'); // Navigate to workout list page
        })
        .catch(error => {
          console.error('Error updating workout:', error);
        });
    } else { // Create new workout (if no id)
      WorkoutService.createWorkout(workoutData)
        .then(response => {
          console.log('New workout created:', response.data);
          navigate('/pump-panel'); // Navigate to workout list page
        })
        .catch(error => {
          console.error('Error creating workout:', error);
        });
    }
  };

  // Title based on whether editing or adding new workout
  const getTitle = () => {
    return id ? <h2 className="text-center">Edit Workout</h2> : <h2 className="text-center">Add Workout</h2>;
  };

  return (
    <div>
      <br /><br />
      <div className='container'>
        <div className='row'>
          <div className='card col-md-6 offest-md-3 offset-md-3'>
            {getTitle()}
            <div className='card-body'>
              <form>
                <div className='form-group mb-2'>
                  <label className='form-label'>Name:</label>
                  <input
                    type="text"
                    placeholder="Enter workout name"
                    name="name"
                    className="form-control"
                    value={workout.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className='form-group mb-2'>
                  <label className='form-label'>Start Time:</label>
                  <input
                    type="datetime-local"
                    name="startTime"
                    className="form-control"
                    value={workout.startTime}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className='form-group mb-2'>
                  <label className='form-label'>End Time:</label>
                  <input
                    type="datetime-local"
                    name="endTime"
                    className="form-control"
                    value={workout.endTime}
                    onChange={handleInputChange}
                  />
                </div>

                <div className='form-group mb-2'>
                  <label className='form-label'>User ID:</label>
                  <input
                    type="text"
                    placeholder="Enter user ID"
                    name="userId"
                    className="form-control"
                    value={workout.userId}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <button className='btn btn-success' onClick={saveOrUpdateWorkout}>Submit</button>
                <Link to="/pump-panel" className='btn btn-danger'>Cancel</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditWorkout;
