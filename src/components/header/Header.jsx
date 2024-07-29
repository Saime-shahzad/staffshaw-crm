import React from 'react'
import icons from '../../assets/icons'
import colors from '../../assets/colors/color'


export const Header = () => {
    const headerItems=[
        {
            id:"1",
            title:`CRM`,
            // title:`logo${<CodepenOutlined />}`
    },
        {
            id:"2",
            title:"Work Space",

    },
        {
            id:"3",
            title:"Recent",

    },
        {
            id:"4",
            title:"Starred",

    },
        {
            id:"5",
            title:"More",

    },
        {
            id:"6",
            title:"",

    },
]
  return (
    <div className='parrent-header ' >
    <div className='d-flex  p-3' style={{backgroundColor: colors.theme} } >

        {headerItems?.map((item , index)=>{
return(
    <div className='header-ItemsParrent px-2 d-flex'>
         {item.title === "CRM" ? 
          <div className='text-white   fs-5 rounded-2' key={index}>
       
              {icons.codePenIcon} {item.title}
          </div>

          :
          <div className='text-white p-1  rounded-2' key={index}>
       {item.title}  {!item.title ? icons.plusIcon : icons.downIcon }
          </div>  }
   
    </div>
)
        })}
        </div>
    </div>
  )
}
