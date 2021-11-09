import { Button, Col, Row, Skeleton, Spin, Typography } from 'antd'
import AppIcon from 'os/components/appIcon'
import { RemoteStatic } from 'os/components/appLoader'
import { RootState } from 'os/store'
import { installApp } from 'os/store/page.reducer'
import { Suspense } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import IonIcon from 'shared/ionicon'

export default function AppCard(props: { appId: string }) {
  const history = useHistory()
  const { appId } = props
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
          <Row
            align="bottom"
            style={{
              backgroundImage: `url(${src})`,
              height: 250,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              borderRadius: 8,
            }}
            key={appId}
            onClick={() => to(appId)}
          >
            <Col
              span={24}
              style={{
                backdropFilter: 'blur(50px)',
                background: 'rgba(0, 0, 0, 0.3)',
                padding: 8,
                borderRadius: 8,
              }}
            >
              <Row align="middle" gutter={[8, 8]}>
                <Col>
                  <AppIcon size={40} appId={appId} name={false} />
                </Col>
                <Col flex="auto">
                  <Typography.Title style={{ color: '#FFFFFF' }} level={5}>
                    {appData.name}
                  </Typography.Title>
                  <Typography.Text style={{ color: '#FFFFFF' }}>
                    {appData.author.name}
                  </Typography.Text>
                </Col>
                <Col>
                  {appIds.includes(appId) ? (
                    <Button
                      type="primary"
                      icon={
                        <IonIcon
                          style={{ color: '#16FB48' }}
                          name="checkmark-outline"
                        />
                      }
                      style={{
                        background: 'rgba(0, 0, 0, 0.3)',
                        backdropFilter: 'blur(50px)',
                        border: 'unset',
                      }}
                    >
                      Installed
                    </Button>
                  ) : (
                    <Button
                      type="primary"
                      icon={<IonIcon name="cloud-download-outline" />}
                      onClick={onInstall}
                      style={{
                        background: 'rgba(0, 0, 0, 0.3)',
                        backdropFilter: 'blur(50px)',
                        border: 'unset',
                      }}
                    >
                      Install
                    </Button>
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
        )}
      />
    </Suspense>
  )
}
