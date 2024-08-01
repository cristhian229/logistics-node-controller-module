import { pool } from "../../config/db.js";

export const save = async (shipment) => {
    try {
        const [resolve] = await pool.query(
            "INSERT INTO shipments ( name, location ) VALUES ( ?, ? )",
            [shipment.name, shipment.location]
        );
        const [[shipmentCreated]] = await pool.query(
            "SELECT * FROM shipments WHERE id = ?",
            [resolve.insertId]
        );

        return shipmentCreated;
    } catch (err) {
        throw new Error("Ocurrio un error", err);
    }
};

export async function findAll() {
    try {
        const [shipments] = await pool.query("SELECT * FROM shipments");
        return shipments;
    } catch (err) {
        console.log(err);
    }
}

export const findById = async (id) => {
    try {
        const [[shipmentFound]] = await pool.query(
            "SELECT * FROM shipments WHERE id = ?",
            [id]
        );
        return shipmentFound;
    } catch (error) {
        throw new Error("Shipment not found", error);
    }
};

export const update = async (id, newShipment) => {
    console.log(id);
    try {
        const [resolve] = await pool.query(
            "UPDATE shipments SET name = ?, location = ? WHERE id = ?",
            [newShipment.name, newShipment.location, id]
        );
        return resolve;
    } catch (error) {
        throw new Error("Shipment has not been updated", error);
    }
};

export const updateShipment = async (id, newShipment) => {
    try {
        await findById(id);
        await update(id, newShipment);
        return "Shipment updated";
    } catch (err) {
        throw new Error("Shipment has not been updated", err);
    }
};

export const removeShipment = async (id) => {
    try {
        const shipmentToDelete = await findById(id);
        await pool.query("DELETE FROM shipments WHERE id = ?", [id]);
        return shipmentToDelete;
    } catch (error) {
        throw new Error("Shipment has not been deleted", error);
    }
};
