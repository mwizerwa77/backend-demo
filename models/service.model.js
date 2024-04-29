const mongoose = require("mongoose")

const ServiceSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true
    },
    serviceCategoryId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    }
  });

  const ServiceModel = mongoose.model("Service", ServiceSchema);
  module.exports = ServiceModel;
