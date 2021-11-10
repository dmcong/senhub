import { useSelector } from 'react-redux'
import { RootState } from 'os/store'

import { Button, Col, Row, Space, Typography } from 'antd'
import IonIcon from 'shared/ionicon'
import AppCard from './appCard'
import { useMemo } from 'react'

type Props = {
  subTitle?: string
  title: string
  category: string
  onSeeAll: (appIds: AppIds, title: string) => void
}

const AppCategory = (props: Props) => {
  const { title, subTitle, category, onSeeAll } = props
  const { register } = useSelector((state: RootState) => state.page)
  const sliceId = Math.random() + ''

  //Filter app with category
  const appFilter = useMemo(() => {
    //TODO filter here:
    let appIds: AppIds = []
    console.log('category', category)
    for (let i = 0; i < 20; i++) {
      appIds = appIds.concat(Object.keys(register))
    }
    return appIds
  }, [category, register])

  const onScroll = (type: 'left' | 'right') => {
    const elmSlice = document.getElementById(sliceId)
    if (!elmSlice) return
    const width = window.innerWidth
    switch (type) {
      case 'left':
        return elmSlice.scrollBy({ behavior: 'smooth', left: -width })
      case 'right':
        return elmSlice.scrollBy({ behavior: 'smooth', left: width })
    }
  }
  return (
    <Row gutter={[12, 12]} align="bottom">
      <Col flex="auto">
        <Space align="end">
          {/* title */}
          <Typography.Text type="secondary">{subTitle}</Typography.Text>
          <Typography.Title level={4}>{title}</Typography.Title>
          {/* see all button*/}
          <Space align="end" size={2}>
            <Button
              style={{ padding: 0, height: 'auto' }}
              type="text"
              onClick={() => onSeeAll(appFilter, title)}
            >
              See all
            </Button>
            <IonIcon name="caret-forward-outline" />
          </Space>
        </Space>
      </Col>
      {/* left and right button */}
      <Col>
        <Space>
          <Button
            type="primary"
            icon={<IonIcon name="chevron-back-outline" />}
            onClick={() => onScroll('left')}
          ></Button>
          <Button
            type="primary"
            icon={<IonIcon name="chevron-forward-outline" />}
            onClick={() => onScroll('right')}
          ></Button>
        </Space>
      </Col>
      {/* list app category */}
      <Col span={24}>
        <Row
          gutter={[16, 16]}
          style={{ overflowX: 'auto', scrollSnapType: 'x mandatory' }}
          wrap={false}
          id={sliceId}
        >
          {appFilter.map((appId) => (
            <Col
              lg={6}
              md={8}
              sm={12}
              xs={24}
              style={{ scrollSnapAlign: 'start' }}
              key={appId}
            >
              <AppCard key={appId} appId={appId} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}
export default AppCategory
