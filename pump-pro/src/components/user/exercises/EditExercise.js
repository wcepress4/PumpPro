import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ExerciseService from '../../../services/ExerciseService';
import AuthService from '../../../services/AuthService';

const EditExercise = () => {
    const { name } = useParams();
    const navigate = useNavigate();

    const [exercise, setExercise] = useState({
        name: '',
        description: '',
        image: '',
        bodyPart: '',
        category: '',
        instructions: ''
    });
    const [loading, setLoading] = useState(false);
    const [editable, setEditable] = useState(false); // Flag to determine if exercise is editable

    useEffect(() => {
        if (name) {
            fetchExercise();
        }
    }, [name]);

    const fetchExercise = async () => {
        try {
            setLoading(true);
            const response = await ExerciseService.getExerciseByName(name);
            const exerciseData = response.data;

            // Check if exercise can be edited by current user
            const currentUser = await AuthService.getCurrentUser();
            if (exerciseData.createdBy === currentUser.sub || currentUser.role === 'ADMIN') {
                setEditable(true);
            }

            setExercise(exerciseData);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching exercise:', error);
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setExercise({ ...exercise, [name]: value });
    };

    const saveOrUpdateExercise = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            if (exercise.id) {
                await ExerciseService.updateExercise(exercise.id, exercise);
            } else {
                await ExerciseService.createExercise(exercise);
            }
            setLoading(false);
            navigate('/exercises');
        } catch (error) {
            console.error('Error saving/updating exercise:', error);
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <h2>Edit Exercise</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={saveOrUpdateExercise}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" name="name"
                                       value={exercise.name} onChange={handleInputChange} readOnly={!editable} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">Image URL</label>
                                <input type="text" className="form-control" id="image" name="image"
                                       value={exercise.image} onChange={handleInputChange} readOnly={!editable} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="bodyPart" className="form-label">Body Part</label>
                                <input type="text" className="form-control" id="bodyPart" name="bodyPart"
                                       value={exercise.bodyPart} onChange={handleInputChange} readOnly={!editable} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="category" className="form-label">Category</label>
                                <input type="text" className="form-control" id="category" name="category"
                                       value={exercise.category} onChange={handleInputChange} readOnly={!editable} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="instructions" className="form-label">Instructions</label>
                                <textarea className="form-control" id="instructions" name="instructions"
                                          value={exercise.instructions} onChange={handleInputChange} readOnly={!editable} />
                            </div>
                            {editable && (
                                <button type="submit" className="btn btn-primary">Save</button>
                            )}
                            <Link to="/exercises" className="btn btn-secondary ms-2">Cancel</Link>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EditExercise;
