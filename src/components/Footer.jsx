import logoVertical from '../assets/logo-vertical.png'

export default function Footer() {
  return (
    <footer className="mt-16">
      <div className='bg-slate-800 w-full'>
        <div className='relative container mx-auto px-4 sm:px-12 py-4'>
          <div className='flex items-center justify-between gap-12 text-slate-200'>
            
            <div className='h-48 w-fit'>
              <img className='h-full w-full object-contain' src={logoVertical} alt='Optiguard' />
            </div>

            <p>OptiGuard merupakan inovasi mahasiswa Telkom University yang didanai oleh Kemendikbudristek melalui Program Kreativitas Mahasiswa Bidang Karsa Cipta (PKM-KC).</p>

            <p className='whitespace-nowrap'>Copyright 2024</p>

          </div>
        </div>
      </div>
    </footer>
  )
}