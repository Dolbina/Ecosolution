import styled from 'styled-components';

import { Form as FormikForm, ErrorMessage as FormikErrorMessage } from 'formik';

export const Form = styled(FormikForm)`
  width: 320px;
  height: 559px;
  padding: 20px;
  background-color: #eaedf1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 36px 12px;
`;

export const FormField = styled.label`
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  color: #173d33;

  text-align: justify;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  background-color: transparent;

   
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  font-size: 12px;
  text-align: right;
  color: #d28b8b;
 
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;
`;

export const TextFeedback = styled.textarea`
  width: 100%;
  height: 147px;
  border: none;

  background-color: transparent;
  resize: none;
  outline: none;
  border-bottom: 1px solid #97d28b;

  color: #173d33;
  font-size: 18px;

  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;
  
`;

export const ButtonWrap = styled.div`
margin-top:16px;
    display: flex;
    justify-content: flex-end`;