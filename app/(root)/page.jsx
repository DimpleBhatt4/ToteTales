import Image from "next/image";
import MainFold from '@/app/components/mainFold/MainFold'
import Category from '@/app/components/category/Category'
import CategorySortBy from '@/app/components/category/CategorySortBy'
import Banner from '../components/banner/Banner'
import Carousel from '../components/splideCarousel/Carousel'
import CustomerReview from '../components/customerReview/CustomerReview'
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <MainFold />
      <Banner img_link={'/sale_banner-3.png'} />

      <Category />
      <Banner img_link={'/sale_banner.png'} />
      <Carousel />
      <Link href={'/sale'}>
      <Banner img_link={'/sale_banner-2.png'} />
      </Link>
      <CustomerReview />

    </div>
  );
}