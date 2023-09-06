const { orderdetailsService } = require("../services");

// create-orderdetails
const createorderdetails = async (req, res) => {
  try {
    const reqBody = req.body;

    const orderdetailsEx = await orderdetailsService.getorderdetailsByName(reqBody.orderdetails_name);
    if (orderdetailsEx) {
      throw new Error(`please add other orderdetails this orderdetails already created.`);
    }

    const orderdetails = await orderdetailsService.createorderdetails(reqBody);

    res.status(200).json({
      success: true,
      message: "orderdetails create successfully!",
      data: {
        orderdetails,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get-orderdetails
const getorderdetailsList = async (req, res) => {
  try {
    const getorderdetails = await orderdetailsService.getorderdetailsList();

    res.status(200).json({
      success: true,
      message: "orderdetails List!",
      data: {
        getorderdetails,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// delete-orderdetails
const deleteRecord = async (req, res) => {
  try {
    const orderdetailsId = req.params.orderdetailsId;
    const cateExists = await orderdetailsService.getorderdetailsById(orderdetailsId);
    if (!cateExists) {
      throw new Error("orderdetails not found!");
    }

    await orderdetailsService.deleteorderdetails(orderdetailsId);

    res.status(200).json({
      success: true,
      message: "orderdetails delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get orderdetails by id
const getorderdetailsDetails = async (req, res) => {
  try {
    const getDetails = await orderdetailsService.getorderdetailsById(
      req.params.orderdetailsId
    );
    if (!getDetails) {
      throw new Error("orderdetails not found!");
    }

    res.status(200).json({
      success: true,
      message: "orderdetails details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// update orderdetails by id
const updateorderdetails = async (req, res) => {
  try {
    const orderdetailsId = req.params.orderdetailsId;

    const cateExists = await orderdetailsService.getorderdetailsById(orderdetailsId);
    if (!cateExists) {
      throw new Error("orderdetails not found!");
    }

    await orderdetailsService.updateDetails(orderdetailsId, req.body);

    res.status(200).json({
      success: true,
      message: "orderdetails details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createorderdetails,
  getorderdetailsList,
  deleteRecord,
  getorderdetailsDetails,
  updateorderdetails
};