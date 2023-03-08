import { isAxiosError } from 'axios';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import API from '../../api';
import { EmailInfo, ModalPage } from '../../Atom/Atoms';
import NewPasswordCommon from '../common/Auth/NewPasswordCommon';

export default function NewPassword() {
  const router = useRouter();
  const setModalPage = useSetRecoilState(ModalPage);
  const emailInfo = useRecoilValue(EmailInfo);
  const onSubmit = async (data: { password: string; rePassword: string }) => {
    try {
      await API.patch('/auth/password/initialize', {
        email: emailInfo.email + '@gsm.hs.kr',
        newPassword: data.rePassword,
      });
      setModalPage(0);
      router.push('/login');
    } catch (e) {
      if (!isAxiosError(e))
        return toast.error('예상치 못한 오류가 발생하였습니다.');
      if (e.response?.status === 401)
        return toast.error('이메일 인증 기한이 만료 되었습니다.');
      router.push('/login');
    }
  };

  return (
    <NewPasswordCommon
      title="비밀번호"
      submitBtn="완료"
      bottomPhrase="로그인 하러가기"
      changeModal="/login"
      onSubmit={onSubmit}
    />
  );
}
