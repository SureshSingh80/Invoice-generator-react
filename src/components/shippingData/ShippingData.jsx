import React from 'react'

const ShippingData = (props) => {

  const {shipData,setShipData}=props;

  const {billTo,shippingType,date,quotation}=shipData;

  let handleChange=(event)=>{
    let fieldName=event.target.name;
    let newValue=event.target.value;
    setShipData((currData)=>{
          // console.log("ShipData=",currData);
          return{...currData,[fieldName]:newValue};
    });
  }

  return (
    <div className='w-3/4 bg-gray-400 ml-auto mr-auto p-4 display-form'>
    <p className='text-center'>-------------------Shipping Details---------------------</p>
    <form action="">
      {/* First Row */}
     <div className='flex'>

       <div className='w-1/2 m-1'>
          <label htmlFor="billTo">Enter the BillTo/Ship To:</label><br />
          <input type="text"  id="billTo" name="billTo" value={billTo} placeholder='enter BillTo/Ship to name' className='bg-gray-200 mt-1 p-1 rounded w-full'
           onChange={handleChange}
          /><br />
       </div>

      <div className='w-1/2 m-1'>
        <label htmlFor="shippingType">Enter Type of Shipping:</label><br />
        <input type="text"  id="shippingType" name="shippingType" value={shippingType} placeholder='enter shipping Type' className='bg-gray-200 mt-1 p-1 rounded w-full'
         onChange={handleChange}
        />
      </div>
    </div> 

    {/* Second Row */}
    <div className='flex'>

       <div className='w-1/2 m-1'>
          <label htmlFor="date">Enter the date:</label><br />
          <input type="date"  id="date" name="date" value={date} placeholder='enter date of shipping' className='bg-gray-200 mt-1 p-1 rounded w-full'
           onChange={handleChange}
          /><br />
       </div>

      <div className='w-1/2 m-1'>
        <label htmlFor="quotation">Enter quotation title:</label><br />
        <input type="text"  id="quotation" name="quotation" value={quotation} placeholder='enter quotation title' className='bg-gray-200 mt-1 p-1 rounded w-full'
          onChange={handleChange}
         />
      </div>
    </div>        
    </form>
    </div>
  )
}

export default ShippingData