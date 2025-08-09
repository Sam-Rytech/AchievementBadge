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
}