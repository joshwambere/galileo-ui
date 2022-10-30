export const getMediaStreamPermissions = async () => {
  return await navigator.mediaDevices.getUserMedia({ audio: true });
};
