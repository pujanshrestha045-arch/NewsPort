import React from 'react'
import TrendingPanel from './TrendingPanel'
import Card from '../ui/Card'
import NewsSubscription from './NewsSubscription'

function Sidebar() {
  return (
    <>
      <aside className='space-y-6'>        
        {/* NewsLetter */}
        <Card className='p-6'>
            <h3 className='font-bold text-lg mb-4'>Stay Updated</h3>
            <NewsSubscription />
        </Card>

        {/* Trending */}
        <TrendingPanel />
      </aside>
    </>
  )
}

export default Sidebar
