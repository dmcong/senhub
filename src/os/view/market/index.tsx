import { Row, Col } from 'antd'
import BannerStore from './bannerStore'
import AppCategory from './appCategory'
import { useState } from 'react'
import AllApp from './allApp'

const Market = () => {
  const [infoViewAll, setInfoViewAll] = useState<{
    isOpen: boolean
    appIds: AppIds
    title: string
  }>({
    isOpen: false,
    appIds: [],
    title: '',
  })

  const onGotoViewAll = (appIds: AppIds, title: string) => {
    setInfoViewAll({ isOpen: true, appIds, title })
  }
  const onBackViewAll = () => {
    setInfoViewAll({ isOpen: false, appIds: [], title: '' })
  }

  if (infoViewAll.isOpen)
    return <AllApp {...infoViewAll} onBack={onBackViewAll} />

  return (
    <Row gutter={[16, 48]}>
      <Col span={24}>
        <BannerStore />
      </Col>
      <Col span={24}>
        <AppCategory
          onSeeAll={onGotoViewAll}
          title="Suggested for you"
          subTitle="Ads"
          category="suggest"
        />
      </Col>
      <Col span={24}>
        <AppCategory
          onSeeAll={onGotoViewAll}
          title="Top dapps"
          category="top-dapps"
        />
      </Col>
      <Col span={24}>
        <AppCategory onSeeAll={onGotoViewAll} title="Other" category="other" />
      </Col>
    </Row>
  )
}

export default Market
