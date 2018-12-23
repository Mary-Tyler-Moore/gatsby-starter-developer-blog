/* Vendor imports */
import React from 'react'
import { graphql } from 'gatsby'
/* App imports */
import Layout from '../../components/layout/layout'
import SEO from '../../components/seo/seo'
import PostList from '../../components/post-list/post-list'
import * as style from './tag.module.less'

const TagPage = ({ pageContext, data }) => {
  const posts = data.allMarkdownRemark.edges
  const tagName = pageContext.tag
  return (
    <Layout>
      <SEO title={tagName} keywords={[tagName]} />
      <div className={style.header}>
        <h1>{tagName}</h1>
        <label>{posts.length} Posts</label>
      </div>
      <PostList posts={posts}/>
    </Layout>
  )
}

export default TagPage

export const pageQuery = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            cover {
              childImageSharp {
                fixed (height: 125 width: 222 cropFocus: CENTER) {
                  ...GatsbyImageSharpFixed_tracedSVG
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`