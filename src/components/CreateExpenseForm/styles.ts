import { DatePicker, Radio } from 'antd';
import Title from 'antd/es/typography/Title';
import styled from 'styled-components';

export const FormWrapper = styled.div`
  padding: 32px;
  width: 379px;

  .ant-form-item-label {
    font-weight: 600;
  }

  .ant-form-item-required::before {
    display: none !important;
  }

  @media (max-width: 1200px) {
    width: auto;
    padding: 0;
  }
`;

export const DatePickerStyle = styled(DatePicker)`
  width: 100%;
`;

export const RadioGroup = styled(Radio.Group)`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 0;

  .ant-radio-input,
  .ant-radio-inner {
    visibility: hidden !important;
    position: absolute;
  }

  .ant-radio-wrapper {
    padding: 8px 15px;
    background-color: #f4f5f6;
    border-radius: 30px;

    &-checked {
      background-color: #d7d7d7;
    }
  }

  .ant-radio-label {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;

export const TitleStyle = styled(Title)`
  margin-bottom: 24px !important;

  @media (max-width: 1200px) {
    margin-bottom: 10px !important;
  }
`;
