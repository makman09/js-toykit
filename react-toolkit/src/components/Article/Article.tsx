import React, { FC, useEffect, useState } from 'react';
import Markdown from 'react-markdown'
import styles from './Article.module.scss';
import helloMd from './hello.md'

interface ArticleProps {
  title?: string;
  content?: string;
  author?: string;
  date?: string;
}

const Article: FC<ArticleProps> = ({ title="", content="", author="", date="" }) => {
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    fetch(helloMd)
      .then((response) => response.text())
      .then((text) => {
        console.log(text)
        setMarkdown(text)
      })
  })
  
  return (<div className={styles.Article} data-testid="Article">
    <div className="max-w-prose mx-auto">
      <h1>Title: {title}</h1>
      <Markdown>{markdown}</Markdown>
    </div>
  </div>)
};
export default Article;
