import { Space, Tag } from 'antd'

const AppTags = () => {
  return (
    <Space size={8} wrap>
      {['Liquidity Pool', 'blockchian', 'trending'].map((e, index) => (
        <Tag
          style={{ margin: 0, borderRadius: 4 }}
          color={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
          key={index}
        >
          {e}
        </Tag>
      ))}
    </Space>
  )
}
export default AppTags
