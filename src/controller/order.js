const { orderService } = require("../services");

// create-order
const createorder = async (req, res) => {
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
      data: {
        order,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get-order
const getorderList = async (req, res) => {
  try {
    const getorder = await orderService.getorderList();

    res.status(200).json({
      success: true,
      message: "order List!",
      data: {
        getorder,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// delete-order
const deleteRecord = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const cateExists = await orderService.getorderById(orderId);
    if (!cateExists) {
      throw new Error("order not found!");
    }

    await orderService.deleteorder(orderId);

    res.status(200).json({
      success: true,
      message: "order delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get order by id
const getorderDetails = async (req, res) => {
  try {
    const getDetails = await orderService.getorderById(
      req.params.orderId
    );
    if (!getDetails) {
      throw new Error("order not found!");
    }

    res.status(200).json({
      success: true,
      message: "order details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// update order by id
const updateorder = async (req, res) => {
  try {
    const orderId = req.params.orderId;

    const cateExists = await orderService.getorderById(orderId);
    if (!cateExists) {
      throw new Error("order not found!");
    }

    await orderService.updateDetails(orderId, req.body);

    res.status(200).json({
      success: true,
      message: "order details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createorder,
  getorderList,
  deleteRecord,
  getorderDetails,
  updateorder
};