import { useMemo } from 'react'
import { useSelector } from 'react-redux'

import { SwiperSlide } from 'swiper/react'
import { Button, Col, Row, Skeleton, Space, Typography } from 'antd'
import IonIcon from 'shared/ionicon'
import { SwiperOs } from 'os/components/swiperOs'
import AppCard from './appCard'

import { RootState } from 'os/store'

type Props = {
  subTitle?: string
  title: string
  category: string
  onSeeAll: (appIds: AppIds, title: string) => void
}

const AppCategory = (props: Props) => {
  const { title, subTitle, category, onSeeAll } = props
  const { register } = useSelector((state: RootState) => state.page)

  //Filter app with category
  const appFilter = useMemo(() => {
    //TODO filter here:
    let appIds: AppIds = []
    for (let i = 0; i < 20; i++) {
      if (category) appIds = appIds.concat(Object.keys(register))
    }
    return appIds
  }, [category, register])

  if (!appFilter.length) return <Skeleton active />
  return (
    <Row gutter={[20, 20]} align="bottom">
      <Col flex="auto">
        <Row align="bottom">
          <Space align="end">
            {/* title */}
            <Typography.Text type="secondary">{subTitle}</Typography.Text>
            <Typography.Title level={4}>{title}</Typography.Title>
            {/* see all button*/}
          </Space>
        </Row>
      </Col>
      <Col>
        <Typography.Text type="danger">
          <Space align="end" size={2}>
            <Button
              danger
              style={{ padding: 0, height: 'auto', fontWeight: 300 }}
              type="text"
              onClick={() => onSeeAll(appFilter, title)}
            >
              See all
            </Button>
            <IonIcon name="chevron-forward-outline" />
          </Space>
        </Typography.Text>
      </Col>
      {/* list app category */}
      <Col span={24}>
        <SwiperOs>
          {appFilter.map((appId) => (
            <SwiperSlide style={{ maxWidth: 334, width: '75vw' }}>
              <AppCard
                key={appId}
                appId={appId}
                style={{
                  maxHeight: 252,
                  height: '57vw',
                }}
              />
            </SwiperSlide>
          ))}
        </SwiperOs>
      </Col>
    </Row>
  )
}
export default AppCategory
