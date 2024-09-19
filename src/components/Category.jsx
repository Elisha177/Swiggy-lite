import React, { useState } from 'react';
import { TiArrowRight, TiArrowLeft } from "react-icons/ti";

const Category = () => {
  
  const [slide,setSlide] = useState(0);
 
  const baseUrl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";
  

  const nextSlide = () => {
    setSlide(slide + 3)
  }

  const prevSlide = () => {
    setSlide(slide - 3)
  }

  const categoriesList =  [
    {
      "id": "750591",
      "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
      "action": {
        "link": "https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
        "text": "Biryani",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurants curated for biryani",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani&search_context=biryani",
      "frequencyCapping": {
        
      },
      "externalMarketing": {
        
      },
      "description": "Biryani"
    },
    {
      "id": "750579",
      "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png",
      "action": {
        "link": "https://www.swiggy.com/collections/83631?collection_id=83631&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
        "text": "Pizzas",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurants curated for pizza",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=83631&tags=layout_CCS_Pizza&search_context=pizza",
      "frequencyCapping": {
        
      },
      "externalMarketing": {
        
      },
      "description": "Pizzas"
    },
    {
      "id": "750589",
      "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png",
      "action": {
        "link": "https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2",
        "text": "Burgers",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurants curated for burger",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger&search_context=burger",
      "frequencyCapping": {
        
      },
      "externalMarketing": {
        
      },
      "description": "Burgers"
    },
    {
      "id": "750222",
      "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/17/58760e8e-324f-479e-88fa-31800120ea38_Rolls1.png",
      "action": {
        "link": "https://www.swiggy.com/collections/83669?collection_id=83669&tags=layout_CCS_Rolls&type=rcv2",
        "text": "Rolls",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurants curated for roll",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=83669&tags=layout_CCS_Rolls",
      "frequencyCapping": {
        
      },
      "externalMarketing": {
        
      },
      "description": "Rolls"
    },
    {
      "id": "749772",
      "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Noodles.png",
      "action": {
        "link": "https://www.swiggy.com/collections/80463?collection_id=80463&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
        "text": "Noodles",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurant curated for noodles",
        "altTextCta": "open"
      },
      "entityId": "80463",
      "frequencyCapping": {
        
      },
      "externalMarketing": {
        
      },
      "description": "Noodles"
    },
    {
      "id": "749868",
      "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png",
      "action": {
        "link": "https://www.swiggy.com/collections/83655?collection_id=83655&tags=layout_CCS_Cake&type=rcv2",
        "text": "Cakes",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurant curated for cake",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=83655&tags=layout_CCS_Cake",
      "frequencyCapping": {
        
      },
      "externalMarketing": {
        
      },
      "description": "Cakes"
    },
    {
      "id": "750216",
      "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pav Bhaji.png",
      "action": {
        "link": "https://www.swiggy.com/collections/80362?collection_id=80362&tags=layout_PavBhaji_Contextual&type=rcv2",
        "text": "Pav Bhaji",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurant curated for pav bhaji",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=80362&tags=layout_PavBhaji_Contextual",
      "frequencyCapping": {
        
      },
      "externalMarketing": {
        
      },
      "description": "Pav Bhaji"
    },
    {
      "id": "749768",
      "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Momos.png",
      "action": {
        "link": "https://www.swiggy.com/collections/80461?collection_id=80461&tags=layout_CCS_Momos&type=rcv2",
        "text": "Momos",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurant curated for momos",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=80461&tags=layout_CCS_Momos",
      "frequencyCapping": {
        
      },
      "externalMarketing": {
        
      },
      "description": "Momos"
    },
    {
      "id": "750248",
      "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_shawarma.png",
      "action": {
        "link": "https://www.swiggy.com/collections/80402?collection_id=80402&tags=layout_Shawarma_Contextual&type=rcv2",
        "text": "Shawarma",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurant curated for shawarma",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=80402&tags=layout_Shawarma_Contextual",
      "frequencyCapping": {
        
      },
      "externalMarketing": {
        
      },
      "description": "Shawarma"
    },
    {
      "id": "749790",
      "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pakoda.png",
      "action": {
        "link": "https://www.swiggy.com/collections/80469?collection_id=80469&tags=layout_BAU_Contextual%2Cpakoda&type=rcv2",
        "text": "Pakoda",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurant curated for pakoda",
        "altTextCta": "open"
      },
      "entityId": "80469",
      "frequencyCapping": {
        
      },
      "externalMarketing": {
        
      },
      "description": "Pakoda"
    },
    {
      "id": "750228",
      "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_samosa.png",
      "action": {
        "link": "https://www.swiggy.com/collections/80396?collection_id=80396&tags=layout_BAU_Contextual%2Csamosa&type=rcv2",
        "text": "Samosa",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurants curated for samosa",
        "altTextCta": "open"
      },
      "entityId": "80396",
      "frequencyCapping": {
        
      },
      "externalMarketing": {
        
      },
      "description": "Samosa"
    },
    {
      "id": "750131",
      "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png",
      "action": {
        "link": "https://www.swiggy.com/collections/80424?collection_id=80424&tags=layout_CCS_Dosa&type=rcv2",
        "text": "Dosa",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurants curated for dosa",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=80424&tags=layout_CCS_Dosa",
      "frequencyCapping": {
        
      },
      "externalMarketing": {
        
      },
      "description": "Dosa"
    },
    {
      "id": "750587",
      "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Chinese.png",
      "action": {
        "link": "https://www.swiggy.com/collections/83636?collection_id=83636&tags=layout_CCS_Chinese&type=rcv2",
        "text": "Chinese",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurant curated for chinese",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=83636&tags=layout_CCS_Chinese",
      "frequencyCapping": {
        
      },
      "externalMarketing": {
        
      },
      "description": "Chinese"
    },
    {
      "id": "745861",
      "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Shake.png",
      "action": {
        "link": "https://www.swiggy.com/collections/83673?collection_id=83673&tags=layout_CCS_Shakes&type=rcv2",
        "text": "Shake",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurants curated for shakes",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=83673&tags=layout_CCS_Shakes",
      "frequencyCapping": {
        
      },
      "externalMarketing": {
        
      },
      "description": "Shake"
    },
    {
      "id": "750234",
      "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Poori.png",
      "action": {
        "link": "https://www.swiggy.com/collections/80377?collection_id=80377&tags=layout_BAU_Contextual%2Cpoori&type=rcv2",
        "text": "Poori",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurant curated for poori",
        "altTextCta": "open"
      },
      "entityId": "80377",
      "frequencyCapping": {
        
      },
      "externalMarketing": {
        
      },
      "description": "Poori"
    },
    {
      "id": "750208",
      "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pastry.png",
      "action": {
        "link": "https://www.swiggy.com/collections/80355?collection_id=80355&tags=layout_CCS_Pastry&type=rcv2",
        "text": "Pastry",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurant curated for Pastry",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=80355&tags=layout_CCS_Pastry",
      "frequencyCapping": {
        
      },
      "externalMarketing": {
        
      },
      "description": "Pastry"
    },
    {
      "id": "750225",
      "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Salad.png",
      "action": {
        "link": "https://www.swiggy.com/collections/80394?collection_id=80394&tags=layout_CCS_Salad&type=rcv2",
        "text": "Salad",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurant curated for salad",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=80394&tags=layout_CCS_Salad",
      "frequencyCapping": {
        
      },
      "externalMarketing": {
        
      },
      "description": "Salad"
    },
    {
      "id": "750585",
      "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Salad-1.png",
      "action": {
        "link": "https://www.swiggy.com/collections/83634?collection_id=83634&search_context=southindian&tags=layout_CCS_SouthIndian&type=rcv2",
        "text": "South Indian",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurants curated for south indian",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=83634&tags=layout_CCS_SouthIndian&search_context=southindian",
      "frequencyCapping": {
        
      },
      "externalMarketing": {
        
      },
      "description": "South Indian"
    },
    {
      "id": "750637",
      "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Orange juice.png",
      "action": {
        "link": "https://www.swiggy.com/collections/80445?collection_id=80445&tags=layout_Juices_Contextual&type=rcv2",
        "text": "Juice",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurants curated for juice",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=80445&tags=layout_Juices_Contextual",
      "frequencyCapping": {
        
      },
      "externalMarketing": {
        
      },
      "description": "Juice"
    },
    {
      "id": "750643",
      "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Idli.png",
      "action": {
        "link": "https://www.swiggy.com/collections/80440?collection_id=80440&tags=layout_CCS_Idli&type=rcv2",
        "text": "Idli",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurants curated for idly",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=80440&tags=layout_CCS_Idli",
      "frequencyCapping": {
        
      },
      "externalMarketing": {
        
      },
      "description": "Idli"
    }
  ]


  return (
    <div className='max-w-[1200px] mx-auto'>
      <div className='flex my-5 items-center justify-between mt-3'>
        <div className='text-[#282c3f] text-[25px] font-bold'>What's on your mind?</div>
        <div className='flex w-[100px]'>
          <div className='w-[30px] h-[30px] cursor-pointer flex items-center justify-center bg-[#e2e2e7] rounded-full mx-2' onClick={prevSlide}>
            <TiArrowLeft />
          </div>
          <div className='w-[30px] h-[30px] cursor-pointer flex items-center justify-center bg-[#e2e2e7] rounded-full mx-2' onClick={nextSlide}>
            <TiArrowRight  />
          </div>
        </div>
      </div>
      <div className='flex border overflow-hidden'>
        {
          categoriesList.map(category => (
            <div
            style={{
                transform: `translateX(-${slide * 100}%)`
            }}
            key={category.id} className='flex-grow w-[150px] shrink-0'>
              <img src={`${baseUrl}${category.imageId}`} alt={category.accessibility.altText} />
              
            </div>
          ))
        }
      </div>
      <hr className=' my-6 border-[1px]'/>   
    </div>
  );
}

export default Category;
