const { customerService } = require("../services");

// create-customer
const createcustomer = async (req, res) => {
  try {
    const reqBody = req.body;

    const customerEx = await customerService.getcustomerByName(reqBody.customer_name);
    if (customerEx) {
      throw new Error(`please add other customer this customer already created.`);
    }

    const customer = await customerService.createcustomer(reqBody);

    res.status(200).json({
      success: true,
      message: "customer create successfully!",
      data: {
        customer,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get-customer
const getcustomerList = async (req, res) => {
  try {
    const getcustomer = await customerService.getcustomerList();

    res.status(200).json({
      success: true,
      message: "customer List!",
      data: {
        getcustomer,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// delete-customer
const deleteRecord = async (req, res) => {
  try {
    const customerId = req.params.customerId;
    const cateExists = await customerService.getcustomerById(customerId);
    if (!cateExists) {
      throw new Error("customer not found!");
    }

    await customerService.deletecustomer(customerId);

    res.status(200).json({
      success: true,
      message: "customer delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get customer by id
const getcustomerDetails = async (req, res) => {
  try {
    const getDetails = await customerService.getcustomerById(
      req.params.customerId
    );
    if (!getDetails) {
      throw new Error("customer not found!");
    }

    res.status(200).json({
      success: true,
      message: "customer details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// update customer by id
const updatecustomer = async (req, res) => {
  try {
    const customerId = req.params.customerId;

    const cateExists = await customerService.getcustomerById(customerId);
    if (!cateExists) {
      throw new Error("customer not found!");
    }

    await customerService.updateDetails(customerId, req.body);

    res.status(200).json({
      success: true,
      message: "customer details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createcustomer,
  getcustomerList,
  deleteRecord,
  getcustomerDetails,
  updatecustomer
};