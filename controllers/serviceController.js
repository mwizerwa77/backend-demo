const express = require("express")
const ServiceModel = require("../models/service.model");

const router = express.Router();

router.post("/", async (request, response) => {
  const entity = new ServiceModel(request.body);

  try {
    await entity.save();
    response.status(201).send(entity);
  } catch (error) {
    response.status(500).send(error);
  }
});
router.get("/", async (request, response) => {
    try {
     const entities = await ServiceModel.find({});
      response.status(200).send(entities);
    } catch (error) {
      response.status(500).send({ error });
    }
  });
  router.get("/:id", async (request, response) => {
    try {
      const entity = await ServiceModel.findOne({ _id: request.params.id });
      response.send(entity);
    } catch (error) {
      response.status(500).send({ error });
    }
  });
  router.put("/:id", async (request, response) => {
    try {
      const entity = await ServiceModel.findByIdAndUpdate(
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
      const entity = await ServiceModel.findByIdAndDelete(request.params.id);
      if (!entity) {
        return response.status(404).send("Item wasn't found");
      }
      response.status(200).send({message:"Item removed successfully"});
    } catch (error) {
      response.status(500).send({ error });
    }
  });

module.exports= router;
