import React, { useEffect, useState } from 'react';
import ExerciseService from '../../../services/ExerciseService';
import { Link } from 'react-router-dom';
import AuthService from '../../../services/AuthService';
import AddExercise from "./AddExercise";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  const [type, setType] = useState('any');
  const [bodyPart, setBodyPart] = useState('');
  const [category, setCategory] = useState('');
  const [userId, setUserId] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAddExercise, setIsAddExercise] = useState(false);

  const openModal = () => setIsAddExercise(true);
  const closeModal = () => setIsAddExercise(false);

  const handleExerciseAdded = () => {
    // Refresh the exercises list after adding a new one
    console.log("Exercise added! Refresh the list.");
  };

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const id = await AuthService.getUserId();
        setUserId(id);
        setIsAdmin(AuthService.isAdmin());
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  // Fetch exercises when filter, userId, or isAdmin changes
  useEffect(() => {
    const fetchExercises = async () => {
      try {
        let response;
        if (type === 'default') {
          response = await ExerciseService.getAllExercisesPublic(bodyPart, category);
        } else if (type === 'personal' && userId) {
          // console.log("Body part: " + bodyPart);
          // console.log(typeof bodyPart);
          response = await ExerciseService.getAllExercisesPrivate(userId, bodyPart, category);
        } else if (type === 'any' && userId) {
          if (isAdmin) {
            response = await ExerciseService.getAllExercisesAdmin(bodyPart, category);
          } else {
            response = await ExerciseService.getAllExercises(userId, bodyPart, category);
          }
        }
        if (response) {
          setExercises(response.data);
        }
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    };

    // Ensure userId is available before fetching exercises
    if (userId !== null) {
      fetchExercises();
    }
  }, [type, category, bodyPart, userId, isAdmin]);

  const handleFilterChange = (e) => {
    setType(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleBodyPartChange = (e) => {
    setBodyPart(e.target.value);
  };

  return (
    <div className="container">
  <h2 className="text-center text-xl font-bold mb-4">List Exercises</h2>

  <div>
      <button onClick={openModal} className="px-4 py-2 bg-green-500 text-white rounded-md">
        Add Exercise
      </button>

      {isAddExercise && (
        <AddExercise onClose={closeModal} onExerciseAdded={handleExerciseAdded} />
      )}
  </div>

  {/* Filter Dropdowns in a Row */}
  <div className="flex flex-wrap gap-4 mb-6">
    <select
      id="type"
      className="form-select flex-1 p-2 border border-gray-300 rounded-md"
      value={type}
      onChange={handleFilterChange}
    >
      <option value="any">Any Type</option>
      <option value="personal">Public</option>
      <option value="default">Private</option>
    </select>

    <select
      id="bodyPart"
      className="form-select flex-1 p-2 border border-gray-300 rounded-md"
      value={bodyPart}
      onChange={handleBodyPartChange}
    >
      <option value="">Any Body Part</option>
      <option value="Core">Core</option>
      <option value="Arms">Arms</option>
      <option value="Back">Back</option>
      <option value="Chest">Chest</option>
      <option value="Legs">Legs</option>
      <option value="Shoulders">Shoulders</option>
      <option value="Cardio">Cardio</option>
    </select>

    <select
      id="category"
      className="form-select flex-1 p-2 border border-gray-300 rounded-md"
      value={category}
      onChange={handleCategoryChange}
    >
      <option value="">Any Category</option>
      <option value="Barbell">Barbell</option>
      <option value="Dumbbell">Dumbbell</option>
      <option value="Machine">Machine</option>
      <option value="Weighted Bodyweight">Weighted Bodyweight</option>
      <option value="Assisted Bodyweight">Assisted Bodyweight</option>
      <option value="Cardio">Cardio</option>
    </select>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {exercises.map((exercise) => (
      <div key={exercise.id} className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={exercise.imageUrl}
          alt={exercise.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h5 className="font-bold text-lg">{exercise.name}</h5>
          <p className="text-gray-600"><strong>Body Part:</strong> {exercise.bodyPart}</p>
          <p className="text-gray-600"><strong>Category:</strong> {exercise.category}</p>
          {(isAdmin || userId === exercise.userId) && (
            <Link
              to={`/edit-exercise/${exercise.id}`}
              className="mt-4 inline-block text-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Edit
            </Link>
          )}
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

export default Exercises;
