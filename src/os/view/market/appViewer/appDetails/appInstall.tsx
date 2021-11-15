import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

import { Button, Col, Row } from 'antd'

import { RootDispatch } from 'os/store'
import { installApp, uninstallApp } from 'os/store/page.reducer'
import IonIcon from 'shared/ionicon'

const AppInstall = ({
  installed,
  appId,
}: {
  installed: boolean
  appId: string
}) => {
  const dispatch = useDispatch<RootDispatch>()
  const history = useHistory()

  const to = () => history.push(`/app/${appId}`)

  return (
    <Row gutter={[12, 12]} justify="end">
      {!installed ? (
        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24} flex="auto">
          <Button
            type="primary"
            icon={<IonIcon name="cloud-download-outline" />}
            onClick={() => dispatch(installApp(appId))}
            block
          >
            Install
          </Button>
        </Col>
      ) : (
        <Col span={12}>
          <Button
            icon={<IonIcon name="trash-outline" />}
            onClick={() => dispatch(uninstallApp(appId))}
            block
          >
            Uninstall
          </Button>
        </Col>
      )}
      {installed && (
        <Col span={12}>
          <Button
            type="primary"
            icon={<IonIcon name="open-outline" />}
            onClick={to}
            block
          >
            Open
          </Button>
        </Col>
      )}
    </Row>
  )
}

export default AppInstall
