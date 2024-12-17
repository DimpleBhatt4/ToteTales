import React from 'react'
import products from "@/public/products";

const DiscRibbon = ({selectedId, layoutType}) => {
    const selected_item = products.filter((product)=>product.p_id==selectedId);
    let discPercent= selected_item[0].sale_price ? ((selected_item[0].actual_price-selected_item[0].sale_price)/selected_item[0].actual_price)*100 : 0
    
  return (
    <div className={`absolute ${layoutType=='compact'?'top-0 right-[25%]' :(layoutType=='medium'? 'top-0 right-[16%]': 'top-0 right-0')} bg-red-600 text-white py-1 px-2 ${discPercent==0 ? 'hidden' : 'block'}`}>{discPercent.toFixed(0)}% off</div>
  )
}

export default DiscRibbon