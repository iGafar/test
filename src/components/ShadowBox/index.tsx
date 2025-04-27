import { ShadowBoxStyle } from '@/components/ShadowBox/styles';
import { ReactNode } from 'react';

interface IShadowBoxProps {
  children: ReactNode;
}

export default function ShadowBox({ children }: IShadowBoxProps) {
  return <ShadowBoxStyle>{children}</ShadowBoxStyle>;
}
