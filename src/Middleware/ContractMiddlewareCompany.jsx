import React, { useEffect, useContext, useState } from 'react'
import { Outlet, Navigate, useNavigate } from 'react-router-dom'
import { Web3Context } from '../Context/Web3ContextProvider'
import * as contractConst from '@constant/contractConst'
import Web3 from 'web3'
import { Context } from '../Context/Context'
import detectEthereumProvider from '@metamask/detect-provider'
import Loading from '@component/Loading/Loading'

export default function ContractMiddlewareCompany(props) {
  return <></>
}
