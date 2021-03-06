import React, { useState } from 'react'
import {
    AddVehicleWrapper, AddVehicleForm, FormItem, ItemLabel, ItemInput, SmallItemsWraper,
    SubmitButton,
    ItemSelect
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
        available: '',
        dayprice: 0,
        weekprice: 0,
        monthprice: 0,
        safetyprice: 0,
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        addVehicle({url: 'http://localhost:5000/cars/add', method: 'post', data:{ //https://vehicle-server-rewidle.herokuapp.com
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
            "images": vehicle.images,
            "dayprice": parseInt(vehicle.dayprice),
            "weekprice": parseInt(vehicle.weekprice),
            "monthprice": parseInt(vehicle.monthprice),
            "safetyprice": parseInt(vehicle.safetyprice)
        }}).then(res => {
            console.log(res.status)
        }).catch(e => {
            error = e.response?.status
            console.log(e.response?.status)
        })
    }

    const handleChange = (e, type) => {
        let value = e.target.value

        if(type === 'ac' || type === 'available'){
            value === 'Yes'? value = true : value = false
        }

        let newValue = {
            ...vehicle,
            [type]: value
        }

        setVehicle(newValue)

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
                        <ItemSelect value={vehicle.ac? 'Yes' : 'No'} onChange={(e) => { handleChange(e, 'ac') }}>
                            <option></option>
                            <option>Yes</option>
                            <option>No</option>
                        </ItemSelect>
                    </FormItem>
                    <FormItem>
                        <ItemLabel>Available</ItemLabel>
                        <ItemSelect value={vehicle.available? 'Yes' : 'No'} onChange={(e) => { handleChange(e, 'available') }}>
                        <option></option>
                            <option>Yes</option>
                            <option>No</option>
                        </ItemSelect>
                    </FormItem>
                    <FormItem>
                        <ItemLabel>{'Price (<week)'}</ItemLabel>
                        <ItemInput value={vehicle.dayprice} onChange={(e) => { handleChange(e, 'dayprice') }}></ItemInput>
                    </FormItem>
                    <FormItem>
                        <ItemLabel>{'Price (>=week)'}</ItemLabel>
                        <ItemInput value={vehicle.weekprice} onChange={(e) => { handleChange(e, 'weekprice') }}></ItemInput>
                    </FormItem>
                    <FormItem>
                        <ItemLabel>{'Price (>week)'}</ItemLabel>
                        <ItemInput value={vehicle.monthprice} onChange={(e) => { handleChange(e, 'monthprice') }}></ItemInput>
                    </FormItem>
                    <FormItem>
                        <ItemLabel>Security deposit</ItemLabel>
                        <ItemInput value={vehicle.safetyprice} onChange={(e) => { handleChange(e, 'safetyprice') }}></ItemInput>
                    </FormItem>
                </SmallItemsWraper>
                <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
            </AddVehicleForm>

        </AddVehicleWrapper>
    )
}

export default AddVehicle