import LogForm from '@/components/forms/LogForm'
import Image from 'next/image'
import Link from 'next/link'




const page = async() => {


  

  return (
    <div className="h-screen  m-auto flex flex-col items-center justify-center pb-10 max-w-2xl bg-white relative">
  
        <Image src={"/image-login.png"} width={283} height={216} alt='image' className='mb-16 ' />
        <h2 className='text-3xl font-bold text-center mb-8 max-w-[300px]'>Debes ingresar tus datos para usar la app</h2>
        <LogForm/>
        <div className='flex items-center gap-2'>
            <p className='text-gray-600'>¿No tienes una cuenta?</p>
            <Link href={"/register"}>
            <button>Registrate</button>
            </Link>
         
        </div>
   
 
      
    </div>
  )
}

export default page