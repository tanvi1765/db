const { productService } = require("../services");

// create product
const createproduct = async (req,res) => {
    try {
        const reqBody = req.body;

        const productEx = await productService.getproductByName(reqBody.product_name);
        if (productEx) {
            throw new Error(`please add other product this  product already created.`);
        }

        const product = await productService.createproduct(reqBody);

        res.status(200).json({
            success: true,
            message: "product create successfully!",
            data: { product }
        });
    } catch (error) {
        res.status(400).json({ success:false, message: error.message })
    }
};

//  Get product list
const getproductsList = async(req, res) => {
    try {
        const getList = await productService.getproductList();
        res.status(200).json({
            success: true,
            message: "Get product list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success:false, message: error.message })
    }
};

// get product details by id
const getproductDetails = async (req, res) => {
    try {
        const getDetails = await productService.getproductById(
            req.params.productId
        )
        if (!getDetails) {
            throw new Error("product not found!");
        }

        res.status(200).json({
            success: true,
            message: "product details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

// update product

const updateproduct = async (req, res) => {
    try {
        const productId = req.params.productId;

        const productExists = await productService.getCategoryById(categoryId);
        if (!productExists) {
            throw new Error("product not found!")
        }

        await productService.updateDetails(categoryId, req.body);

        res.status(200).json({
            success: true,
            message: "product details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// delete category

const deleteRecord = async (req, res) => {
    try {
        const productId = req.params.productId;

        const productExists = await productService.getproductById(productId);
        if (!productExists) {
            throw new Error("product not found!")
        }

        await productService.deleteproduct(productId);

        res.status(200).json({
            success: true,
            message: "product delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createproduct,
    getproductsList,
    getproductDetails,
    updateproduct,
    deleteRecord
};