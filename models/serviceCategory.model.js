const mongoose = require("mongoose")

const ServiceCategorySchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true
    }
  });

  const ServiceCategoryModel = mongoose.model("ServiceCategory", ServiceCategorySchema);
  module.exports = ServiceCategoryModel;
