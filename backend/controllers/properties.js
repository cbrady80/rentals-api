// ###########  PROPERTIES CONTROLLER  ############ 
// This is where we make the call to MongoDB and return the data

const { response } = require('express');
const mongodb = require('../db/connection');
const ObjectId = require('mongodb').ObjectId;

// Function to retrieve all properties
const getAllProperties = async (req, res, next) => {
    const result = await mongodb
        .getDb()
        .db('realEstate')
        .collection('properties')
        .find();
        result.toArray().then(lists => {
            res.status(200).json({
                message: 'All properties fetched from db!',
                properties: lists
            });
        });
};


// Function to retrive one property by ID
const getPropertyById = async (req, res, next) => {
    
    const propertyId = new ObjectId(req.params.id);
    const result = await mongodb
        .getDb()
        .db('realEstate')
        .collection('properties')
        .find({_id: propertyId});
        result.toArray().then(lists => { 
            res.status(200).json({
                message: 'Fetched property from db by id.',
                property: lists[0]
            });
        });
};

// Function to create a NEW property
const newProperty = async (req, res, next) => {
    const property = {
        address: req.body.address,
        description: req.body.description,
        current_tenants: req.body.current_tenants,
        current_rent: req.body.current_rent,
        imagePath: req.body.imagePath,
        notes: req.body.notes
    };

    const result = await mongodb
        .getDb()
        .db('realEstate')
        .collection('properties')
        .insertOne(property);
    
    if (result.acknowledged) {
        res.status(201).json(result);
    } else {
        res.status(500).json(result.error || 'An error occurred.  Property not created.');
    };
};

// Function to UPDATE an exsisting property
const updateProperty = async (req, res, next) => {
    // if (!ObjectId.isValid(req.params.id)) {  
    //     res.status(400).json('Must use a valid id to update a property.');
    // }
    const propertyId = new ObjectId(req.params.id);

    const property = {
        address: req.body.address,
        description: req.body.description,
        current_tenants: req.body.current_tenants,
        current_rent: req.body.current_rent,
        imagePath: req.body.imagePath,
        notes: req.body.notes
    };

    const result = await mongodb
        .getDb()
        .db('realEstate')
        .collection('properties')
        .updateOne(
            {_id: propertyId},
            {$set: property}
        );

    console.log(result);
    if (result.acknowledged) {
        res.status(204).send(result);
    } else {
        res.status(500).json(result.error || 'An error occurred.  Property not updated.');
    };
};

// Function to DELETE an existing property
const deleteProperty = async (req, res, next) => {
    // const propertyId = ObjectId();
    const propAddr = req.params.address
    // console.log("property address from params = " + propAddr);

    const result = await mongodb
        .getDb()
        .db('realEstate')
        .collection('properties')
        .deleteOne({'address': propAddr})
        .then(result => {
            console.log(result);
            res.status(200).json({message: 'Property deleted from db!'});
        });
};


module.exports = {
    getAllProperties,
    getPropertyById,
    newProperty,
    updateProperty,
    deleteProperty
};