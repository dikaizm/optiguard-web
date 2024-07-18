import heroImage from '../assets/hero.jpg'

function HeroSection() {
  return (
    <div className='min-h-screen relative'>
      <div className='absolute w-full h-full bg-black/60 z-10'></div>

      <div className="absolute w-full h-full">
        <img className='w-full h-full object-cover' src={heroImage} alt='Hero' />
      </div>

      <div className='container mx-auto px-4 sm:px-12 relative lg:pt-24 z-20'>
        <div className='text-white w-full md:w-1/2 translate-y-1/2'>
          <div>
            <h1 className='text-4xl sm:text-6xl font-bold'>Untuk Masa Depan yang Lebih Cerah</h1>
            <p className='text-lg sm:text-2xl mt-4'>Deteksi penyakit mata menjadi lebih mudah, efisien, dan akurat.</p>
          </div>

          <div className='mt-12'>
            <a href='https://www.instagram.com/optiguard_pkmkc' target='_blank' className='bg-white text-lg text-black rounded-full py-3 px-4 font-semibold transition-colors duration-200 hover:bg-blue-500 hover:text-white'>Dapatkan OptiGuard</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection