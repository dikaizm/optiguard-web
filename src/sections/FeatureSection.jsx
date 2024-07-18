import appMainFeature from '../assets/app-main-feature.png'
import { MdCamera, MdDeviceHub, MdMedication } from 'react-icons/md'
import { IoMdEye } from 'react-icons/io'

export default function FeatureSection() {
  return (
    <div className="container mx-auto py-20 bg-white px-4 sm:px-12" id='feature-section'>
      <h2 className='text-center font-bold text-3xl'>Fitur Aplikasi OptiGuard</h2>

      <div className="grid grid-cols-3 gap-8 place-items-center mt-8">
        <div className='flex flex-col gap-8 w-2/3'>
          <FeatureItem align="right" title="Foto Fundus" desc="Fitur untuk foto fundus dan mendapatkan hasil deteksi" icon={<MdCamera className='w-full h-full' />} />

          <FeatureItem align="right" title="Asesmen Mandiri" desc="Fitur untuk mengecek distorsi penglihatan pada retina" icon={<IoMdEye className='w-full h-full' />} />
        </div>

        <div className="w-72">
          <img className="w-full h-full object-contain" src={appMainFeature} alt="OptiGuard main feature" />
        </div>

        <div className='flex flex-col gap-8 w-2/3'>
          <FeatureItem title="Akses Alat" desc="Mengecek ketersediaan alat OptiGuard di fasilitas kesehatan terdekat" icon={<MdDeviceHub className='w-full h-full' />} />

          <FeatureItem title="Jadwal Dokter" desc="Menjadwalkan janji temu untuk konsultasi langsung dengan dokter" icon={<MdMedication className='w-full h-full' />} />
        </div>
      </div>
    </div>
  )
}

function FeatureItem({ title, desc, icon, align }) {
  return (
    <div className={`flex flex-col ${(align == 'right' ? 'items-end text-right' : "")}`}>
      <div className='bg-green-100 p-2 rounded-full w-14 h-14 flex items-center justify-center'>
        {icon}
      </div>
      <div className='mt-2'>
        <h4 className='font-semibold text-lg'>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  )
}