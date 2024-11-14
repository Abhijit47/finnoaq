'use client';
import counter_img_1 from '@/assets/img/icon/count1.svg';
import counter_img_2 from '@/assets/img/icon/count2.svg';
import counter_img_3 from '@/assets/img/icon/count3.svg';
import counter_img_4 from '@/assets/img/icon/count4.svg';
import Count from '@/components/common/Count';
import Image from 'next/image';

interface CountDataType {
  id: number;
  number: number;
  icon: string;
  text: string;
  title: string;
}

const coundet_data: CountDataType[] = [
  { id: 1, number: 100, icon: counter_img_1, text: '+', title: 'Farmers' },
  {
    id: 2,
    number: 1,
    icon: counter_img_2,
    text: 'cr+',
    title: 'Seed production',
  },
  {
    id: 2,
    number: 5,
    icon: counter_img_3,
    text: '+',
    title: 'Villages',
  },
  {
    id: 2,
    number: 50,
    icon: counter_img_4,
    text: '+',
    title: 'Smart Farmers',
  },
];

interface PropsType {
  style_2?: boolean;
}

export default function CounterHomeOne({ style_2 }: PropsType) {
  return (
    <>
      <section
        className={` position-relative p100-bg space-bottom ${
          style_2 ? 'counter-section02' : 'counter-section'
        }`}>
        <div className='container'>
          <div className='counter-version-wrapv1 d-flex align-items-center justify-content-between gap-4'>
            {coundet_data.map((item, i) => (
              <div
                key={i}
                className={`counter-items ${style_2 ? 'style02' : ''}`}>
                {style_2 ? (
                  <>
                    <div className='cont-bottom'>
                      <Image src={item.icon} alt='img' />
                    </div>
                    <div className='con-box'>
                      <h2 className='d-flex align-items-center'>
                        <span className='count'>
                          {' '}
                          <Count number={item.number} />{' '}
                        </span>{' '}
                        {item.text}
                      </h2>
                      <p>{item.title}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <h2 className='d-flex align-items-center'>
                      <span className='count'>
                        {' '}
                        <Count number={item.number} />{' '}
                      </span>{' '}
                      {item.text}
                    </h2>
                    <div className='cont-bottom'>
                      <Image src={item.icon} alt='img' />
                      <p>{item.title}</p>
                    </div>
                  </>
                )}
              </div>
            ))}

            {style_2 && (
              <>
                <Image
                  src='/assets/img/element/count-flower-left.png'
                  alt='img'
                  className='cout-flower-left'
                  width={96}
                  height={140}
                />
                <Image
                  src='/assets/img/element/count-flower-right.png'
                  alt='img'
                  className='cout-flower-right'
                  width={96}
                  height={140}
                />
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
