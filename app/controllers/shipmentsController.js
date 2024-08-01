import { findAll, save, updateShipment, removeShipment  } from "../models/shipmentsModel";


export const getAll = async (_, res) =>{
    const shipments = await findAll
    console.log(shipments);
    res.json({message: "OK", data: shipments})
}

export const insert = async (req, res) => {
    const { name, location } = req.body;
    console.log(name, location);
    const shipmentCreated = await save({ name, location });

    res.status(201).send({
        message: "Successfully created",
        data: shipmentCreated,
    });
};

export const update = async (req, res) => {
    const shipmentId = req.params.id;
    console.log(req.params);
    const { name, location } = req.body;
    const updatedShipment = await updateShipment(shipmentId, {
        name,
        location,
    });
    res.status(204).json({
        message: "Updated successfully",
        response: updatedShipment,
    });
};

export const remove = async (req, res) => {
    const shipmentId = req.params.id;
    const shipmentRemoved = await removeShipment(shipmentId);
    res.status(200).json({
        message: "Successfully deleted",
        warehouse: shipmentRemoved,
    });
};