import { Link } from 'react-router-dom'



const Ebook = ({ ebook }) => {

    return (
        <>
            <div className='bg-white border-2 border-black border-solid h-[400px] w-[350px] sm:w-[220px] sm:h-[350px] md:w-[280px] md:h-[350px] lg:w-[280px] lg:h-[380px] xl:w-[270px] xl:h-[400px] mt-10 rounded-xl overflow-hidden bg-cover hover:translate-y-[-15px] duration-75 ease-linear'> 
                <Link to={`ebook/${ebook.id}`} className='h-[100%] w-[100%]'>
                    <img className='h-[80%] w-[100%] object-cover bg-center border-b-2 border-black border-solid' src={ebook.image} alt="" />
                    <p className='text-[20px] h-[20%] flex justify-center items-center'>{ebook.book_name}</p>
                </Link>
            </div>
        </>
    )
}

export default Ebook