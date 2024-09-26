import React from 'react'
import DisplayCompInfo from '../DisplayCompInfo'
import DisplayShipInfo from '../DisplayShipInfo';
import DisplayItemInfo from '../DisplayItemInfo';


const PrintInterface = (props) => {
 
  const {compData,shipData,itemData,setAmount,totalAmount,setDiscount,totalDiscount,setGst,totalGst}=props;
  return (
    <div className="print-container mt-4">
          <DisplayCompInfo compData={compData}></DisplayCompInfo>
          <hr className='m-4'/>

          <DisplayShipInfo shipData={shipData}></DisplayShipInfo>
          <hr className='m-4'/>

          <div className='flex justify-between ml-4 mr-4 w-full'>
             <div className='w-20 text-center'><b>Sr No.</b></div>
             <div className='w-44 text-center'><b>Name</b></div>
             <div className='w-44 text-center'><b>Description</b></div>
             <div className='w-44 text-center'><b>quantity</b></div>
             <div className='w-44 text-center'><b>Unit price</b></div>
             <div className='w-44 text-center'><b>Discount</b></div>
             <div className='w-44 text-center'><b>Tax(CGST+SGST)</b></div>
             <div className='w-44 text-center'><b>Amount</b></div>
          </div>
          {
            itemData.map((item,index)=>{
              return <DisplayItemInfo item={item} index={index} setAmount={setAmount} setDiscount={setDiscount} setGst={setGst}></DisplayItemInfo>
            })
          }
          <hr />

          {/* Displaying discount and taxes  */}
          <div className='w-full  h-auto mt-4' >
             <p className='float-right mr-4'><b>Total Amount:</b> {totalAmount}</p><br />          
          </div>

          <div>
            <p className='float-right mr-4 '><b>Total Discount:</b> {totalDiscount}</p><br />
          </div>

          <div>
             <p className=' float-right mr-4  '><b>Total Tax:</b> {totalGst}</p>
          </div>
          
          

    </div>
  )
}

export default PrintInterface