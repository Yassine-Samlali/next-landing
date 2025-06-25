// components/SplineSection.js
import Spline from '@splinetool/react-spline';
import GlassWrapper from './GlassWrapper';
import BlurText from './BlurText/BlurText'


const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/D-Lo7o4x0LiJbb79/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Content on top */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <GlassWrapper>
           <BlurText text='this is just a test for a hero section with a loader and reactbits and spline' animateBy='letters' />
        </GlassWrapper>
      </div>
    </section>
  );
};

export default HeroSection;
