import React, { useState } from 'react';
import { Button, Modal, Box, Grid, TextField } from '@mui/material';
import './CarCatalog.css';

const CarCatalog = () => {
    const [cars, setCars] = useState([
        { id: 1, name: 'Golf 4', manufacturer: 'Volkswagen', year: 2005, volume: '1.9', price: '$5,000', color: 'Сірий', description: 'A nice car.', image: 'https://cdn.riastatic.com/photosnewr/ria/news_common/volkswagen-golf-iv-c-probegom-kakie-versii-pokupayut-chasche__255054-1680x0.jpg' },
        { id: 2, name: 'Vito', manufacturer: 'Mercedes-Benz', year: 2019, volume: '2.2', price: '$8,000', color: 'Білий', description: 'A reliable car.', image: 'https://ireland.apollo.olxcdn.com/v1/files/pijejyznjyub2-UA/image;s=1000x750' },
        { id: 3, name: 'Challenger', manufacturer: 'Dodge', year: 2021, volume: '6.4', price: '$25,000', color: 'Сірий', description: 'A powerful car.', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/2018_Dodge_Challenger_RT%2C_Front_Left%2C_09-25-2021.jpg' },
        { id: 5, name: 'Car 5', manufacturer: 'BMW', year: 2018, volume: '2.0L', price: '$35,000', color: 'Grey', description: 'A luxury car.', image: 'https://cdn.riastatic.com/photosnew/auto/photo/Audi_A8__526800187f.jpg' }
    ]);
    const [open, setOpen] = useState(false);
    const [currentCar, setCurrentCar] = useState({ name: '', manufacturer: '', year: '', volume: '', price: '', color: '', description: '', image: '' });
    const [errors, setErrors] = useState({});

    const Open = (car = { name: '', manufacturer: '', year: '', volume: '', price: '', color: '', description: '', image: '' }) => {
        setCurrentCar(car);
        setOpen(true);
    };

    const Close = () => {
        setOpen(false);
        setCurrentCar({ name: '', manufacturer: '', year: '', volume: '', price: '', color: '', description: '', image: '' });
        setErrors({});
    };

    const validate = () => {
        const newErrors = {};
        if (!currentCar.name) newErrors.name = 'Name is required';
        if (!currentCar.manufacturer) newErrors.manufacturer = 'Manufacturer is required';
        if (!currentCar.year) newErrors.year = 'Year is required';
        if (!currentCar.volume) newErrors.volume = 'Volume is required';
        if (!currentCar.price) newErrors.price = 'Price is required';
        if (!currentCar.color) newErrors.color = 'Color is required';
        if (!currentCar.description) newErrors.description = 'Description is required';
        if (!currentCar.image) newErrors.image = 'Need a photo';
        return newErrors;
    };

    const Save = () => {
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        if (currentCar.id) {
            setCars(cars.map(car => car.id === currentCar.id ? currentCar : car));
        } else {
            setCars([...cars, { ...currentCar, id: cars.length + 1 }]);
        }
        Close();
    };

    const Delete = (id) => {
        setCars(cars.filter(car => car.id !== id));
    };

    return (
        <Box className="container">
            <Grid container spacing={2} className="grid-container">
                <Grid item className="button-grid">
                    <Button variant="contained" onClick={() => Open()} className="add-button" fullWidth>
                        Add Car
                    </Button>
                </Grid>
                <Grid container item spacing={2} xs={10}>
                    {cars.map(car => (
                        <Grid item xs={12} sm={6} md={3} key={car.id}>
                            <Box className="car-card">
                                <img src={car.image} alt={car.name} className="car-image" />
                                <h3>{car.name}</h3>
                                <p>{car.manufacturer}</p>
                                <p>{car.year}</p>
                                <p>{car.volume}</p>
                                <p>{car.price}</p>
                                <p>{car.color}</p>
                                <p>{car.description}</p>
                                <Button onClick={() => Open(car)} variant="outlined" color="primary" className="edit-button">Edit</Button>
                                <Button onClick={() => Delete(car.id)} variant="outlined" color="secondary" className="delete-button">Delete</Button>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Modal open={open} onClose={Close}>
                <Box className="modal-box">
                    <h2>{currentCar?.id ? 'Edit Car' : 'Add Car'}</h2>
                    <TextField 
                        fullWidth 
                        label="Name" 
                        value={currentCar.name || ''} 
                        onChange={(e) => setCurrentCar({ ...currentCar, name: e.target.value })}
                        margin="normal" 
                        error={!!errors.name} 
                        helperText={errors.name}
                    />
                    <TextField 
                        fullWidth 
                        label="Manufacturer" 
                        value={currentCar.manufacturer || ''} 
                        onChange={(e) => setCurrentCar({ ...currentCar, manufacturer: e.target.value })}
                        margin="normal" 
                        error={!!errors.manufacturer} 
                        helperText={errors.manufacturer}
                    />
                    <TextField 
                        fullWidth 
                        label="Year" 
                        value={currentCar.year || ''} 
                        onChange={(e) => setCurrentCar({ ...currentCar, year: e.target.value })} 
                        margin="normal" 
                        error={!!errors.year} 
                        helperText={errors.year}
                    />
                    <TextField 
                        fullWidth 
                        label="Volume" 
                        value={currentCar.volume || ''} 
                        onChange={(e) => setCurrentCar({ ...currentCar, volume: e.target.value })} 
                        margin="normal" 
                        error={!!errors.volume} 
                        helperText={errors.volume}
                    />
                    <TextField 
                        fullWidth 
                        label="Price" 
                        value={currentCar.price || ''} 
                        onChange={(e) => setCurrentCar({ ...currentCar, price: e.target.value })} 
                        margin="normal" 
                        error={!!errors.price} 
                        helperText={errors.price}
                    />
                    <TextField 
                        fullWidth 
                        label="Color" 
                        value={currentCar.color || ''} 
                        onChange={(e) => setCurrentCar({ ...currentCar, color: e.target.value })} 
                        margin="normal" 
                        error={!!errors.color} 
                        helperText={errors.color}
                    />
                    <TextField 
                        fullWidth 
                        label="Description" 
                        value={currentCar.description || ''} 
                        onChange={(e) => setCurrentCar({ ...currentCar, description: e.target.value })} 
                        margin="normal" 
                        error={!!errors.description} 
                        helperText={errors.description}
                    />
                    <TextField 
                        fullWidth 
                        label="Image URL" 
                        value={currentCar.image || ''} 
                        onChange={(e) => setCurrentCar({ ...currentCar, image: e.target.value })} 
                        margin="normal" 
                        error={!!errors.image} 
                        helperText={errors.image}
                    />
                    <Button onClick={Save} variant="contained" sx={{ mt: 2 }}>Save</Button>
                </Box>
            </Modal>
        </Box>
    );
};

export default CarCatalog;
