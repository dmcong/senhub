import { Button, Card, Col, Row, Skeleton, Typography } from 'antd'
import AppIcon from 'os/components/appIcon'
import { RemoteStatic } from 'os/components/appLoader'
import { RootState } from 'os/store'
import { installApp } from 'os/store/page.reducer'
import { CSSProperties, Suspense } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

export default function AppCard(props: { appId: string , style?:CSSProperties}) {
  const history = useHistory()
  const { appId,style } = props
  const { register, appIds } = useSelector((state: RootState) => state.page)
  const dispatch = useDispatch()
  const appData = register[appId]
  const to = (appId: string) => history.push(`/store/${appId}`)
  const manifest = { url: appData?.url || '', scope: appId, module: './static' }

  if (!appData) return null

  const onInstall = (e: any) => {
    e.stopPropagation()
    dispatch(installApp(appId))
  }

  return (
    <Suspense
      fallback={
        <Row
          style={{
            height: 250,
          }}
        >
          <Skeleton active />
        </Row>
      }
    >
      <RemoteStatic
        type="panel"
        manifest={manifest}
        render={(src) => (
          <Card
            style={{
              ...style,
              backgroundImage: `url(${src})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              cursor: 'pointer',
              overflow: 'hidden',
              boxShadow: 'none',
            }}
            bodyStyle={{ padding: 0, height: '100%' }}
            key={appId}
            onClick={() => to(appId)}
          >
            <Row align="bottom" style={{ height: '100%' }}>
              <Col
                span={24}
                style={{
                  opacity: 0.9,
                  backdropFilter: 'blur(96px)',
                  background: '#F4F4F5',
                  padding: '12px 16px',
                }}
              >
                <Row align="middle" gutter={[8, 8]}>
                  <Col>
                    <AppIcon size={40} appId={appId} name={false} />
                  </Col>
                  <Col flex="auto">
                    <Typography.Title level={5}>
                      {appData.name}
                    </Typography.Title>
                    <Typography.Text>{appData.author.name}</Typography.Text>
                  </Col>
                  <Col>
                    {appIds.includes(appId) ? (
                      <Button>Open</Button>
                    ) : (
                      <Button type="primary" onClick={onInstall}>
                        Install
                      </Button>
                    )}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        )}
      />
    </Suspense>
  )
}
