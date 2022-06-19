import React from 'react';
import Header from '../Components/Header';
import { contract } from './../Api/Const'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Test = () => {
    const [address, setAddress] = useState  ()
    var web3 = new Web3(Web3.providers.HttpProvider('http://localhost:7545'))
    web3.eth.getAccounts().then()
    var myContract = new web3.eth.Contract(contract, '0xa8Adf07f02D15ceBD7F3328F0fe6D65A74c62D62')
    myContract.methods
    .getSender()
    .call()
    .then((result)=> setAddress(result))
    var str ="0xAc2848A916c18eEBD4d0fFF10AD2517d9026DCc3"
    var str1 ="0x31C8cd080503E5c05Ff97CEd4B1C3C11c5D904Ef"
    var str2 ="0xdA9e33f8Bd9B7A9286b313d8cc435Ac7f4A22086"
    const handleClick =() => {
        myContract.methods.sendCV(
        str,str1, str2).send({
        from: str1,
        gas: 3000000
    })}
    return ( 
        <>
            <Header/>
            <div className="min-w-full min-h-screen flex items-center justify-center bg-primary">
                <input id="test" type="text" />
                <button className="w-[200px] bg-orange-400" onClick={handleClick}>OK</button>
            </div>
        </> 
    );
}

export default Test;