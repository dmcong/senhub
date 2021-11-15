import { Col, Image, Row } from 'antd'

const ScreenShot = ({ appId }: { appId: string }) => {
  return (
    <Row gutter={[24, 24]} justify="center">
      <Col span={24}>
        <Row gutter={[24, 24]}>
          {[1, 2].map((e, idx) => (
            <Col span={12} key={idx} className="screenshot">
              <Image
                // preview={false}
                src="https://source.unsplash.com/random/?liquid,abstract"
              />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}

export default ScreenShot
