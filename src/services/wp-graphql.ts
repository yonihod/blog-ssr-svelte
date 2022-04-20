import { wpGraphqlAPI as wpAPI } from "./axiosService";

export const queryGraphqlAPI = (query: string) : Promise<any> => {
    return wpAPI.get(query);
}

export const getPostById = async (id: string) : Promise<any> => {
    
    const query = 
    `query getPostById {
        postBy(id: "${id}") {
          content(format: RENDERED)
          date
          title(format: RENDERED)
          tags {
            edges {
              node {
                id
                name
              }
            }
          }
          excerpt(format: RENDERED)
          featuredImage {
            node {
              link
            }
          }
        }
      }`
      try {
        return wpAPI.post('',{query}).then( (res) => {
          console.log(res);
          
          if(res?.data?.postBy) {
            return {
                ...res.data.postBy,
                tags: res.data.postBy.tags.edges.map((tag)=> {
                    return {...tag.node}
                }),
                featuredImage: res.data.postBy.featuredImage.node.link
            }
          }
          return null;
        });
      }catch(e){
          console.log(e)
      }

}


export const getPosts = async () : Promise<any> => {
  const query=
  `query getPosts {
    posts {
      edges {
        node {
          content(format: RENDERED)
          date
          featuredImage {
            node {
              link
              sourceUrl
            }
          }
          title(format: RENDERED)
          id
          tags {
            nodes {
              name
            }
          }
        }
      }
    }
  }`

  try {
    const res = await wpAPI.post('',{query});

    return res.data.posts.edges.map((post)=> {
        return {
          ...post.node,
          featuredImage: post.node.featuredImage.node.sourceUrl,
          tags: post.node.tags.nodes
        }
    })

  }catch(e){
      console.log(e)
  }
  
}