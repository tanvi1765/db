const { shippersService } = require("../services");

// create-shippers
const createshippers = async (req, res) => {
  try {
    const reqBody = req.body;

    const shippersEx = await shippersService.getshippersByName(reqBody.shippers_name);
    if (shippersEx) {
      throw new Error(`please add other shippers this shippers already created.`);
    }

    const shippers = await shippersService.createshippers(reqBody);

    res.status(200).json({
      success: true,
      message: "shippers create successfully!",
      data: {
        shippers,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get-shippers
const getshippersList = async (req, res) => {
  try {
    const getshippers = await shippersService.getshippersList();

    res.status(200).json({
      success: true,
      message: "shippers List!",
      data: {
        getshippers,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// delete-shippers
const deleteRecord = async (req, res) => {
  try {
    const shippersId = req.params.shippersId;
    const cateExists = await shippersService.getshippersById(shippersId);
    if (!cateExists) {
      throw new Error("shippers not found!");
    }

    await shippersService.deleteshippers(shippersId);

    res.status(200).json({
      success: true,
      message: "shippers delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get shippers by id
const getshippersDetails = async (req, res) => {
  try {
    const getDetails = await shippersService.getshippersById(
      req.params.shippersId
    );
    if (!getDetails) {
      throw new Error("shippers not found!");
    }

    res.status(200).json({
      success: true,
      message: "shippers details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// update shippers by id
const updateshippers = async (req, res) => {
  try {
    const shippersId = req.params.shippersId;

    const cateExists = await shippersService.getshippersById(shippersId);
    if (!cateExists) {
      throw new Error("shippers not found!");
    }

    await shippersService.updateDetails(shippersId, req.body);

    res.status(200).json({
      success: true,
      message: "shippers details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createshippers,
  getshippersList,
  deleteRecord,
  getshippersDetails,
  updateshippers
};