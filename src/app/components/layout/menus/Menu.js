export default function MenusItem() 
{
    return(
        
            <div className="bg-gray-300 p-4 rounded-lg text-center hover:bg-white hover:cursor-pointer transition-all hover:shadow-md hover:shadow-black/75 ">
               <div className="text-center">
                    <img src="/pizza.png" alt="pizza" className="max-h-auto max-h-24 block mx-auto"/>
               </div>
                <h4 className="font-semibold my-3 text-xl">  Pepperoni Pizza</h4>
                <p className="text-gray-500 text-sm"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <button className="bg-primary mt-4 rounded-full text-white px-6 py-2 mt-4"> Add to cart $12 </button>
            </div>

    )
}