import React from 'react';
import validate from './Validation';
import useForm from './useForm';
import { Container } from './globalStyles'
import { useNavigate } from 'react-router-dom';
import {Section, Row, Column, TextWrapper, TopLine, Heading, Subtitle, FormContainer, Error, FormInput, Button, StyledLabel, StyledInput, FormTitle, NameContainer, StyledPara, StyledSpan, InputContainer } from './Form.Styles';

const FormSignup = ({
  submitForm,
  topLine,
  headline,
  description,
}) => {

  const { handleChange, handleSubmit, values, errors, errorsFBEmail, errorsFBPassword, isSubmitting } = useForm(
    submitForm,
    validate
  );



  const navigate = useNavigate();

  return (
    <><Section >
      <Container>
        <Row>
          <Column>
            <TextWrapper>
              <TopLine>Green Light Yoga</TopLine>
              <Heading>The Embodiment Of Yoga</Heading>
              <Subtitle>Yoga is an ancient form of exercise that emphasizes strength, flexibility, and breathing and is a healthy way to boost physical and mental well-being. Yoga consists of postures (movements designed to increase strength and flexibility) and breathing exercises.</Subtitle>
            </TextWrapper>
          </Column>
          <Column>
            <FormContainer onSubmit={handleSubmit}  >
              <FormTitle>
                Sign up for course content access!
              </FormTitle>
              <InputContainer>
                <StyledLabel>Username</StyledLabel>
                <FormInput
                  type='text'
                  name='username'
                  placeholder='Username'
                  value={values.username}
                  onChange={handleChange} />
                {errors.username && <Error>{errors.username}</Error>}
              </InputContainer>
            
              <NameContainer>
              <InputContainer>
                  <StyledLabel>First Name</StyledLabel>
                  <FormInput
                    type='text'
                    name='fName'
                    placeholder='First Name'
                    value={values.fName}
                    onChange={handleChange} />
                  {errors.fName && <Error>{errors.fName}</Error>}
                  </InputContainer>
                <InputContainer>
                  <StyledLabel>Last Name</StyledLabel>
                  <FormInput
                    type='text'
                    name='lName'
                    placeholder='Last Name'
                    value={values.lName}
                    onChange={handleChange} />
                  {errors.lName && <Error>{errors.lName}</Error>}
                  </InputContainer>
              </NameContainer>
              <InputContainer>
                <StyledLabel>Email</StyledLabel>
                <FormInput
                  type='email'
                  name='email'
                  placeholder='Email'
                  value={values.email}
                  onChange={handleChange} />
                {errors.email ? (<Error>{errors.email}</Error>) : (errorsFBEmail && <Error>{errorsFBEmail}</Error>)}
              </InputContainer>
              <InputContainer>
                <StyledLabel>Password</StyledLabel>
                <FormInput
                  type='password'
                  name='password'
                  placeholder='Password'
                  value={values.password}
                  onChange={handleChange} />
                {errors.password ? (<Error>{errors.password}</Error>) : (errorsFBPassword && <Error>{errorsFBPassword}</Error>)}
                </InputContainer>

              <div>
              <Button type='submit' disabled={isSubmitting}>
                Sign up
              </Button>
                    <StyledPara className="mt-2 gap-1" >
                    Already Have An Account?
                      <StyledSpan onClick={() => {
                        navigate("/signin");
                      }}>Sign In</StyledSpan>
                    </StyledPara>
                  </div>

            </FormContainer>
          </Column>
        </Row>

      </Container>

    </Section></>
  );
};

export default FormSignup;