import { Space, Typography } from 'antd'

const SubText = ({ label, title }: { label: string; title?: string }) => {
  return (
    <Space>
      <Typography.Text type="secondary">{label}:</Typography.Text>
      <Typography.Text>{title}</Typography.Text>
    </Space>
  )
}

const AppAuth = ({
  author,
}: {
  author?: { name?: string; email?: string }
}) => {
  const { name, email } = author || {}

  return (
    <Space direction="vertical" size={4}>
      <SubText label="Version" title="1.0.0" />
      <SubText label="Author" title={name} />
      <SubText label="Support" title={email} />
    </Space>
  )
}

export default AppAuth
