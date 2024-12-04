import { Link } from 'react-router-dom'



const KidsBook = ({ kidsbook }) => {

    return (
        <>
            <div className='bg-white border-2 border-black border-solid w-[300px] h-[400px] mt-10 rounded-xl overflow-hidden '> 
                <Link to={`kidsbook/${kidsbook.id}`} className='h-[100%] w-[100%]'>
                    <img className='h-[80%] w-[100%] object-cover bg-center border-b-2 border-black border-solid' src={kidsbook.image} alt="" />
                    <p className='text-[20px] h-[20%] flex justify-center items-center'>{kidsbook.book_name}</p>
                </Link>
            </div>
        </>
    )
}

export default KidsBook