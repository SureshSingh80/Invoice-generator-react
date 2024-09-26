import React from 'react'

const ItemData = (props) => {
 const {item,setItemData,index}=props;
 const {name,description,quantity,price,discount,tax,id}=item;


 const handleChange=(event,id)=>{
  let fieldName=event.target.name;
  let newValue=event.target.value;
  console.log("index",index);
  console.log("id=",id);
 
   setItemData((items)=>items.map((item)=>item.id===id?{...item,[fieldName]:newValue}:{...item}))
      
  
 }
   return (
    <div className='w-3/4 bg-gray-400 ml-auto mr-auto p-4 display-form'>
      <p className='text-center'>-----------------Item Details----------------------</p>
    <form action="">
      {/* First Row */}
     <div className='flex'>

       <div className='w-1/2 m-1'>
          <label htmlFor="name">Enter Item Name:</label><br />
          <input type="text"  id="name" name="name" value={name} placeholder='enter Item name' className='bg-gray-200 mt-1 p-1 rounded w-full'
           onChange={(event)=>handleChange(event,id)}
          /><br />
       </div>

      <div className='w-1/2 m-1'>
        <label htmlFor="description">Enter Item description:</label><br />
        <input type="text"  id="description" name="description" value={description} placeholder='enter item description' className='bg-gray-200 mt-1 p-1 rounded w-full'
        onChange={(event)=>handleChange(event,id)}
        />
      </div>
    </div> 

    {/* Second Row */}
    <div className='flex'>

       <div className='w-1/2 m-1'>
          <label htmlFor="quantity">Enter item quantity:</label><br />
          <input type="number"  id="quantity" name="quantity" value={quantity} placeholder='enter quantity' className='bg-gray-200 mt-1 p-1 rounded w-full'
           onChange={(event)=>handleChange(event,id)}
          /><br />
       </div>

      <div className='w-1/2 m-1'>
        <label htmlFor="price">Enter item price:</label><br />
        <input type="number"  id="price" name="price" value={price} placeholder='enter price of item' className='bg-gray-200 mt-1 p-1 rounded w-full'
         onChange={(event)=>handleChange(event,id)}
         />
      </div>
    </div> 

    {/* Third Row */}
    <div className='flex'>

       <div className='w-1/2 m-1'>
          <label htmlFor="discount">Enter item discount:</label><br />
          <input type="number"  id="discount" name="discount" value={discount} placeholder='enter item discount' className='bg-gray-200 mt-1 p-1 rounded w-full'
           onChange={(event)=>handleChange(event,id)}
          /><br />
       </div>

      <div className='w-1/2 m-1'>
        <label htmlFor="tax">Enter item tax:</label><br />
        <input type="number"  id="tax" name="tax" value={tax} placeholder='enter tax of item' className='bg-gray-200 mt-1 p-1 rounded w-full'
         onChange={(event)=>handleChange(event,id)}
        />
      </div>
    </div> 
       
    </form>
    </div>
  )
}

export default ItemData