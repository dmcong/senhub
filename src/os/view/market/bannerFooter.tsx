import { Card, Col, Row } from 'antd'
import { CSSProperties } from 'react'

const contentStyle: CSSProperties = {
  height: '33vw',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

const BANNER_LIST = [
  {
    url: 'https://coin68.com/wp-content/uploads/2021/10/Sentre-Liquidity-Flow.jpg',
  },
  {
    url: 'https://source.unsplash.com/user/erondu/1600x900',
  },
]
//
export default function BannerFooter() {
  return (
    <Row gutter={[24, 16]}>
      {BANNER_LIST.map((banner, index) => {
        return (
          <Col xl={12} lg={12} md={12} sm={24} xs={24}>
            <Card
              key={index}
              className="shadowed"
              style={{ ...contentStyle, backgroundImage: `url(${banner.url})` }}
              bordered={false}
            ></Card>
          </Col>
        )
      })}
    </Row>
  )
}
