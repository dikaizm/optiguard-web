import adaptorHero from '../assets/adaptor-hero.png'

function AdaptorSection() {
  return (
    <div className="py-20 bg-green-200 h-[24rem] mt-24 rounded-2xl relative container mx-auto px-4 sm:px-12" id='adaptor-section'>
      <div className='absolute right-0 bottom-0 w-1/2 lg:w-1/3 rounded-br-2xl overflow-hidden'>
        <img src={adaptorHero} alt="" />
      </div>

      <div className='relative w-1/2'>
        <h2 className='text-3xl sm:text-4xl font-bold text-gray-800'>Adaptor OptiGuard</h2>
        <p className='text-gray-600 mt-4'>Adaptor OptiGuard digunakan untuk memudahkan pengambilan gambar fundus menggunakan smartphone.</p>
      </div>
    </div>
  )
}

export default AdaptorSection