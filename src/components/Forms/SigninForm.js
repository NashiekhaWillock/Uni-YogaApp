import { Section, ImgWrapper, Img, LoginContainer, StyledLabel, StyledPara, StyledSpan, Row, Column, Error, FormInput, Button } from "./Form.Styles";
import { useNavigate, useLocation } from 'react-router-dom';
import { useUserAuth } from "../../context/userAuthContext";
import Home from '../../screens/Home';
import { Container } from '../../globalStyles';
import { GLY } from '../../assets/images';
import { Button as Google } from '@mui/material';
import { Button as Facebook } from '@mui/material';
import { FcGoogle } from 'react-icons/fc'
import { FiFacebook as FB } from 'react-icons/fi'
import useForm from './useForm';

const Signin = ({ lightbg, img, alt, imgstart, start }) => {

  const { currentUser } = useUserAuth();
  const navigate = useNavigate();
  const { googleSignIn, facebookSignIn, SignIn, handleSignInChange, signInValues, emailError, passwordError, errorsSignIn, errorsFBPassword, errorsFBEmail, loading } = useForm()

  return (currentUser ? (
    <Home />) :
    (
      <>
        <Section lightbg={lightbg}>
          <Container>
            <Row imgstart={imgstart}>
              <Column>
                <ImgWrapper start={start}>
                  <Img src={GLY} alt={alt} />
                </ImgWrapper>
              </Column>
              <Column>
                <LoginContainer onSubmit={SignIn}>
                  <StyledLabel> Email </StyledLabel>
                  <FormInput
                    name="email"
                    type="email"
                    autoFocus
                    required
                    autoComplete="email"
                    placeholder="Enter email address"
                    values={signInValues.email}
                    onChange={handleSignInChange}
                  />
                  {errorsSignIn.email ? (<Error>{errorsSignIn.email}</Error>) : (errorsFBEmail && <Error>{errorsFBEmail}</Error>)}
                  <StyledLabel>Password</StyledLabel>
                  <FormInput
                    name="password"
                    type="password"
                    required
                    placeholder="Enter password"
                    autoComplete="current-password"
                    values={signInValues.password}
                    onChange={handleSignInChange} />
                   {errorsSignIn.password ? (<Error>{errorsSignIn.password}</Error>) : (errorsFBPassword && <Error>{errorsFBPassword}</Error>)}
                  <div>
                    <Button disabled={loading}>Sign In</Button>
                    <div className="grid grid-cols-2 gap-2 text-xs mt-4 mb-4 ">
                      <Google variant="outlined" startIcon={<FcGoogle />} onClick={googleSignIn} sx={{ fontSize: { xs: '13.4px', sm: '10px', lg: '16px' }, height: '40px', padding: '0px', border: '2px solid #536B6F', color: '#FFFFFF' }}>
                        Google Sign in
                      </Google>
                      <Facebook variant="outlined" startIcon={<FB />} onClick={facebookSignIn} sx={{ fontSize: { xs: '13.4px', sm: '10px', lg: '16px' }, height: '40px', padding: '0px', border: '2px solid #536B6F', color: '#FFFFFF' }}>
                        Facebook Sign in
                      </Facebook>
                    </div>
                    <StyledPara>
                      Don't Have An Account?
                      <StyledSpan onClick={() => {
                        navigate("/signup");
                      }}>Sign Up</StyledSpan>
                    </StyledPara>
                  </div>
                </LoginContainer>
              </Column>
            </Row>
          </Container>
        </Section>
      </>)
  );
};

export default Signin;

