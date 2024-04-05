import { useSetRecoilState } from 'recoil';
import { ModalPage } from '../../Atom/Atoms';
import NewPasswordCommon from '../common/Auth/NewPasswordCommon';
import { InputWrapper, SubmitWrapper } from '../SignIn/style';
import * as S from './style';
import CreateTitle from '../common/CreateTitle';

export default function NewPassword() {
  const setModalPage = useSetRecoilState(ModalPage);

  const onSubmit = () => {
    setModalPage(4);
  };
  return (
    <NewPasswordCommon title="회원가입" submitBtn="다음" onSubmit={onSubmit} />
  );
}
