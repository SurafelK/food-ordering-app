import MenusItem from "./menus/Menu";
import SectionHeaders from "./sectionHeaders";

export default function HomeMenu()
{
    return(
        <section className="">
            <div className="absolute left-0  right-0 w-full justify-start">
                <div className="h-48 w-48 absolute left-0 -top-[70px] -z-10 text-left " style={{overflowX:"hidden"}} >
                    <img src={"/sallad1.png"} layout={'fill'} objectFit={'contain'} alt={'salad'}/>
                </div>

                <div className="h-48  absolute -top-36  right-0 -z-10">
                    <img src={"/sallad2.png"} width={107} height={195} alt={'salad'}/>
                </div>
            </div>
            <div className="text-center mb-4">
               <SectionHeaders subHeader={'check out'} mainHeader={'Menu'} />
            </div>
            <div className="grid grid-cols-3 gap-4" >
                <MenusItem/>
                <MenusItem/>
                <MenusItem/>
                <MenusItem/>
                <MenusItem/>
                <MenusItem/>

            </div>
      </section>
    )
}