'use client';

import VideoPopup from '@/modals/VideoPopup';
import Link from 'next/link';
import { useState } from 'react';

export default function FeatureHomeTwo() {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <>
      <div className='feature-videov02'>
        <div className='container'>
          <div className='feature-video-wrap d-center w-100'>
            <Link
              href={'#'}
              onClick={() => setIsVideoOpen(true)}
              style={{ cursor: 'pointer', background: '#002ad5' }}
              className='video-cmn d-center video-popup'>
              <i className='fa-solid fa-play text-light'></i>
            </Link>
          </div>
        </div>
      </div>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        // videoId={'-hTVNidxg2s'}
        videoId={'1030325084'}
      />
      {/* video modal end  */}
    </>
  );
}
