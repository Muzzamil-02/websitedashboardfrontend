import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_S3_SECRET_ACCESS_KEY,
  },
});

export const uploadToS3 = async (file, onUploadSuccess, onUploadError) => {
  if (!file) return;

  const bucketName = process.env.NEXT_PUBLIC_S3_BUCKET_NAME;
  if (!bucketName) {
    console.error("AWS S3 Bucket name is missing");
    return;
  }

  try {
    const arrayBuffer = await file.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);
    const fileName = `uploads/${Date.now()}-${file.name}`;

    const params = {
      Bucket: bucketName,
      Key: fileName,
      Body: uint8Array,
      ContentType: file.type,
    };

    console.log("Uploading with params:", params);

    await s3Client.send(new PutObjectCommand(params));

    const fileUrl = `https://${bucketName}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/${fileName}`;
    console.log("File URL:", fileUrl);

    if (onUploadSuccess) onUploadSuccess(fileUrl);
  } catch (error) {
    console.error("S3 Upload Error:", error);
    if (onUploadError) onUploadError(error);
  }
};
