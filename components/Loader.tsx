import Image from 'next/image'
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Loader = () => {
  return (
    <div className="loader">
      <DotLottieReact
      src="https://lottie.host/7472391a-deb1-4128-be3d-884e7285050a/bN76fMTNXd.lottie"
      loop
      autoplay
    />
    </div>
  )
}

export default Loader