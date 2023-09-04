const { orderService } = require("../services");

// create order
const createorder= async (req,res) => {
    try {
        const reqBody = req.body;

        const orderEx = await orderService.getorderByName(reqBody.order_name);
        if (orderEx) {
            throw new Error(`please add other order this order already created.`);
        }

        const order = await orderService.createorder(reqBody);

        res.status(200).json({
            success: true,
            message: "order create successfully!",
            data: { order }
        });
    } catch (error) {
        res.status(400).json({ success:false, message: error.message })
    }
};

//  Get order list
const getordersList = async(req, res) => {
    try {
        const getList = await orderService.getorderList();
        res.status(200).json({
            success: true,
            message: "Get order list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success:false, message: error.message })
    }
};

// get order details by id
const getorderDetails = async (req, res) => {
    try {
        const getDetails = await orderService.getorderById(
            req.params.orderId
        )
        if (!getDetails) {
            throw new Error("order not found!");
        }

        res.status(200).json({
            success: true,
            message: "order details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

// update order

const updateorder = async (req, res) => {
    try {
        const orderId = req.params.orderId;

        const orderExists = await orderService.getCategoryById(categoryId);
        if (!orderExists) {
            throw new Error("order not found!")
        }

        await orderService.updateDetails(categoryId, req.body);

        res.status(200).json({
            success: true,
            message: "order details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// delete category

const deleteRecord = async (req, res) => {
    try {
        const orderId = req.params.orderId;

        const orderExists = await orderService.getorderById(orderId);
        if (!orderExists) {
            throw new Error("order not found!")
        }

        await orderService.deleteorder(orderId);

        res.status(200).json({
            success: true,
            message: "order delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createorder,
    getordersList,
    getorderDetails,
    updateorder,
    deleteRecord
};