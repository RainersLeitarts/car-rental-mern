import React, { useState } from 'react'
import {
    AddVehicleWrapper, AddVehicleForm, FormItem, ItemLabel, ItemInput, SmallItemsWraper,
    SubmitButton
} from './AddVehicleElements'
import backgroundImage from '../../images/Admin/admin-background.jpg'
import useHttp from '../../hooks/useHttp'
import { useNavigate } from 'react-router-dom'

const AddVehicle = () => {
    const {loading, error, sendRequest: addVehicle} = useHttp()
    const navigate = useNavigate()

    const [vehicle, setVehicle] = useState({
        mark: '',
        model: '',
        images: [],
        category: '',
        seats: 0,
        doors: 0,
        year: 0,
        fuel: '',
        consumption: 0,
        transmission: '',
        ac: '',
        available: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        addVehicle({url: 'http://127.0.0.1:5000/cars/add', method: 'post', data:{
            "make": vehicle.mark,
            "model": vehicle.model,
            "year": parseInt(vehicle.year),
            "seats": parseInt(vehicle.seats),
            "doors": parseInt(vehicle.doors),
            "transmission": vehicle.transmission,
            "fuel": vehicle.fuel,
            "consumption": vehicle.consumption + 'L / 100km',
            "ac": vehicle.ac,
            "available": vehicle.available,
            "category": vehicle.category,
            "images": vehicle.images
        }}).catch(e => {
            error = e.response?.status
            console.log(e.response?.status)
        })
    }

    const handleChange = (e, type) => {
        let newValue = {
            ...vehicle,
            [type]: e.target.value
        }

        switch(type){
            case 'mark':
                setVehicle(newValue)
                break;
            case 'model':
                setVehicle(newValue)
                break;
            case 'year':
                setVehicle(newValue)
                break;
            case 'images':
                setVehicle(newValue)
                break;
            case 'category':
                setVehicle(newValue)
                break;
            case 'seats':
                setVehicle(newValue)
                break;
            case 'doors':
                setVehicle(newValue)
                break;
            case 'consumption':
                setVehicle(newValue)
                break;
            case 'fuel':
                setVehicle(newValue)
                break;
            case 'transmission':
                setVehicle(newValue)
                break;
            case 'ac':
                setVehicle(newValue)
                break;
            case 'available':
                setVehicle(newValue)
                break;
        }
        console.log(vehicle)
    }


    return (
        <AddVehicleWrapper backgroundImage={backgroundImage}>
            <AddVehicleForm>
                <FormItem>
                    <ItemLabel>Mark</ItemLabel>
                    <ItemInput value={vehicle.mark} onChange={(e) => { handleChange(e, 'mark') }}></ItemInput>
                </FormItem>
                <FormItem>
                    <ItemLabel>Model</ItemLabel>
                    <ItemInput value={vehicle.model} onChange={(e) => { handleChange(e, 'model') }}></ItemInput>
                </FormItem>
                <FormItem>
                    <FormItem>
                        <ItemLabel>Year</ItemLabel>
                        <ItemInput value={vehicle.year} type={'number'} onChange={(e) => { handleChange(e, 'year') }}></ItemInput>
                    </FormItem>
                    <ItemLabel>Image Link</ItemLabel>
                    <ItemInput value={vehicle.images} onChange={(e) => { handleChange(e, 'images') }}></ItemInput>
                </FormItem>
                <SmallItemsWraper>
                    <FormItem>
                        <ItemLabel>Category</ItemLabel>
                        <ItemInput value={vehicle.category} onChange={(e) => { handleChange(e, 'category') }}></ItemInput>
                    </FormItem>
                    <FormItem>
                        <ItemLabel>Seats</ItemLabel>
                        <ItemInput value={vehicle.seats} type={'number'} onChange={(e) => { handleChange(e, 'seats') }}></ItemInput>
                    </FormItem>
                    <FormItem>
                        <ItemLabel>Doors</ItemLabel>
                        <ItemInput value={vehicle.doors} type={'number'} onChange={(e) => { handleChange(e, 'doors') }}></ItemInput>
                    </FormItem>
                    <FormItem>
                        <ItemLabel>Consumption</ItemLabel>
                        <ItemInput value={vehicle.consumption} type={'number'} onChange={(e) => { handleChange(e, 'consumption') }}></ItemInput>
                    </FormItem>
                    <FormItem>
                        <ItemLabel>Fuel Type</ItemLabel>
                        <ItemInput value={vehicle.fuel} onChange={(e) => { handleChange(e, 'fuel') }}></ItemInput>
                    </FormItem>
                    <FormItem>
                        <ItemLabel>Transmission</ItemLabel>
                        <ItemInput value={vehicle.transmission} onChange={(e) => { handleChange(e, 'transmission') }}></ItemInput>
                    </FormItem>
                    <FormItem>
                        <ItemLabel>AC</ItemLabel>
                        <ItemInput value={vehicle.ac} onChange={(e) => { handleChange(e, 'ac') }}></ItemInput>
                    </FormItem>
                    <FormItem>
                        <ItemLabel>Available</ItemLabel>
                        <ItemInput value={vehicle.available} onChange={(e) => { handleChange(e, 'available') }}></ItemInput>
                    </FormItem>
                </SmallItemsWraper>
                <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
            </AddVehicleForm>

        </AddVehicleWrapper>
    )
}

export default AddVehicle