import Image from "next/image";
import MainFold from '@/app/components/mainFold/MainFold'
import Category from '@/app/components/category/Category'
import CategorySortBy from '@/app/components/category/CategorySortBy'

export default function Home() {
  return (
    <div>
      <MainFold />
      <Category />
    </div>
  );
}