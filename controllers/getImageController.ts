import ImageModel from "../model/imageModel";

export const getImageController = async (req: any, res: any) => {
  try {
    const id = req.params.id;
    const imageInfo = await ImageModel.findById(id);
    if (!imageInfo) {
      return res.send("no image found");
    }
    res.status(200).json(imageInfo);
  } catch (err) {
    console.error(err);
    res.send("Internal Server Error");
  }
};
