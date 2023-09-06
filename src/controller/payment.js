const { paymentService } = require("../services");

// create-payment
const createpayment = async (req, res) => {
  try {
    const reqBody = req.body;

    const paymentEx = await paymentService.getpaymentByName(reqBody.payment_name);
    if (paymentEx) {
      throw new Error(`please add other payment this payment already created.`);
    }

    const payment = await paymentService.createpayment(reqBody);

    res.status(200).json({
      success: true,
      message: "payment create successfully!",
      data: {
        payment,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get-payment
const getpaymentList = async (req, res) => {
  try {
    const getpayment = await paymentService.getpaymentList();

    res.status(200).json({
      success: true,
      message: "payment List!",
      data: {
        getpayment,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// delete-payment
const deleteRecord = async (req, res) => {
  try {
    const paymentId = req.params.paymentId;
    const cateExists = await paymentService.getpaymentById(paymentId);
    if (!cateExists) {
      throw new Error("payment not found!");
    }

    await paymentService.deletepayment(paymentId);

    res.status(200).json({
      success: true,
      message: "payment delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get payment by id
const getpaymentDetails = async (req, res) => {
  try {
    const getDetails = await paymentService.getpaymentById(
      req.params.paymentId
    );
    if (!getDetails) {
      throw new Error("payment not found!");
    }

    res.status(200).json({
      success: true,
      message: "payment details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// update payment by id
const updatepayment = async (req, res) => {
  try {
    const paymentId = req.params.paymentId;

    const cateExists = await paymentService.getpaymentById(paymentId);
    if (!cateExists) {
      throw new Error("payment not found!");
    }

    await paymentService.updateDetails(paymentId, req.body);

    res.status(200).json({
      success: true,
      message: "payment details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createpayment,
  getpaymentList,
  deleteRecord,
  getpaymentDetails,
  updatepayment
};