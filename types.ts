export interface ImageData {
  index: number;
  file: string;
  s3Name: string;
}

export interface ExifInfo {
  Lens: string;
  CaptureTime: string;
  ISO: number;
  Speed: string;
  Aperture: string;
  FileName: string;
  ImageSize: string;
  WhiteBalance: string;
  Rating: number;
  Camera: string;
}
