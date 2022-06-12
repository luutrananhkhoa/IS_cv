export const contractCompany =[
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "b_profiles",
		"outputs": [
			{
				"name": "_b_owner",
				"type": "address"
			},
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_country",
				"type": "string"
			},
			{
				"name": "_facebook",
				"type": "string"
			},
			{
				"name": "_website",
				"type": "string"
			},
			{
				"name": "_linkedin",
				"type": "string"
			},
			{
				"name": "_focusArea",
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
				"name": "_b_owner",
				"type": "address"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "country",
				"type": "string"
			},
			{
				"name": "facebook",
				"type": "string"
			},
			{
				"name": "website",
				"type": "string"
			},
			{
				"name": "linkedin",
				"type": "string"
			},
			{
				"name": "focusArea",
				"type": "string"
			}
		],
		"name": "addBProfile",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "addr",
				"type": "address"
			},
			{
				"name": "_owner",
				"type": "address"
			},
			{
				"name": "_b_owner",
				"type": "address"
			},
			{
				"name": "content",
				"type": "string"
			}
		],
		"name": "sendReview",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
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
				"name": "_b_owner",
				"type": "address"
			}
		],
		"name": "getBProfile",
		"outputs": [
			{
				"name": "Name",
				"type": "string"
			},
			{
				"name": "Country",
				"type": "string"
			},
			{
				"name": "Facebook",
				"type": "string"
			},
			{
				"name": "Website",
				"type": "string"
			},
			{
				"name": "Linkedin",
				"type": "string"
			},
			{
				"name": "FocusArea",
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
				"name": "addr",
				"type": "address"
			},
			{
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "getInfo",
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
				"name": "addr",
				"type": "address"
			},
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
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]