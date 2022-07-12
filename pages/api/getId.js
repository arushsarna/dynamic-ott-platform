import content from "../../models/content";
import dbConnect from "./db";

export default async function getId(req, res) {
  await dbConnect();

  try {
    const result = content.find({ _id: req.query._id }, (data, err) => {
      if (err) {
        res.json(err);
      } else {
        res.json(data);
      }
    });
  } catch (err) {
    res.status(500).json(err);
  }
}
