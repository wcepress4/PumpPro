import React, { useEffect, useState } from 'react';
import ExerciseService from '../../../services/ExerciseService';
import AuthService from '../../../services/AuthService';
import { Link } from 'react-router-dom';

const Exercises = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        fetchExercises();
    }, []);

    const fetchExercises = async () => {
        try {
            const userId = await AuthService.getUserId(); // Wait for userId
            const response = await ExerciseService.getAllExercisesByCurrentUserAndAdmins(userId);
            setExercises(response.data); // Assuming data is the correct property containing exercises
        } catch (error) {
            console.error('Error fetching exercises:', error);
        }
    };

    return (
        <div className="container">
            <h2 className="text-center">List Exercises</h2>
            <div className="row">
                {exercises.map(exercise => (
                    <div key={exercise.id} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{exercise.name}</h5>
                                <p className="card-text">{exercise.description}</p>
                                <p className="card-text"><strong>ID:</strong> {exercise.id}</p>
                                <p className="card-text"><strong>Body Part:</strong> {exercise.bodyPart}</p>
                                <p className="card-text"><strong>Category:</strong> {exercise.category}</p>
                                <p className="card-text"><strong>Instructions:</strong> {exercise.instructions}</p>
                                <Link className="btn btn-info" to={`/edit-exercise/${exercise.name}`}>Edit</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Exercises;
