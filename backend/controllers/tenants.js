// ###########  TENANTS CONTROLLER  ############ 
// This is where we make the call to MongoDB and return the data

const { response } = require('express');
const mongodb = require('../db/connection');
const ObjectId = require('mongodb').ObjectId;

// Function to retrieve all tenants
const getAllTenants = async (req, res) => {
    const result = await mongodb
        .getDb()
        .db('realEstate')
        .collection('tenants')
        .find();
        result.toArray().then(lists => {
            res.status(200).json({
                message: 'All tenants fetched from db!',
                tenants: lists
            });
        });
};

// Function to retrive one tenant by ID
const getTenantById = async (req, res, next) => {
    if (!ObjectId.isValid(req.params.id)) {  //data validation - week 6
        res.status(400).json('Must use a valid id to find a tenant.');
    }
    const tenantId = new ObjectId(req.params.id);
    const result = await mongodb
        .getDb()
        .db('realEstate')
        .collection('tenants')
        .find({_id: tenantId});
        result.toArray().then(lists => { 
            res.status(200).json({
                message: 'Fetched tenant from db by id.',
                property: lists[0]
            });
        });
};

// Function to create a NEW tenant
const newTenant = async (req, res, next) => {
    const tenant = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        property: req.body.property,
        current_rent: req.body.current_rent,
        lease_period: req.body.lease_period,
        co_tenants: req.body.co_tenants,
        emergency_contact: req.body.emergency_contact,
        pets: req.body.pets,
        notes: req.body.notes
    };

    const result = await mongodb
        .getDb()
        .db('realEstate')
        .collection('tenants')
        .insertOne(tenant);
    
    if (result.acknowledged) {
        res.status(201).json(result);
    } else {
        res.status(500).json(result.error || 'An error occurred.  Tenant not created.');
    };
};

// Function to UPDATE an exsisting tenant
const updateTenant = async (req, res, next) => {
    // if (!ObjectId.isValid(req.params.id)) {  //data validation - week 6
    //     res.status(400).json('Must use a valid id to update a tenant.');
    // }
    const tenantId = new ObjectId(req.params.id);

    const tenant = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        property: req.body.property,
        current_rent: req.body.current_rent,
        lease_period: req.body.lease_period,
        co_tenants: req.body.co_tenants,
        emergency_contact: req.body.emergency_contact,
        pets: req.body.pets,
        notes: req.body.notes
    };

    const result = await mongodb
        .getDb()
        .db('realEstate')
        .collection('tenants')
        .updateOne(
            {_id: tenantId},
            {$set: tenant}
        );

    console.log(result);
    if (result.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(result.error || 'An error occurred.  Tenant not updated.');
    };
};

// Function to DELETE an existing tenant
const deleteTenant = async (req, res, next) => {
    // const tenantId = new ObjectId(req.params.id);
    const tenantName = req.params.name
    console.log("tenant params name: " + tenantName)

    const result = await mongodb
        .getDb()
        .db('realEstate')
        .collection('tenants')
        .deleteOne({'name': tenantName})
        .then(result => {
            console.log(result);
            res.status(200).json({message: 'Tenant deleted from db!'});
        });
};


module.exports = {
    getAllTenants,
    getTenantById,
    newTenant,
    updateTenant,
    deleteTenant
};