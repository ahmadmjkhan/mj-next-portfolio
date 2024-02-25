"use client";

import { reviews } from "@/app/constants";
import SectionHeading from "./SectionHeading";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import {Swiper,SwiperSlide} from "swiper/react";
import {Swiper as SwiperType} from "swiper";
import "swiper/css";
import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";

const Testimonial = () => {

    const swiperRef = useRef<SwiperType>();
    const [slidesPerView,setSliderPerView] = useState(3);
    const {width} = useWindowSize();

    useEffect(()=>{
        if(width <760){
            setSliderPerView(1);
        }else if(width < 1268){
            setSliderPerView(2);
        }else{
            setSliderPerView(3);
        }
      
    },[width]);


  return (
    <section className="max-width section-padding">
        <SectionHeading title="what my clien say about me" subtitle="Lorem ipsu her"/>

        <div className="">
            <div className="pb-3 border-b border-peach flex justify-between items-center">
             <p>{reviews.length} total Reviews</p>
             <div className="flex gap-2">
                <button className="bg-peach-200 border border-peach p-1 rounded text-grey-700" onClick={()=>swiperRef.current?.slidePrev()}>
                   <ChevronLeft/>
                </button>
            <button className="bg-peach-200 border border-peach p-1 rounded text-grey-700" onClick={()=>swiperRef.current?.slideNext()}>
                   <ChevronRight/>
                </button>
             </div>
            </div>

            <div className="pt-8">
                <Swiper spaceBetween={20} slidesPerView={slidesPerView} loop={true} onSwiper={(swiper)=>(swiperRef.current = swiper)}>{reviews.map((review,index)=>(
                    <SwiperSlide key={index}><SingleReview review={review}/></SwiperSlide>
                ))}</Swiper>
            </div>
        </div>
    </section>
  )
}

export default Testimonial;


const SingleReview = ({review}:{review:(typeof reviews)[0]}) =>{
    return <div className="box flex flex-col gap-5">
          <div className="flex items-center justify-between">

            <div>
                <h6 className="text-grey-700">{review.name}</h6>
                <p className="text-grey-500">{review.designation}</p>
            </div>
            <div className="flex gap-3">
                {review.socialLinks.map((link,index)=>(
                     <a href={link.url} className="text-purple hover:scale-105 transition-transform duration-300">
                        <link.icon strokeWidth={0} fill="currentColor"/>
                     </a>
                ))}
            </div>

          </div>

          <div className="flex gap-1">
            {
                Array.from({length:5}).map((_,index)=>(
                    <Star key={index} size={20} fill="currentColor" className={`text-purple 
                    ${index <review.stars ? "opacity-100" : "opacity-30"}`}/>
                ))
            }

          </div>

          <p className="text-grey-700">{review.review}</p>

    </div>
}