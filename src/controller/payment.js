const { paymentService } = require("../services");

// create payment
const createpayment = async (req,res) => {
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
            data: { payment }
        });
    } catch (error) {
        res.status(400).json({ success:false, message: error.message })
    }
};

//  Get payment list
const getpaymentsList = async(req, res) => {
    try {
        const getList = await paymentService.getpaymentList();
        res.status(200).json({
            success: true,
            message: "Get payment list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success:false, message: error.message })
    }
};

// get payment details by id
const getpaymentDetails = async (req, res) => {
    try {
        const getDetails = await paymentService.getpaymentById(
            req.params.paymentId
        )
        if (!getDetails) {
            throw new Error("payment not found!");
        }

        res.status(200).json({
            success: true,
            message: "payment details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

// update payment

const updatepayment = async (req, res) => {
    try {
        const paymentId = req.params.paymentId;

        const paymentExists = await paymentService.getCategoryById(categoryId);
        if (!paymentExists) {
            throw new Error("payment not found!")
        }

        await paymentService.updateDetails(categoryId, req.body);

        res.status(200).json({
            success: true,
            message: "payment details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// delete category

const deleteRecord = async (req, res) => {
    try {
        const paymentId = req.params.paymentId;

        const paymentExists = await paymentService.getpaymentById(paymentId);
        if (!paymentExists) {
            throw new Error("payment not found!")
        }

        await paymentService.deletepayment(paymentId);

        res.status(200).json({
            success: true,
            message: "payment delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createpayment,
    getpaymentsList,
    getpaymentDetails,
    updatepayment,
    deleteRecord
};