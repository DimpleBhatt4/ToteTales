import Image from "next/image";
import MainFold from '@/app/components/mainFold/MainFold'
import Category from '@/app/components/category/Category'
import CategorySortBy from '@/app/components/category/CategorySortBy'
import Banner from '../components/banner/Banner'
import Carousel from '../components/splideCarousel/Carousel'
import HimHerCollage from '../components/himHer/HimHerCollage'
import CustomerReview from '../components/customerReview/CustomerReview'

export default function Home() {
  return (
    <div>
      <MainFold />
      <Category />
      <Banner img_link={'/sale_banner.png'} />
      <Carousel />
      <Banner img_link={'/sale_banner-2.png'} />
      <HimHerCollage />
      <Banner img_link={'/sale_banner-3.png'} />
      <CustomerReview />
    </div>
  );
}