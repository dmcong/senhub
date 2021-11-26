import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { Card, Col, Row } from 'antd'

import { RootState } from 'os/store'

const MAX_WIDTH = 1440
const PAGE_PADDING = 20
const IMAGE_RATIO = 1 / 3
const DESKTOP_IMAGE_PER_VIEW = 2

const BannerBottom = () => {
  const [listBanner, setListBanner] = useState<string[]>([])
  const { width } = useSelector((state: RootState) => state.ui)

  const fetchListBanner = async () => {
    //TODO fetch:
    setListBanner([
      'https://coin68.com/wp-content/uploads/2021/10/Sentre-Liquidity-Flow.jpg',
      'https://source.unsplash.com/1600x902/?crypto',
    ])
  }

  useEffect(() => {
    fetchListBanner()
  }, [])

  const calculateBannerHeight = () => {
    if (width > MAX_WIDTH)
      return (MAX_WIDTH / DESKTOP_IMAGE_PER_VIEW) * IMAGE_RATIO
    if (width > 768 && width < MAX_WIDTH)
      return ((width - PAGE_PADDING) / DESKTOP_IMAGE_PER_VIEW) * IMAGE_RATIO
    return (width - PAGE_PADDING * 2) * IMAGE_RATIO
  }

  return (
    <Row gutter={[24, 16]}>
      {listBanner.map((banner, index) => {
        return (
          <Col md={12} xs={24} key={index}>
            <Card
              key={index}
              style={{
                height: calculateBannerHeight(),
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundImage: `url(${banner})`,
              }}
              bordered={false}
            />
          </Col>
        )
      })}
    </Row>
  )
}

export default BannerBottom
