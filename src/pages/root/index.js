import React from 'react'

const Content = ({ title, children }) => {
  return (
    <div className='column is-4'>
      <div className='card'>
        <header className='card-header'>
          <h3 className='card-header-title'>{title}</h3>
        </header>
        <div className='card-content'>
          <div className='content'>{children}</div>
        </div>
      </div>
    </div>
  )
}

const RootPage = () => {
  return (
    <>
      <section className='hero'>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title has-text-centered'>情報可視化で視る社会</h1>
            <h2 className='subtitle has-text-centered'>
              <p>日本大学文理学部情報科学科 尾上研究室</p>
              <p>2019夏季オープンキャンパス</p>
            </h2>
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='columns is-multiline'>
          <Content title='国家財政の可視化'>
            <h4>政府の事業が検索できるサイト JUDGIT(ジャジット)!</h4>
          </Content>
        </div>
      </section>
    </>
  )
}

export default RootPage
