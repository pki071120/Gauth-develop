import { NextPage } from 'next';
import NewSignInPage from '../components/SignIn';
import SEOConfig from '../components/SEO';
import MyProfilePage from '../components/MyProfilePage';
import Sidebar from '../components/Sidebar';

const Login: NextPage = () => {
  return (
    <>
      <SEOConfig title="GAuth | 로그인" />
      <NewSignInPage />;
      {/* <SEOConfig title="GAuth | 프로필" />
      <Sidebar />
      <MyProfilePage /> */}
    </>
  );
};

export default Login;
