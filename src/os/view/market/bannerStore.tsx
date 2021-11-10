import { Card, Carousel } from 'antd'
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
  {
    url: 'https://source.unsplash.com/random/1600x900',
  },
]
//
export default function BannerStore() {
  return (
    <Carousel autoplay>
      {BANNER_LIST.map((banner, index) => {
        return (
          <div>
            <Card
              key={index}
              className="shadowed"
              style={{ ...contentStyle, backgroundImage: `url(${banner.url})` }}
              bordered={false}
            ></Card>
          </div>
        )
      })}
    </Carousel>
  )
}
