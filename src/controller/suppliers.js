const { suppliersService } = require("../services");

// create suppliers
const createsuppliers = async (req,res) => {
    try {
        const reqBody = req.body;

        const suppliersEx = await suppliersService.getsuppliersByName(reqBody.suppliers_name);
        if (suppliersEx) {
            throw new Error(`please add other suppliers this ${suppliersEx.suppliers_name} suppliers already created.`);
        }

        const suppliers = await suppliersService.createsuppliers(reqBody);

        res.status(200).json({
            success: true,
            message: "suppliers create successfully!",
            data: { suppliers }
        });
    } catch (error) {
        res.status(400).json({ success:false, message: error.message })
    }
};

//  Get suppliers list
const getsupplierssList = async(req, res) => {
    try {
        const getList = await suppliersService.getsuppliersList();
        res.status(200).json({
            success: true,
            message: "Get suppliers list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success:false, message: error.message })
    }
};

// get suppliers details by id
const getsuppliersDetails = async (req, res) => {
    try {
        const getDetails = await suppliersService.getsuppliersById(
            req.params.suppliersId
        )
        if (!getDetails) {
            throw new Error("suppliers not found!");
        }

        res.status(200).json({
            success: true,
            message: "suppliers details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

// update suppliers

const updatesuppliers = async (req, res) => {
    try {
        const suppliersId = req.params.suppliersId;

        const suppliersExists = await suppliersService.getCategoryById(categoryId);
        if (!suppliersExists) {
            throw new Error("suppliers not found!")
        }

        await suppliersService.updateDetails(categoryId, req.body);

        res.status(200).json({
            success: true,
            message: "suppliers details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// delete category

const deleteRecord = async (req, res) => {
    try {
        const suppliersId = req.params.suppliersId;

        const suppliersExists = await suppliersService.getsuppliersById(suppliersId);
        if (!suppliersExists) {
            throw new Error("suppliers not found!")
        }

        await suppliersService.deletesuppliers(suppliersId);

        res.status(200).json({
            success: true,
            message: "suppliers delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createsuppliers,
    getsupplierssList,
    getsuppliersDetails,
    updatesuppliers,
    deleteRecord
};