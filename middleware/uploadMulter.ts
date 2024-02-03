import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req: any, file: any, cb: any) {
    return cb(null, "./assets");
  },
  filename: function (req: any, file, cb: any) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});
export const upload = multer({ storage });
