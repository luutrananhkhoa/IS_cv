export const contract =[
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
			},
			{
				"name": "gpa",
				"type": "uint256"
			}
		],
		"name": "addEducation",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "sOwner",
				"type": "address"
			}
		],
		"name": "addProfile",
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
				"name": "title",
				"type": "string"
			},
			{
				"name": "level",
				"type": "uint256"
			}
		],
		"name": "addSkill",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
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
			},
			{
				"name": "gpa",
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
				"name": "linkedin",
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
		"constant": false,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			},
			{
				"name": "_b_owner",
				"type": "address"
			}
		],
		"name": "sendCV",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "checkProfile",
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
		"name": "educations",
		"outputs": [
			{
				"name": "_owner",
				"type": "address"
			},
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
			},
			{
				"name": "_gpa",
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
		"name": "experiences",
		"outputs": [
			{
				"name": "_owner",
				"type": "address"
			},
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
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "getEducation",
		"outputs": [
			{
				"name": "",
				"type": "string[]"
			},
			{
				"name": "",
				"type": "string[]"
			},
			{
				"name": "",
				"type": "uint256[]"
			},
			{
				"name": "",
				"type": "uint256[]"
			},
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getList",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
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
				"name": "_b_owner",
				"type": "address"
			}
		],
		"name": "getListCV",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			},
			{
				"name": "",
				"type": "address[]"
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
				"name": "_owner",
				"type": "address"
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
		"constant": true,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "getSkill",
		"outputs": [
			{
				"name": "",
				"type": "string[]"
			},
			{
				"name": "",
				"type": "uint256[]"
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
				"name": "_owner",
				"type": "address"
			},
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
				"name": "_linkedin",
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
		"name": "skills",
		"outputs": [
			{
				"name": "_owner",
				"type": "address"
			},
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
	}
]