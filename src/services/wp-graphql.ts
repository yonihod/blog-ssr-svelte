import { wpGraphqlAPI as wpAPI } from "./axiosService";

export const queryGraphqlAPI = (query: string) : Promise<any> => {
    return wpAPI.get(query);
}

export const getPostById = async (id: string) : Promise<any> => {
    
    const query = 
    `query getPostById {
        postBy(id: "cG9zdDo3NA==") {
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
            return {
                ...res.data.postBy,
                tags: res.data.postBy.tags.edges.map((tag)=> {
                    return {...tag.node}
                }),
                featuredImage: res.data.postBy.featuredImage.node.link
            }
        });
      }catch(e){
          console.log(e)
      }

}