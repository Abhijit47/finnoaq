// import HomeOne from '@/components/homes/home';
// import HomeTwo from '@/components/homes/home-2';
import HomeTwo from '@/components/homepage';
import Wrapper from '@/layouts/Wrapper';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FarmHub - Agriculture Farming Next js Template',
  description:
    'Introducing Farmhub - the ultimate showcasing your agricultural or organic business. Designed with a sleek and modern aesthetic, Farmhub effortlessly captures the essence of sustainable farming and food production.',
};

export default function index() {
  return (
    <Wrapper>
      {/* <HomeOne /> */}
      <HomeTwo />
    </Wrapper>
  );
}
