const exiftool = require("exiftool-vendored").exiftool;
const path = require("path");

export const uploadController = async (req: any, res: any) => {
  console.log(req.file, req.body);
  await exiftool.extractPreview(
    req.file.path,
    `./assets/${req.file.filename}.jpg`
  );

  const pathfile = path.resolve(`./assets/${req.file.filename}.jpg`);
  res.sendFile(pathfile);
};
