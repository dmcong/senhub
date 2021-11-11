import { Row, Col } from 'antd'
import BannerStore from './bannerStore'
import AppCategory from './appCategory'
import { useCallback, useEffect, useState } from 'react'
import AllApp from './allApp'
import SearchEngine from './searchEngine'
import { setLoading } from 'os/store/search.reducer'
import { useDispatch, useSelector } from 'react-redux'
import { RootDispatch, RootState } from 'os/store'
import BannerFooter from './bannerFooter'

let searching: NodeJS.Timeout

const Market = () => {
  const dispatch = useDispatch<RootDispatch>()
  const { value } = useSelector((state: RootState) => state.search)
  const { register } = useSelector((state: RootState) => state.page)

  const [infoViewAll, setInfoViewAll] = useState<{
    isOpen: boolean
    appIds: AppIds
    title: string
  }>({
    isOpen: false,
    appIds: [],
    title: '',
  })

  const onSearch = useCallback(async () => {
    const engine = new SearchEngine(register)
    await dispatch(setLoading(true))
    if (searching) clearTimeout(searching)
    if (!value) await dispatch(setLoading(false))

    searching = setTimeout(async () => {
      const appIds = engine.search(value)
      await setInfoViewAll({
        isOpen: !!value,
        appIds: appIds,
        title: 'Search Results',
      })
      await dispatch(setLoading(false))
      return window.scrollTo(0, 0)
    }, 1000)
  }, [value, dispatch, register])

  useEffect(() => {
    onSearch()
  }, [onSearch])

  const onGotoViewAll = (appIds: AppIds, title: string) => {
    setInfoViewAll({ isOpen: true, appIds, title })
  }
  const onBackViewAll = () => {
    setInfoViewAll({ isOpen: false, appIds: [], title: '' })
  }

  if (infoViewAll.isOpen)
    return <AllApp {...infoViewAll} onBack={onBackViewAll} />

  return (
    <Row gutter={[16, 48]}>
      <Col span={24}>
        <BannerStore />
      </Col>
      <Col span={24}>
        <AppCategory
          onSeeAll={onGotoViewAll}
          title="Suggested for you"
          category="suggest"
        />
      </Col>
      <Col span={24}>
        <AppCategory
          onSeeAll={onGotoViewAll}
          title="Top dapps"
          category="top-dapps"
        />
      </Col>
      <Col span={24}>
        <AppCategory onSeeAll={onGotoViewAll} title="Other" category="other" />
      </Col>
      <Col span ={24}>
        <BannerFooter/>
      </Col>
    </Row>
  )
}

export default Market
