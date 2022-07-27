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
    ],
    name: 'editStudentProfile',
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
      {
        internalType: 'uint256',
        name: '_level',
        type: 'uint256',
      },
    ],
    name: 'editStudentSkill',
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
    ],
    name: 'editBusinessProfile',
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
  {
    inputs: [
      {
        internalType: 'address',
        name: '_iigOwner',
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
        name: '_password',
        type: 'string',
      },
    ],
    name: 'addIIGProfile',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_iigOwner',
        type: 'address',
      },
    ],
    name: 'getIIGProfile',
    outputs: [
      {
        internalType: 'address',
        name: 'iigOwner',
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
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_iigOwner',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_password',
        type: 'string',
      },
    ],
    name: 'checkIIGProfile',
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
        name: '_iigOwner',
        type: 'address',
      },
    ],
    name: 'checkExistIIG',
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
        name: '_iigOwner',
        type: 'address',
      },
    ],
    name: 'sendIIGRequest',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_iigOwner',
        type: 'address',
      },
    ],
    name: 'getListIIGRequest',
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
        name: '_iigOwner',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_statusRequest',
        type: 'string',
      },
    ],
    name: 'confirmIIGRequest',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_iigOwner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_studentOwner',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_testDate',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_shiftTest',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_expireDate',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: '_listeningScore',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_readingScore',
        type: 'uint256',
      },
    ],
    name: 'addIIGLRResult',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_iigOwner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_studentOwner',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_testDate',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_shiftTest',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_expireDate',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: '_speakingScore',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_writingScore',
        type: 'uint256',
      },
    ],
    name: 'addIIGSWResult',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_iigOwner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_studentOwner',
        type: 'address',
      },
    ],
    name: 'getIIGLRResult',
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
      {
        internalType: 'string[]',
        name: '',
        type: 'string[]',
      },
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_iigOwner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_studentOwner',
        type: 'address',
      },
    ],
    name: 'getIIGSWResult',
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
      {
        internalType: 'string[]',
        name: '',
        type: 'string[]',
      },
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
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
        name: '_testDate',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_shiftTest',
        type: 'string',
      },
    ],
    name: 'checkExistIIGLRResult',
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
        name: '_testDate',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_shiftTest',
        type: 'string',
      },
    ],
    name: 'checkExistIIGSWResult',
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
]
export const addressStudentBusiness = '0x136b4b62d836745e7454b1c7e8fb0df6a069f12b'
