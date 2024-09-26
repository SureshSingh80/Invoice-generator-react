import React from 'react'

const CompanyData = (props) => {

  
  let {compData,setCompData}=props;
  let {name,registeredAddress,branchAddress,contact,email,website}=compData;

  const handleChange=(event)=>{
        let fieldName=event.target.name;
        let newValue=event.target.value;
        setCompData((currData)=>{
              return{...currData,[fieldName]:newValue};
        });
    
  }
  
  return (
    <div className='w-3/4 bg-gray-400 blue-400 ml-auto mr-auto mt-24 p-4 display-form'>
      <p className='text-center'>-----------------Company Details----------------------</p>
    <form action="">
      {/* First Row */}
     <div className='flex'>

       <div className='w-1/2 m-1'>
          <label htmlFor="name">Enter Company Name:</label><br />
          <input type="text"  id="name" name="name" value={name} placeholder='enter company name' className='bg-gray-200 mt-1 p-1 rounded w-full'
           onChange={handleChange}
          /><br />
       </div>

      <div className='w-1/2 m-1'>
        <label htmlFor="registeredAddress">Enter Company registeredAddress:</label><br />
        <input type="text"  id="registeredAddress" name="registeredAddress" value={registeredAddress} placeholder='enter company registeredAddress' className='bg-gray-200 mt-1 p-1 rounded w-full'
         onChange={handleChange}
        />
      </div>
    </div> 

    {/* Second Row */}
    <div className='flex'>

       <div className='w-1/2 m-1'>
          <label htmlFor="branchAddress">Enter Company BranchAddress:</label><br />
          <input type="text"  id="branchAddress" name="branchAddress" value={branchAddress} placeholder='enter company branchAddress' className='bg-gray-200 mt-1 p-1 rounded w-full'
           onChange={handleChange}
          /><br />
       </div>

      <div className='w-1/2 m-1'>
        <label htmlFor="contact">Enter Company Contact:</label><br />
        <input type="number"  id="contact" name="contact" value={contact} placeholder='enter company contact' className='bg-gray-200 mt-1 p-1 rounded w-full'
          onChange={handleChange}
         />
      </div>
    </div> 

    {/* Third Row */}
    <div className='flex'>

       <div className='w-1/2 m-1'>
          <label htmlFor="email">Enter Company Email:</label><br />
          <input type="email"  id="email" name="email" value={email} placeholder='enter company Email' className='bg-gray-200 mt-1 p-1 rounded w-full'
           onChange={handleChange}
          /><br />
       </div>

      <div className='w-1/2 m-1'>
        <label htmlFor="website">Enter Company Website:</label><br />
        <input type="text"  id="website" name="website" value={website} placeholder='enter company website' className='bg-gray-200 mt-1 p-1 rounded w-full'
         onChange={handleChange}
        />
      </div>
    </div> 
       
    </form>
    </div>
  )
}

export default CompanyData