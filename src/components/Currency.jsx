import React from 'react'
import '../css/currency.css'
import { FcCurrencyExchange } from "react-icons/fc";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useState } from 'react'
import axios from 'axios';

let BASE_URL="https://api.freecurrencyapi.com/v1/latest"
let API_KEY="fca_live_V12szA2bSF29WF1u2K7Gqhrv2SO6iipBXKEGSaiR"



function Currency(){
  const[amount,setAmount]=useState(0);
  const[fromCurrency,setFromCurrency]=useState('USD');
  const[toCurrency,setToCurrency]=useState("TRY");
  const[result,setResult]=useState(0);
 
  const excange= async()=>{
    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
    const result=(response.data.data[toCurrency]*amount).toFixed(5)
    setResult(result)
  }

  return (<>
    <div className='currency-div'>
      <div style={{fontFamily:"arial",backgroundColor:"black",color:"white",width:"100%",textAlign:"center"}}>
        <h3 >
          DÖVİZ KURU UYGULAMASI
        </h3>
      </div>
      <div style={{marginTop:"25px"}}>
      <input type='number' className='amount'
      value={amount}
      onChange={(e)=>setAmount(e.target.value)}
      />
      <select onChange={(e)=>setFromCurrency(e.target.value)} className='from-currency-option'>
        <option>USD</option>
        <option>EUR</option>
        <option>TRY</option>
      </select>
      <FaRegArrowAltCircleRight style={{fontSize: "30px"}} />
      <FcCurrencyExchange style={{fontSize: "50px"}} />
      <FaRegArrowAltCircleRight style={{fontSize: "30px", marginRight:"10px"}}/>

      <select onChange={(e)=>setToCurrency(e.target.value)} className='to-currency-option'>
        <option>TRY</option>
        <option>EUR</option>
        <option>USD</option>
      </select>

      <input value={result} onChange={(e)=>setResult(e.target.value)} type='number' className='result' />
    </div>
    <div>
      <button
       onClick={excange}
       className='exchangeButton'>Çevir</button>
    </div>
    </div>
    </>)
}

export default Currency
