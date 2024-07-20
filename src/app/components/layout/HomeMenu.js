export default function HomeMenu()
{
    return(
        <section className="">
            <div className="absolute h-full left-0  right-0 w-full justify-start">
                <div className="h-48 w-48 absolute left-0 -top-[70px] -z-10 text-left " style={{overflowX:"hidden"}} >
                    <img src={"/sallad1.png"} layout={'fill'} objectFit={'contain'} alt={'salad'}/>
                </div>

                <div className="h-48  absolute -top-36  right-0 -z-10">
                    <img src={"/sallad2.png"} width={107} height={195} alt={'salad'}/>
                </div>
            </div>
            <div className="text-center">
                <div className="text-center" >
                        <h3 className="uppercase text-gray-600 font-semibold leading-4"> Check out</h3>
                        <h2 className="text-primary font-bold text-4xl italic " > Menu </h2>
                </div>
            </div>
      </section>
    )
}