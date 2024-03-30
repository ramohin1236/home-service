/* eslint-disable import/no-anonymous-default-export */
const { gql, default: request}=require("graphql-request") 


const MASTER_URL='https://api-ap-south-1.hygraph.com/v2/'+process.env.NEXT_PUBLIC_MASTER_URL_KEY+'/master'

const getCategory=async()=>{
    const query=gql`
    query Category {
        categori {
          backgorundColor {
            hex
          }
          name
          icon {
            url
          }
          id
        }
      }
      
      
    `


    const result= await request(MASTER_URL,query)
    return result
}

const getAllBussinessList =async()=>{
    const query = gql`
    query BussinessList {
        bussinessLists {
          id
          about
          address
          categori {
            name
          }
          contactPerson
          email
          images {
            url
          }
          name
        }
      }
    `
    const result= await request(MASTER_URL,query)
    return result
}


const getBussinessCategory =async(category)=>{
    const query=gql`
    query MyQuery {
        bussinessLists(where: {categori_some: {name: "` + category + `"}}) {
            about
            address
            categori {
                name
            }
            contactPerson
            email
            id
            name
            images {
                url
            }
        }
    }
`
    const result= await request(MASTER_URL,query)
    return result
}


// get bussinessbyid

const getBussinessByID=async(id)=>{
    const query=gql`
    query GetBussinessById {
        bussinessList(where: {id: "`+id+`"}) {
          about
          address
          categori {
            name
          }
          email
          id
          images {
            url
          }
          contactPerson
          mobile
          name
        }
      }
    `
    const result= await request(MASTER_URL,query)
    return result
}




export default{
    getCategory,
    getAllBussinessList,
    getBussinessCategory,
    getBussinessByID
}

