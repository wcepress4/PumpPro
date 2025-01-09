import React, { useState } from "react";
import ExerciseService from "../../../services/ExerciseService";
import AuthService from "../../../services/AuthService";

const AddExercise = ({ onClose, onExerciseAdded }) => {
  const [exercise, setExercise] = useState({
    name: "",
    image: "",
    bodyPart: "",
    category: "",
    instructions: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExercise({ ...exercise, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const newExercise = {
            ...exercise,
            userId: await AuthService.getUserId(),
        };
      // Call the backend API to add the exercise
      await ExerciseService.createExercise(newExercise);
      onExerciseAdded(); // Trigger a refresh of the exercises list
      onClose(); // Close the modal
    } catch (error) {
      console.error("Error adding exercise:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md shadow-md w-1/2">
        <h2 className="text-xl font-bold mb-4">Add Exercise</h2>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={exercise.name}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>

          {/* Image */}
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium">
              Image URL (Optional)
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={exercise.image}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>

          {/* Body Part */}
          <div className="mb-4">
            <label htmlFor="bodyPart" className="block text-sm font-medium">
              Body Part
            </label>
            <input
              type="text"
              id="bodyPart"
              name="bodyPart"
              value={exercise.bodyPart}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-medium">
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={exercise.category}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>

          {/* Instructions */}
          <div className="mb-4">
            <label htmlFor="instructions" className="block text-sm font-medium">
              Instructions (Optional)
            </label>
            <textarea
              id="instructions"
              name="instructions"
              value={exercise.instructions}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 bg-gray-300 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Add Exercise
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExercise;
