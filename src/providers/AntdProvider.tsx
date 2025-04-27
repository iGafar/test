import { ConfigProvider, Grid } from 'antd';
import { ReactNode } from 'react';

const { useBreakpoint } = Grid;

export default function AntdProvider({ children }: { children: ReactNode }) {
  const { sm } = useBreakpoint();

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "'Montserrat', sans-serif",
        },
        components: {
          Table: {
            headerBg: 'white',
            headerColor: '#999999',
            headerSplitColor: 'transperent',
            borderColor: 'transperent',
          },
          Typography: {
            fontSizeHeading1: sm ? 32 : 22,
            fontSizeHeading2: sm ? 24 : 20,
            titleMarginBottom: 0,
          },
          Select: {
            colorBorder: 'transperent',
            activeOutlineColor: 'transperent',
            colorTextPlaceholder: 'black',
            optionFontSize: 14,
            fontSize: 12,
          },
          Input: {
            controlHeight: 40,
          },
          DatePicker: {
            controlHeight: 40,
          },
          Button: {
            controlHeight: 40,
            colorPrimary: '#1FA46C',
            colorPrimaryHover: '#1fa43d',
            colorPrimaryActive: '#1fa49d',
          },
          Form: {
            labelFontSize: 16,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
