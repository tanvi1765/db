const { suppliersService } = require("../services");

// create-suppliers
const createsuppliers = async (req, res) => {
  try {
    const reqBody = req.body;

    const suppliersEx = await suppliersService.getsuppliersByName(reqBody.suppliers_name);
    if (suppliersEx) {
      throw new Error(`please add other suppliers this suppliers already created.`);
    }

    const suppliers = await suppliersService.createsuppliers(reqBody);

    res.status(200).json({
      success: true,
      message: "suppliers create successfully!",
      data: {
        suppliers,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get-suppliers
const getsuppliersList = async (req, res) => {
  try {
    const getsuppliers = await suppliersService.getsuppliersList();

    res.status(200).json({
      success: true,
      message: "suppliers List!",
      data: {
        getsuppliers,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// delete-suppliers
const deleteRecord = async (req, res) => {
  try {
    const suppliersId = req.params.suppliersId;
    const cateExists = await suppliersService.getsuppliersById(suppliersId);
    if (!cateExists) {
      throw new Error("suppliers not found!");
    }

    await suppliersService.deletesuppliers(suppliersId);

    res.status(200).json({
      success: true,
      message: "suppliers delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get suppliers by id
const getsuppliersDetails = async (req, res) => {
  try {
    const getDetails = await suppliersService.getsuppliersById(
      req.params.suppliersId
    );
    if (!getDetails) {
      throw new Error("suppliers not found!");
    }

    res.status(200).json({
      success: true,
      message: "suppliers details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// update suppliers by id
const updatesuppliers = async (req, res) => {
  try {
    const suppliersId = req.params.suppliersId;

    const cateExists = await suppliersService.getsuppliersById(suppliersId);
    if (!cateExists) {
      throw new Error("suppliers not found!");
    }

    await suppliersService.updateDetails(suppliersId, req.body);

    res.status(200).json({
      success: true,
      message: "suppliers details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createsuppliers,
  getsuppliersList,
  deleteRecord,
  getsuppliersDetails,
  updatesuppliers
};