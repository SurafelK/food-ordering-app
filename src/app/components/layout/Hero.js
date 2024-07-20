import Right from "./icons/right";

export default function Hero ()
{
   return(
    <section className="grid hero">
        <div  className="py-12" >
            <h1 className="text-4xl font-semibold"> Everything <br/> is better with a&nbsp; <span className="text-primary"> Pizza </span> </h1>
            <p className="my-4 text-gray-500 text-sm"> Pizza is the missing piece that makes every day complete, a simple delicious joy in life </p>
            
            <div className="flex gap-4">
                <button className="bg-primary py-2 px-4 uppercase flex gap-2 text-white rounded-full"> order Now <Right/> </button>
                <button className="flex gap-2 py-2 px-4 text-gray-600 font-semibold"> Learn more <Right/> </button>
            </div>
        </div>
        <div className="relative" >
            <img src={'/—Pngtree—modern kitchen food box italian_9047468.png'} layout={'fill'}
                objectFit ={'contain'} alt={'pizza'} 
            />
        </div>
    </section>
   )
}