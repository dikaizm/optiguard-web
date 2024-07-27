import heroImage from '../assets/hero.jpg'
import logoSupport from '../assets/logo-penting.png'

function HeroSection() {
  return (
    <div className='relative min-h-screen'>
      <div className='absolute z-10 w-full h-full bg-black/60'></div>

      <div className="absolute w-full h-full">
        <img className='object-cover w-full h-full' src={heroImage} alt='Hero' />
      </div>

      <div className='container relative z-20 px-4 mx-auto sm:px-12'>
        <div className='flex flex-col items-start w-full text-white translate-y-1/2 md:w-1/2'>
          <div className='mb-12 h-14'>
            <img className='object-contain w-full h-full' src={logoSupport} alt="Logo support" />
          </div>

          <div>
            <h1 className='text-4xl font-bold sm:text-6xl'>Untuk Masa Depan yang Lebih Cerah</h1>
            <p className='mt-4 text-lg sm:text-2xl'>Deteksi penyakit mata menjadi lebih mudah, efisien, dan akurat.</p>
          </div>

          <div className='mt-12'>
            <a href='https://www.instagram.com/optiguard_pkmkc' target='_blank' className='px-4 py-3 text-lg font-semibold text-black transition-colors duration-200 bg-white rounded-full hover:bg-blue-500 hover:text-white'>Dapatkan OptiGuard</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection