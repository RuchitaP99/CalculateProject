export const showData=(item)=>{

    return{

        type:"SHOW_DATA",

        payload: {

            // id:new Date().getTime().toString(),

            id: Math.floor(Math.random() *10) +1,

            item:item

        }

    }

}