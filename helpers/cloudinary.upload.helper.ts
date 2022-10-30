import {
  NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
  NEXT_PUBLIC_CLOUDINARY_URL
} from '../config/constants.config';

export const uploadAudio = async (file: Blob) => {
  const formData: FormData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);
  return await fetch(NEXT_PUBLIC_CLOUDINARY_URL!, {
    method: 'POST',
    body: formData
  })
    .then(res => res.json())
    .then(res => res.secure_url)
    .catch(err => console.log(err));
};


