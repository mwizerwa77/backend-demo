const express = require("express")
const ServiceCategoryModel = require("../models/serviceCategory.model");

const router = express.Router();

router.post("/", async (request, response) => {
  const entity = new ServiceCategoryModel(request.body);

  try {
    await entity.save();
    response.status(201).send(entity);
  } catch (error) {
    response.status(500).send(error);
  }
});
router.get("/", async (request, response) => {
    try {
     const entities = await ServiceCategoryModel.find({});
      response.status(200).send(entities);
    } catch (error) {
      response.status(500).send({ error });
    }
  });
  router.get("/:id", async (request, response) => {
    try {
      const entity = await ServiceCategoryModel.findOne({ _id: request.params.id });
      response.send(entity);
    } catch (error) {
      response.status(500).send({ error });
    }
  });
  router.put("/:id", async (request, response) => {
    try {
      const entity = await ServiceCategoryModel.findByIdAndUpdate(
        request.params.id,
        request.body
      );
      await entity.save();
      response.send(entity);
    } catch (error) {
      response.status(500).send({ error });
    }
  });
  router.delete("/:id", async (request, response) => {
    try {
      const entity = await ServiceCategoryModel.findByIdAndDelete(request.params.id);
      if (!entity) {
        return response.status(404).send("Item wasn't found");
      }
      response.status(200).send({message:"Item removed successfully"});
    } catch (error) {
      response.status(500).send({ error });
    }
  });

module.exports= router;
