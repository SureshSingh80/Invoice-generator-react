import { useEffect, useState } from "react"
import CompanyData from './components/companyData/CompanyData';
import ShippingData from "./components/shippingData/ShippingData";
import ItemData from "./components/itemData/ItemData";
import BottomSection from "./components/bottomSection/BottomSection";
import PrintInterface from "./components/PrintInterface/PrintInterface";

function App() {
 
    const [compData,setCompData]=useState({
       name:"",
       registeredAddress:"",
       branchAddress:"",
       contact:"",
       email:"",
       website:""
    });

    

    const [shipData,setShipData]=useState({
        billTo:"",
        shippingType:"",
        date:"",
        quotation:""
    });


    const [itemData,setItemData]=useState([
      {
      id:Date.now(),
      name:"",
      description:"",
      quantity:"",
      price:"",
      discount:"",
      tax:""
     }
  ]);

  const [amount,setAmount]=useState(0);  
  const [totalAmount,setTotalAmount]=useState(0);
  const [gst,setGst]=useState(0);
  const [totalGst,setTotalGst]=useState(0);
  const [discount,setDiscount]=useState(0);
  const [totalDiscount,setTotalDiscount]=useState(0);
  


  
 




  const handlePush=()=>{
       setItemData((prevItem)=>{
         return [...prevItem,{ 
          id:Date.now(),
          name:"",
          description:"",
          quantity:"",
          price:"",
          discount:"",
          tax:""}]
       })

       setTotalAmount((prevAmt)=>prevAmt+amount);
       setTotalDiscount((prevDisc)=>prevDisc+discount);
       setTotalGst((prevGst)=>prevGst+gst);

       
  }
  const handlePrint=async()=>{
     await setTotalAmount((prevAmt)=>prevAmt+amount);
     await setTotalDiscount((prevDisc)=>prevDisc+discount);
     await setTotalGst((prevGst)=>prevGst+gst);
     printing();
  } 

  const printing=()=>{
      window.print();
  }
  

  

  return (
    <>
       
        <CompanyData compData={compData} setCompData={setCompData}></CompanyData>
        <ShippingData shipData={shipData} setShipData={setShipData}></ShippingData>
        {
          itemData.map((item,index)=>
          (
             <ItemData item={item} index={index} setItemData={setItemData}></ItemData>
          ))
        }

     <div className="w-full mb-4">
       <button  onClick={handlePush} style={{marginLeft:"50%"}} className=" mt-2 border-2 border-black p-2 rounded add-btn " >Add Item</button>
       <button  onClick={handlePrint} className=" w-28 text-lg  border-2 border-black ml-[25%] p-2 rounded print-btn">
         Print
         <span class="material-symbols-outlined relative top-1 left-1 text-lg ">print</span>
      </button>

     </div>
       
       <PrintInterface compData={compData} shipData={shipData} itemData={itemData} 
       setAmount={setAmount} totalAmount={totalAmount} setDiscount={setDiscount} totalDiscount={totalDiscount} setGst={setGst} totalGst={totalGst}>
       </PrintInterface>
       <BottomSection></BottomSection>
       

    </>
  )
}



export default App
