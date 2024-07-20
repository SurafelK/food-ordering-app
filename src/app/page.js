import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu";
import SectionHeaders from "./components/layout/sectionHeaders";


export default function Home() {
  return (  
  <>
      <Header/>
      <Hero/>
      <HomeMenu/>

      <section className="text-center my-16">
        <SectionHeaders subHeader={'Our story'} mainHeader ={'About us'} />

        <div className="text-gray-500 flex-col  gap-4">
          <p className="max-w-2xl mx-auto mt-4" >
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
        
        </div>
      </section>

      <section className="text-center my-8">
        <SectionHeaders subHeader={'Dont hesitate'} mainHeader={'Contact us'}/>
        <a href="tel:+251963626110"> +251 9 999 99 </a>
      </section>
  </>
  );
}
