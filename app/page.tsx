import Image from "next/image";
import Socials from "./components/top-socials";
import Header from "./components/nav-bar";
import  Style  from "page.module.css";
import React from 'react';
import Banner from "./components/banner";
import Boxes from "./components/boxes";
import Details from "./components/details-sec";
import Footer from "./components/footer";

export default function Home() {
  return (
<div>
  
 <Socials></Socials>
 <Header></Header>
 <Banner></Banner>
 <Boxes></Boxes>
 <Details></Details>
 <Footer></Footer>


 {/* <div className="banner">
 <div className="banner-heading"><span>Lorem ipsum dolor sit amet.</span></div>
 <div className="banner-para"><span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, laudantium.</span></div>
 </div>


  <div className="anchor-img">
    <img src="" alt="anchor Imae" />
  </div>

<div className="anchor paara">
  <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, aspernatur?</span>
</div>

<div className="details-sec">

 <div className="detail-1">

      <img src="" alt="image" className="img-1" />
      <span className="heading-1"> what we do</span>
      <span className="para-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita repellat reprehenderit quae debitis itaque ex ut laborum, fugiat quibusdam exercitationem.</span>
 </div>
 <div className="detail-2">

      <img src="" alt="image" className="img-2" />
      <span className="heading-2"> what we do</span>
      <span className="para-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita repellat reprehenderit quae debitis itaque ex ut laborum, fugiat quibusdam exercitationem.</span>
 </div>
 <div className="detail-3">

      <img src="" alt="image" className="img-3" />
      <span className="heading-3"> what we do</span>
      <span className="para-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita repellat reprehenderit quae debitis itaque ex ut laborum, fugiat quibusdam exercitationem.</span>
 </div>

</div> */}

</div>
  );
}

