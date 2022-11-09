import ProfileImage from '../shared/profile/ProfileImage';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import { requiredInput } from '../../shared/utils/validations/formValidation';
import { useUpdateProfileMutation } from '../../services/endpoints/auth.endpoint';
import { SuccessMessage } from '../shared/messages/SuccessMessage';
import { ErrorMessage } from '../shared/messages/ErrorMessage';
import { uploadAudio } from '../../helpers/cloudinary.upload.helper';
import { setUserInfo } from '../../shared/redux/slices/auth.slice';

const ProfileForm = (): JSX.Element => {
  const user = useSelector((state: any) => state.auth.user);
  const [profileImage, setProfileImage] = useState<string>(
    user ? user.profileImage : ''
  );
  const [userName, setUserName] = useState<string>(user ? user.userName : '');
  const [updateProfile, { isLoading: updateLoading }] =
    useUpdateProfileMutation();
  const [uploading, setUploading] = useState<boolean>(updateLoading);
  const dispatch = useDispatch();
  const onFinish = async (_values: any) => {
    setUploading(true);
    if (profileImage === user.profileImage) {
      updateProfile({
        profileImage: user.profileImage,
        userName
      })
        .unwrap()
        .then(_response => {
          dispatch(setUserInfo({ user: { ...user, userName, profileImage } }));
          setUploading(false);
          SuccessMessage('Profile updated successfully');
        })
        .catch(_err => {
          setUploading(false);
          ErrorMessage(
            _err.data ? _err.data.message : 'Error updating profile'
          );
        });
    } else {
      uploadAudio(await fetch(profileImage).then(r => r.blob()))
        .then(res => {
          updateProfile({
            profileImage: res,
            userName
          })
            .unwrap()
            .then(_response => {
              setUploading(false);
              dispatch(
                setUserInfo({ user: { ...user, userName, profileImage: res } })
              );
              SuccessMessage('Profile updated successfully');
            });
        })
        .catch(_err => {
          ErrorMessage(
            _err.data ? _err.data.message : 'Error updating profile'
          );
        });
    }
  };
  return (
    <div className="w-2/5 flex justify-center mt-auto mx-auto h-screen items-center">
      <Form
        name="Profile"
        onFinish={onFinish}
        className="h-1/2 border-2 w-full p-2 flex justify-center rounded-lg"
      >
        {user && (
          <div className=" flex justify-center flex-col w-2/3">
            <ProfileImage
              _id={user._id}
              image={profileImage}
              name={user.userName}
              handleImageChange={setProfileImage}
            />
            <Form.Item
              rules={requiredInput}
              className="flex justify-center edit-form-input w-full"
            >
              <Input
                placeholder="User Name"
                name="userName"
                value={userName}
                onChange={e => setUserName(e.target.value)}
              />
            </Form.Item>
            <Button
              disabled={userName?.length === 0}
              loading={uploading}
              className={`bg-[#d51f97] rounded-2xl btn_dark_red ${
                userName.length === 0 && 'disabled-btn'
              }`}
              type="primary"
              htmlType="submit"
            >
              Save
            </Button>
          </div>
        )}
      </Form>
    </div>
  );
};

export default ProfileForm;
