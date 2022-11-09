import { uploadAudio } from '../../../helpers/cloudinary.upload.helper';

export const BlobUploadUtil = async (file: any) => {
  let uploadedFile: any;

  uploadAudio(new Blob([file])).then(res => {
    uploadedFile = res;
  });
  return uploadedFile;
};
