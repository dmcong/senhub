import { Card, Carousel } from 'antd'
import { CSSProperties } from 'react'

const contentStyle: CSSProperties = {
  height: '400px',
  maxHeight: '50vh',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

const BANNER_LIST = [
  {
    url: 'https://coin68.com/wp-content/uploads/2021/10/Sentre-Liquidity-Flow.jpg',
  },
  {
    url: 'https://coin68.com/wp-content/uploads/2021/07/solana-11.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1512460252311-ef21bd8dfa45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3870&q=80',
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
