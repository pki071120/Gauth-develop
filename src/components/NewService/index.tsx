import { useState } from 'react';
import { useForm } from 'react-hook-form';

import useFetch from '../../hooks/useFetch';
import { NewServiceForm, ResNewService } from '../../types/ResAddService';
import Input from '../common/Input';
import Portal from '../common/Portal';
import ServiceInfoModal from './InfoModal';
import * as S from './style';

export default function NewServicePage() {
  const regUrl =
    /^(http(s)?:\/\/|www.)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}([\/a-z0-9-%#?&=\w])+(\.[a-z0-9]{2,4}(\?[\/a-z0-9-%#?&=\w]+)*)*/gi;

  const [modal, setModal] = useState<boolean>(false);

  const serviceDefaultData: ResNewService = {
    clientId: '',
    clientSecret: '',
    redirectUri: '',
    serviceName: '',
    serviceUri: '',
  };

  const [serviceData, setServiceData] =
    useState<ResNewService>(serviceDefaultData);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<NewServiceForm>({
    defaultValues: serviceData,
  });

  const onClose = () => {
    setModal(false);
    reset(serviceDefaultData);
  };

  const { fetch } = useFetch<ResNewService>({
    url: '/client',
    method: 'post',
    onSuccess: (data) => {
      setServiceData(data);
      setModal(true);
    },
  });

  const onSubmit = async (inputs: NewServiceForm) =>
    fetch({
      serviceName: inputs.serviceName,
      serviceUri: inputs.serviceUri,
      redirectUri: inputs.redirectUri,
    });

  return (
    <S.Layout>
      <S.Wrapper>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.TitleSection>
            <h1>서비스를 등록해볼까요?</h1>
            <h3>서비스 등록도, 학생정보 수집도 쉽게!</h3>
          </S.TitleSection>
          <S.InputContainer>
            <Input
              label="서비스명"
              errors={!!errors.serviceName}
              message={errors.serviceName?.message}
              register={register('serviceName', {
                required: '서비스명을 입력하지 않았습니다.',
                pattern: {
                  value: /\S+/,
                  message: '서비스명을 입력하지 않았습니다.',
                },
                maxLength: {
                  value: 20,
                  message: '최대 20자까지 입력할 수 있습니다',
                },
              })}
            />
            <Input
              label="리다이렉트 URL"
              errors={!!errors.redirectUri}
              message={errors.redirectUri?.message}
              register={register('redirectUri', {
                required: '리다이렉트 URI를 입력하지 않았습니다.',
                pattern: {
                  value: regUrl,
                  message: '리다이렉트 URL를 형식에 맞게 입력해주세요',
                },
                maxLength: {
                  value: 254,
                  message: '최대 254자까지 입력할 수 있습니다',
                },
              })}
            />
            <Input
              label="사이트 URL"
              errors={!!errors.serviceUri}
              message={errors.serviceUri?.message}
              register={register('serviceUri', {
                required: '서비스 URI를 입력하지 않았습니다.',
                pattern: {
                  value: regUrl,
                  message: '서비스 URI를 형식에 맞게 입력해주세요',
                },
                maxLength: {
                  value: 254,
                  message: '최대 254자까지 입력할 수 있습니다',
                },
              })}
            />
          </S.InputContainer>
          <S.Submit type="submit">등록</S.Submit>
        </S.Form>
        {modal && (
          <ServiceInfoModal serviceData={serviceData} onClose={onClose} />
        )}
      </S.Wrapper>
    </S.Layout>
  );
}
