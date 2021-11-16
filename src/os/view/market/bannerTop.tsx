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
    url: 'https://source.unsplash.com/1600x900/?crypto',
  },
  {
    url: 'https://source.unsplash.com/1600x901/?crypto',
  },
]
//
export default function BannerTop() {
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
