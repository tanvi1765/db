const { Book } = require("../models");


//  Create book

const createBook = async (reqBody) => {
  return Book.create(reqBody);
};

const getBookList = async (filter, options) => {
  return Book.find()
};

const getBookById = async(bookId) => {
  return Book.findById(bookId);
}

const updateDetails = async(bookId, updateBody) => {
  return Book.findByIdAndUpdate(bookId, { $set: updateBody });
}

const deleteBook = async (bookId) => {
  return Book.findByIdAndDelete(bookId);
}

const getBookByName = async (book_name) => {
  return Book.findOne({ book_name })
};

module.exports = {
  createBook,
  getBookList,
  getBookById,
  updateDetails,
  deleteBook,
  getBookByName
};