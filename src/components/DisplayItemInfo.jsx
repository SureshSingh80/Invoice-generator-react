import React from 'react'

const DisplayItemInfo = (props) => {

  const {item,index,setAmount,setDiscount,setGst}=props;
  const {name,description,quantity,price,discount,tax=10}=item;
  let amount=0;
  let unitPrice=(price*quantity).toFixed(3);
  // calculate and set Discount
  let discountValue=(unitPrice*discount)/100;
  setDiscount(discountValue);
  amount=unitPrice-discountValue;

  // calculate and set GST
  let gstValue=(unitPrice*tax)/100;
  setGst(gstValue);
  amount=amount+gstValue;
  setAmount(amount);
  return (
    <div>
       <div className='flex justify-between ml-4 mr-4 w-full'>
         <div className='w-20 text-center'>{index+1}</div>
         <div className='w-44 text-center'><p className='mr-8'>{name}</p></div>
         <div className='w-44 text-center '><p className='mr-8'>{description}</p></div>
         <div className='w-44 text-center '><p className='mr-8'>{quantity}</p></div>
         
         <div className='w-44 text-center '><p className='mr-8'>{price}</p></div>
         <div className='w-44 text-center '><p className='mr-8'>{discount?discount:0}%</p></div>
         <div className='w-44 text-center '><p className='mr-8'>{tax?tax:0}%</p></div>

         <div className='w-44 text-center '><p className=''>{amount}</p></div>
      </div>
    </div>
  )
}

export default DisplayItemInfo