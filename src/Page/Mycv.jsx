import React from 'react';
import Header from '../Components/Header';
import avt from '../assets/avt.jpg';
import { IoMdMail } from 'react-icons/Io';
import { BsFillTelephoneFill } from 'react-icons/Bs';
import { BsFacebook } from 'react-icons/Bs';
import { BsGithub } from 'react-icons/Bs';
import { BsFillHouseDoorFill } from 'react-icons/Bs';
import Progressbar from '../Components/Progressbar';

const Mycv = () => {

    //Progress Bar
    const skills = [{
        title: 'HTML',
        per: '75'
    }];

    var web3 = new Web3(Web3.providers.HttpProvider('http://localhost:7545'));

    web3.eth.getAccounts().then(console.log);

    var myContract = new web3.eth.Contract(
    [
      {
        constant: true,
        inputs: [],
        name: 'getBalance',
        outputs: [
          {
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: '',
            type: 'uint256',
          },
        ],
        name: 'skills',
        outputs: [
          {
            name: '_title',
            type: 'string',
          },
          {
            name: '_level',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_owner',
            type: 'address',
          },
          {
            name: 'institution',
            type: 'string',
          },
          {
            name: 'focusArea',
            type: 'string',
          },
          {
            name: 'startYear',
            type: 'uint256',
          },
          {
            name: 'finishYear',
            type: 'uint256',
          },
        ],
        name: 'editEducation',
        outputs: [],
        payable: true,
        stateMutability: 'payable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'getSender',
        outputs: [
          {
            name: '',
            type: 'address',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_owner',
            type: 'address',
          },
          {
            name: 'company',
            type: 'string',
          },
          {
            name: 'role',
            type: 'string',
          },
          {
            name: 'startDate',
            type: 'string',
          },
          {
            name: 'endDate',
            type: 'string',
          },
          {
            name: 'summary',
            type: 'string',
          },
          {
            name: 'highlights',
            type: 'string',
          },
        ],
        name: 'editExperience',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [],
        name: 'cvContract',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_owner',
            type: 'address',
          },
          {
            name: 'name',
            type: 'string',
          },
          {
            name: 'birthDay',
            type: 'string',
          },
          {
            name: 'professionalTitle',
            type: 'string',
          },
          {
            name: 'email',
            type: 'string',
          },
          {
            name: 'github',
            type: 'string',
          },
          {
            name: 'linked',
            type: 'string',
          },
        ],
        name: 'editProfile',
        outputs: [],
        payable: true,
        stateMutability: 'payable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_owner',
            type: 'address',
          },
          {
            name: 'title',
            type: 'string',
          },
          {
            name: 'level',
            type: 'uint256',
          },
        ],
        name: 'editSkill',
        outputs: [],
        payable: true,
        stateMutability: 'payable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: 'index',
            type: 'uint256',
          },
        ],
        name: 'getExperience',
        outputs: [
          {
            name: 'Company',
            type: 'string',
          },
          {
            name: 'Role',
            type: 'string',
          },
          {
            name: 'StartDate',
            type: 'string',
          },
          {
            name: 'EndDate',
            type: 'string',
          },
          {
            name: 'Summary',
            type: 'string',
          },
          {
            name: 'Highlights',
            type: 'string',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'deposit',
        outputs: [],
        payable: true,
        stateMutability: 'payable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: 'index',
            type: 'uint256',
          },
        ],
        name: 'getSkill',
        outputs: [
          {
            name: 'Title',
            type: 'string',
          },
          {
            name: 'Level',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: '',
            type: 'uint256',
          },
        ],
        name: 'profiles',
        outputs: [
          {
            name: '_name',
            type: 'string',
          },
          {
            name: '_birthDay',
            type: 'string',
          },
          {
            name: '_professionalTitle',
            type: 'string',
          },
          {
            name: '_email',
            type: 'string',
          },
          {
            name: '_github',
            type: 'string',
          },
          {
            name: '_linked',
            type: 'string',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: '',
            type: 'uint256',
          },
        ],
        name: 'experiences',
        outputs: [
          {
            name: '_company',
            type: 'string',
          },
          {
            name: '_role',
            type: 'string',
          },
          {
            name: '_startDate',
            type: 'string',
          },
          {
            name: '_endDate',
            type: 'string',
          },
          {
            name: '_summary',
            type: 'string',
          },
          {
            name: '_highlights',
            type: 'string',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: '',
            type: 'uint256',
          },
        ],
        name: 'educations',
        outputs: [
          {
            name: '_institution',
            type: 'string',
          },
          {
            name: '_focusArea',
            type: 'string',
          },
          {
            name: '_startYear',
            type: 'uint256',
          },
          {
            name: '_finishYear',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: 'index',
            type: 'uint256',
          },
        ],
        name: 'getProfile',
        outputs: [
          {
            name: 'Name',
            type: 'string',
          },
          {
            name: 'Birthday',
            type: 'string',
          },
          {
            name: 'ProfessionalTitle',
            type: 'string',
          },
          {
            name: 'Email',
            type: 'string',
          },
          {
            name: 'Github',
            type: 'string',
          },
          {
            name: 'Linked',
            type: 'string',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: 'index',
            type: 'uint256',
          },
        ],
        name: 'getEducation',
        outputs: [
          {
            name: 'Institution',
            type: 'string',
          },
          {
            name: 'FocusArea',
            type: 'string',
          },
          {
            name: 'StartYear',
            type: 'uint256',
          },
          {
            name: 'FinishYear',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
        ],
        '0x09b2D631e237A95cF8F766458422eEfcF98b087c'
    );

    myContract.methods
    .getBalance()
    .call()
    .then((result) => console.log(result.toString()));

    myContract.methods
                .getProfile(0)
                .call()
                .then(function(res) {
                    console.log(res);
                    $("#text-name").html(res[0].toString());
                    // $("#birthday").html("Birthday: " + res[1].toString());
                    $("#text-proTitle").html("Professional Title: " + res[2].toString());
                    $("#text-mail").html(res[3].toString());
                    $("#text-github").html(res[4].toString());
                    // $("#linked").html("Linked: " + res[5].toString());
                });
    
    return ( 
        <>
          <Header/>
            <div className="w-full min-h-screen bg-primary pb-[120px]">
                <div className="flex justify-around items-center mb-3">
                    <h1 className="font-bold text-2xl text-white ">My CV</h1>
                    <button className="h-[45px] w-[140px] bg-secondary rounded-[30px] text-white text-xl">Save</button>
                </div>
                <div className="w-[60%] h-[200vh] mx-auto bg-white flex flex-row">
                    <div className="w-[30%]">
                        <img src={avt} className="h-[160px] w-[160px] mx-auto mt-12 rounded-[50%]"/>
                        <div className="ml-6 mt-8 flex items-center">
                            <IoMdMail size="2rem" className="text-secondary" />
                            <p id="text-mail" className="ml-2"></p>
                        </div>
                        <div className="ml-6 mt-6 flex items-center">
                            <BsFillTelephoneFill size="2rem" className="text-secondary" />
                            <p id="text-phone" className="ml-2">+84847232292</p>
                        </div>
                        <div className="ml-6 mt-6 flex items-center">
                            <BsFillHouseDoorFill size="2rem" className="text-secondary" />
                            <p className="ml-2">HCM City, VN</p>
                        </div>
                        <div className="ml-6 mt-6 flex items-center">
                            <BsFacebook size="2rem" className="text-secondary" />
                            <p className="ml-2 w-full">anhkhoa.luutran.3</p>
                        </div>
                        <div className="ml-6 mt-6 flex items-center">
                            <BsGithub size="2rem" className="text-secondary" />
                            <p id="text-github" className="ml-2"></p>
                        </div>
                        <div className="mt-[4rem] ml-6">
                            <h1 className="font-bold text-3xl">SKILLS</h1>
                           <hr className="w-[90%] h-[2px] mt-4 border-0 bg-primary"/>
                            <div className="mt-4 w-[85%]">
                                <Progressbar title={skills[0].title} per={skills[0].per} />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="h-[10rem] mt-12 bg-secondary">
                            <div className="ml-6 pt-6 text-white">
                                <h1 id="text-name" className="text-4xl font-bold"></h1>
                                <span id="text-proTitle" className="text-[1.3rem] mt-4"></span>
                                <hr className="w-[40%] h-[2px] mt-4 border-0 bg-white"/>
                            </div>
                        </div>
                        <div className="text-primary">
                            <div className="mt-[2rem] ml-4">
                                <h1 className=" text-2xl font-bold ">EDUCATION</h1>
                                <hr className="w-[90%] h-[3px] border-0 bg-primary"/>
                                <div>
                                    <h1 className= "font-bold text-[1.5rem] mt-3 ml-2">University of Information Technology</h1>
                                    <h2 className="ml-6 font-semibold text-xl">Information System</h2>
                                    <div className="ml-8">
                                        <span>08/2019</span> - <span>present</span><br />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-[3rem] ml-4 ">
                                <h1 className="text-2xl font-bold text-primary ">WORK EXPERIENCE</h1>
                                <hr className="w-[90%] h-[3px] border-0 bg-primary"/>
                            </div>
                            <div className="mt-[3rem] ml-4 ">
                                <h1 className="text-2xl font-bold text-primary ">CERTIFICATES</h1>
                                <hr className="w-[90%] h-[3px] border-0 bg-primary"/>
                            </div>
                            <div className="mt-[3rem] ml-4 ">
                                <h1 className="text-2xl font-bold text-primary ">PERSONAL PROJECTS</h1>
                                <hr className="w-[90%] h-[3px] border-0 bg-primary"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>          
        </>
    );
}

export default Mycv;