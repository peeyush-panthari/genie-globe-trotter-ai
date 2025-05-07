import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center pt-20 pb-16 overflow-hidden">
      {/* Blue-purple gradient lines */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-70">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i} 
            className="w-full h-px bg-gradient-to-r from-transparent via-genie-purple to-transparent"
            style={{ 
              transform: `translateY(${i * 20 - 200}px)`,
              opacity: i < 5 || i > 15 ? 0.3 : 0.7
            }}  
          />
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-genie-cream mb-4 tracking-tight">
            Globe<span className="font-normal">Genie</span>
          </h1>

          <div className="max-w-3xl mx-auto text-center mb-10 opacity-90">
            <p className="text-lg md:text-xl text-genie-cream mb-6">
              your personal travel assistant
            </p>
          </div>

          {/* Embedded YouTube Video */}
          <div className="w-full max-w-3xl mb-10 aspect-video">
            <iframe 
              className="w-full h-full rounded-lg"
              src="https://my-digital-assets123456.s3.eu-north-1.amazonaws.com/Intro%20Video.mov?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIATPQD5K2J3NZCK47G%2F20250507%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20250507T120417Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiSDBGAiEAvbCyLWgHro1cZBF2vChKivJqpEabGDLf6Yi1Hpu6QgICIQDqYnvT6sT8QxElyhgQ6pA8ZvaKgE9RqAhzzrf8nRVgOCrXAghdEAAaDDIzOTQ1MjY0MDkxNSIMFZ2Yz%2F%2FHRWE1swL9KrQCNeiuD0B5YMm5oLOFH%2BT9arWvAfrQTa70zYxSdHlQg%2B33Ty0QP8eoXWRB6ZTFSghXJcTuCryxIrC91KybCqavWj8v0k20OBjNuJdgo4H0Bq%2Bq3B5UEoIjPufO%2BnRT30%2FgR7uzj4sgvgSNfOhFPZvdp0hjLmIqWucBdMatce4d3L%2FGNuOVBZpgrxsZgo7I%2BjR%2Fmc4afnvFf9%2FcWZMbTqxnPtEHcZZpm3Hz%2Fpz93PKMUNLu%2B8ykZ0g9URwcqruEVrUkxC6KPn1WPL5jHlPcPQ9wnwksjV9fBCoqSxiyplE31t%2FLbYFixwDPw04WOiCXnzSVYqhfxpIC3727HaA3filnp9rtYHh0VdNMSTgmpOCjRgDIU7CX1PfgkgJYj7uSLbZHxci7%2BpeVJCIDyw%2BHIseZiqcELS0wmtDrwAY6rAKQMAL8rIdnRTzGJd9nbZ7UZ%2Bc%2FgKKNmb%2BOwrLqUoxUlDQGbgaKuLDsqGL%2B8t8uZT%2FZo7rhcHfgr9fNhWwOxC00GW%2FYP8TFUUTp5JVv%2BCcdNSvzRIyvrd3nEWa13L0bcfBMOo3DlHIzwBYD42ywt0y40NW216y8JB3u7G7B%2FIo7cwPVunDZmX4ESEnnU8DGwes11%2BK3Q31pliTbVyDF5D8XMSwQM0yijLUA8DyMLhF9T4iy2WPICNeZw%2F9fTtgXL1smIXIMQ7LSM3WFkY7NBN86v7Nlv2vGivxeCAX2IIa2irkkv1rLHuKe1upC187w3pnvNOf3dH9RL4TA6%2FT%2BNd2x%2FgohiN853iFMXfv4RRNTRUv5BYL0vZ9c%2BDApw2rpHi%2FSC5eh8t%2FesaEBK9w%3D&X-Amz-Signature=0d01b5c329844244afafb9811ea2af553dfab41a1fe4ed02f63c3647910b8701&X-Amz-SignedHeaders=host&response-content-disposition=inline"
              title="GlobeGenie Demo Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>

          {/* Floating orb */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full bg-gradient-to-b from-genie-purple to-genie-blue opacity-30 blur-2xl animate-float" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
