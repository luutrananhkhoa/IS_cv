export const abiStudentBusiness = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_studentOwner',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_birthDay',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_professionalTitle',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_email',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_github',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_linkedin',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_password',
        type: 'string',
      },
    ],
    name: 'addStudentProfile',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_studentOwner',
        type: 'address',
      },
    ],
    name: 'getStudentProfile',
    outputs: [
      {
        internalType: 'address',
        name: 'studentOwner',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'birthDay',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'professionalTitle',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'email',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'github',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'linkedin',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'password',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_studentOwner',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_password',
        type: 'string',
      },
    ],
    name: 'checkStudentProfile',
    outputs: [
      {
        internalType: 'uint256',
        name: 'x',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_studentOwner',
        type: 'address',
      },
    ],
    name: 'checkExistStudent',
    outputs: [
      {
        internalType: 'uint256',
        name: 'x',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_studentOwner',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_title',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: '_level',
        type: 'uint256',
      },
    ],
    name: 'addStudentSkill',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_studentOwner',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_title',
        type: 'string',
      },
    ],
    name: 'checkStudentSkill',
    outputs: [
      {
        internalType: 'uint256',
        name: 'x',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_studentOwner',
        type: 'address',
      },
    ],
    name: 'checkNumStudentSkill',
    outputs: [
      {
        internalType: 'uint256',
        name: 'x',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_studentOwner',
        type: 'address',
      },
    ],
    name: 'getStudentSkill',
    outputs: [
      {
        internalType: 'string[]',
        name: 'titles',
        type: 'string[]',
      },
      {
        internalType: 'uint256[]',
        name: 'levels',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getListBusiness',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
      {
        internalType: 'string[]',
        name: '',
        type: 'string[]',
      },
      {
        internalType: 'string[]',
        name: '',
        type: 'string[]',
      },
      {
        internalType: 'string[]',
        name: '',
        type: 'string[]',
      },
      {
        internalType: 'string[]',
        name: '',
        type: 'string[]',
      },
      {
        internalType: 'string[]',
        name: '',
        type: 'string[]',
      },
      {
        internalType: 'string[]',
        name: '',
        type: 'string[]',
      },
      {
        internalType: 'string[]',
        name: '',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_businessOwner',
        type: 'address',
      },
    ],
    name: 'getRecruit',
    outputs: [
      {
        internalType: 'string[]',
        name: '',
        type: 'string[]',
      },
      {
        internalType: 'string[]',
        name: '',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_studentOwner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_businessOwner',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_jobTitle',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_coverLetter',
        type: 'string',
      },
    ],
    name: 'sendCV',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_studentOwner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_businessOwner',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_jobTitle',
        type: 'string',
      },
    ],
    name: 'checkCV',
    outputs: [
      {
        internalType: 'uint256',
        name: 'x',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_studentOwner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_businessOwner',
        type: 'address',
      },
    ],
    name: 'getReview',
    outputs: [
      {
        internalType: 'address',
        name: 'studentOwner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'businessOwner',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'content',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_businessOwner',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_country',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_facebook',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_website',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_linkedin',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_focusArea',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_password',
        type: 'string',
      },
    ],
    name: 'addBusinessProfile',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_businessOwner',
        type: 'address',
      },
    ],
    name: 'getBusinessProfile',
    outputs: [
      {
        internalType: 'address',
        name: 'businessOwner',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'country',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'facebook',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'website',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'linkedin',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'focusArea',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_businessOwner',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_password',
        type: 'string',
      },
    ],
    name: 'checkBusinessProfile',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_businessOwner',
        type: 'address',
      },
    ],
    name: 'checkExistBusiness',
    outputs: [
      {
        internalType: 'uint256',
        name: 'x',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_businessOwner',
        type: 'address',
      },
    ],
    name: 'getListCV',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
      {
        internalType: 'string[]',
        name: '',
        type: 'string[]',
      },
      {
        internalType: 'string[]',
        name: '',
        type: 'string[]',
      },
      {
        internalType: 'string[]',
        name: '',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_studentOwner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_businessOwner',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_jobTitle',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_statusCV',
        type: 'string',
      },
    ],
    name: 'interviewCV',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_studentOwner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_businessOwner',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_jobTitle',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_statusCV',
        type: 'string',
      },
    ],
    name: 'onboardCV',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_businessOwner',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_jobTitle',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_jobDescription',
        type: 'string',
      },
    ],
    name: 'addRecruit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_studentOwner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_businessOwner',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_content',
        type: 'string',
      },
    ],
    name: 'sendReview',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]
export const addressStudentBusiness = '0x95297f487340944ff2c8fbae5d0f91686536ff0d'
