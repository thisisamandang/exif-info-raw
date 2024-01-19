# Implemented Solution
- Typesafe server, Has the images stored on the server, exiftools work on that.
- frontend fetches images from the cloudfare cdn link, images are stored in s3 (could not override default aws s3 object metadata hence this solution)
- Typescript and vite at the frontend
- loader state would make the frontend look better (future option)

# Alternate solution:
- Store the images in an s3 bucket and setup a cdn for the previews.
- Make a stream at server-side fetch the s3 objects and cache the objects fetched from the s3 bucket and apply exiftools on that whenever needed and show them to the user. and loop
  
