import { useState } from 'react'
import { ethers } from 'ethers'
import AchievementBadgeABI from '../lib/AchievementBadge.json'
import Button from '../components/Button'
import Header from '../components/Header'

export default function Home() {
    const [account, setAccount] = useState(null)
    const [minting, setMinting] = useState(false)
    const [message, setMessage] = useState('')

    const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS

    async function connectWallet() {
      if (!window.ethereum) {
        alert('Please install MetaMask!')
        return
      }
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        })
        setAccount(accounts[0])
        setMessage('')
      } catch (error) {
        setMessage('Wallet connection failed')
        console.error(error)
      }
    }

      async function mintBadge() {
        if (!account) {
          alert('Connect your wallet first')
          return
        }
        try {
          setMinting(true)
          setMessage('Minting badge...')

          const provider = new ethers.BrowserProvider(window.ethereum)
          const signer = await provider.getSigner()
          const contract = new ethers.Contract(
            contractAddress,
            AchievementBadgeABI.abi,
            signer
          )

          const tx = await contract.mintBadge(account)
          await tx.wait()

          setMessage('Badge minted successfully!')
        } catch (error) {
          console.error(error)
          setMessage('Minting failed: ' + (error?.message || error))
        } finally {
          setMinting(false)
        }
      }
}