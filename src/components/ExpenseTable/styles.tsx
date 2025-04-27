import { Flex } from 'antd';
import styled from 'styled-components';

export const TableHeadStyle = styled.div`
  padding: 32px;

  @media (max-width: 600px) {
    .ant-select-selector {
      padding-left: 0 !important;
    }
  }
`;

export const TableWrapper = styled.div`
  padding: 0 16px;
`;

export const ExpenseTableStyle = styled.div`
  width: 100%;
`;

export const SelectLabel = styled(Flex)`
  font-size: 12px;
  white-space: nowrap;

  .ant-select-selector {
    padding-left: 4px !important;
    color: var(--green);
    text-decoration: underline;
  }
`;
