import { Col, Image, Row, Grid } from 'antd'
import { SwiperSlide } from 'swiper/react'

import { SwiperOs } from 'os/components/swiperOs'

const ScreenShot = ({ appId }: { appId: string }) => {
  const { sm } = Grid.useBreakpoint()
  const slidesPerView = !sm ? 1 : 2

  return (
    <Row gutter={[24, 24]} justify="center" className="app-detail-carousel">
      <Col span={24}>
        <SwiperOs slidesPerView={slidesPerView} loop>
          {[1, 2, 3, 4].map((e, idx) => (
            <SwiperSlide>
              <Image
                style={{
                  maxHeight: 252,
                  height: '57vw',
                }}
                src="https://source.unsplash.com/random"
              />
            </SwiperSlide>
          ))}
        </SwiperOs>
      </Col>
    </Row>
  )
}

export default ScreenShot
