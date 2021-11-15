import { useState } from 'react'

import { Button, Space, Grid } from 'antd'
import Paragraph from 'antd/lib/typography/Paragraph'
import IonIcon from 'shared/ionicon'

const AppDescription = ({ description }: { description?: string }) => {
  const [isExpand, setIsExpand] = useState(false)
  const { md } = Grid.useBreakpoint() || {}

  if (!description) return null

  return (
    <Space direction="vertical" size={12} align="center">
      <Paragraph
        ellipsis={
          !isExpand
            ? { rows: 2, expandable: true, symbol: `${!md ? ' ' : 'More'}` }
            : false
        }
      >
        {description}
      </Paragraph>
      {!md && (
        <Button
          type="text"
          icon={
            <IonIcon
              name={isExpand ? 'chevron-up-outline' : 'chevron-down-outline'}
            />
          }
          onClick={() => setIsExpand(!isExpand)}
        />
      )}
    </Space>
  )
}

export default AppDescription
