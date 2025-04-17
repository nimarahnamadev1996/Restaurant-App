import LatestCompany from '@/components/LatestCompany'
import React from 'react'

const CompanyPage = ({searchParams}) => {
  return (
    <div>
        <LatestCompany searchParams={searchParams}/>
    </div>
  )
}

export default CompanyPage