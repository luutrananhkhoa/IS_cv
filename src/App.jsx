import { useState,useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Page/Home';
import Student from './Page/Student';
import Company from './Page/Company';
import Mycv from './Page/Mycv';
import Login from './Page/Login';
import aos from 'aos';
import 'aos/dist/aos.css';
import Register from './Page/Register';

function App() {

  var web3 = new Web3(Web3.providers.HttpProvider("http://localhost:7545"));

  web3.eth.getAccounts().then(console.log);

  var myContract = new web3.eth.Contract(
    [
      {
        "constant": true,
        "inputs": [],
        "name": "getBalance",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "skills",
        "outputs": [
          {
            "name": "_title",
            "type": "string"
          },
          {
            "name": "_level",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_owner",
            "type": "address"
          },
          {
            "name": "institution",
            "type": "string"
          },
          {
            "name": "focusArea",
            "type": "string"
          },
          {
            "name": "startYear",
            "type": "uint256"
          },
          {
            "name": "finishYear",
            "type": "uint256"
          }
        ],
        "name": "editEducation",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getSender",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_owner",
            "type": "address"
          },
          {
            "name": "company",
            "type": "string"
          },
          {
            "name": "role",
            "type": "string"
          },
          {
            "name": "startDate",
            "type": "string"
          },
          {
            "name": "endDate",
            "type": "string"
          },
          {
            "name": "summary",
            "type": "string"
          },
          {
            "name": "highlights",
            "type": "string"
          }
        ],
        "name": "editExperience",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "cvContract",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_owner",
            "type": "address"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "birthDay",
            "type": "string"
          },
          {
            "name": "professionalTitle",
            "type": "string"
          },
          {
            "name": "email",
            "type": "string"
          },
          {
            "name": "github",
            "type": "string"
          },
          {
            "name": "linked",
            "type": "string"
          }
        ],
        "name": "editProfile",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_owner",
            "type": "address"
          },
          {
            "name": "title",
            "type": "string"
          },
          {
            "name": "level",
            "type": "uint256"
          }
        ],
        "name": "editSkill",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "getExperience",
        "outputs": [
          {
            "name": "Company",
            "type": "string"
          },
          {
            "name": "Role",
            "type": "string"
          },
          {
            "name": "StartDate",
            "type": "string"
          },
          {
            "name": "EndDate",
            "type": "string"
          },
          {
            "name": "Summary",
            "type": "string"
          },
          {
            "name": "Highlights",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "deposit",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "getSkill",
        "outputs": [
          {
            "name": "Title",
            "type": "string"
          },
          {
            "name": "Level",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "profiles",
        "outputs": [
          {
            "name": "_name",
            "type": "string"
          },
          {
            "name": "_birthDay",
            "type": "string"
          },
          {
            "name": "_professionalTitle",
            "type": "string"
          },
          {
            "name": "_email",
            "type": "string"
          },
          {
            "name": "_github",
            "type": "string"
          },
          {
            "name": "_linked",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "experiences",
        "outputs": [
          {
            "name": "_company",
            "type": "string"
          },
          {
            "name": "_role",
            "type": "string"
          },
          {
            "name": "_startDate",
            "type": "string"
          },
          {
            "name": "_endDate",
            "type": "string"
          },
          {
            "name": "_summary",
            "type": "string"
          },
          {
            "name": "_highlights",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "educations",
        "outputs": [
          {
            "name": "_institution",
            "type": "string"
          },
          {
            "name": "_focusArea",
            "type": "string"
          },
          {
            "name": "_startYear",
            "type": "uint256"
          },
          {
            "name": "_finishYear",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "getProfile",
        "outputs": [
          {
            "name": "Name",
            "type": "string"
          },
          {
            "name": "Birthday",
            "type": "string"
          },
          {
            "name": "ProfessionalTitle",
            "type": "string"
          },
          {
            "name": "Email",
            "type": "string"
          },
          {
            "name": "Github",
            "type": "string"
          },
          {
            "name": "Linked",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "getEducation",
        "outputs": [
          {
            "name": "Institution",
            "type": "string"
          },
          {
            "name": "FocusArea",
            "type": "string"
          },
          {
            "name": "StartYear",
            "type": "uint256"
          },
          {
            "name": "FinishYear",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "0xd12aF34F39F12F1D6f095e9C2cEeD55411E7D475"
);

        myContract.methods
            .getBalance()
            .call()
            .then((result) => console.log(result.toString()));

  useEffect(() => {
    aos.init();
    aos.refresh()
  },[])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/student' element={<Student />}/>
        <Route path='/company' element={<Company />}/>
        <Route path='/mycv' element={<Mycv />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />}/>
      </Routes>
    </div>
  )
}

export default App;
