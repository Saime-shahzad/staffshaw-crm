import {
    PlusSquareOutlined, 
    CodepenOutlined,
    DownOutlined ,
    PlusOutlined,
    LeftOutlined,
    RightOutlined,
    UsergroupAddOutlined,
    UnorderedListOutlined,
    StarOutlined,
    FilterOutlined,
    SearchOutlined,
    BellOutlined,
    CaretRightOutlined ,
    CloseOutlined,
    QuestionCircleOutlined ,
    EditOutlined,
    TagsOutlined,
    PaperClipOutlined
  } from '@ant-design/icons';
import colors from './colors/color';
  const icons={
    plusIcon: <PlusSquareOutlined   />,
    codePenIcon: <CodepenOutlined />,
    downIcon: <DownOutlined style={{fontSize:"11px" , fontWeight:600}} />,
    plusOutlineIcon: <PlusOutlined className='fs-6 p-1 ' style={{backgroundColor:"#C582A2"}} />,
    peopleGroupIcon: <UsergroupAddOutlined />,
    starIcon: <StarOutlined />,
    listIcon: <UnorderedListOutlined />,
    filterIcon: <FilterOutlined />,
    notificationIcon: <BellOutlined style={{color:"white"}} />,
    questionMarkIcon: <QuestionCircleOutlined  style={{color:"white"}} />,
    searchIcon: <SearchOutlined style={{color:"white"}} />,

    sidebarclose: <LeftOutlined />,
    editIcon: <EditOutlined />,
    popupclose: <CloseOutlined />,
    labelIcons: <TagsOutlined />,
    fileUploadIcons:<PaperClipOutlined />,
    templeteIcons: <CaretRightOutlined style={{fontSize:"15px"}}/>,
    sidebarOpen: <RightOutlined style={{backgroundColor:colors.darkTheme , padding:"13px" , borderRadius:"10px"}}  />,
  }
  export default icons