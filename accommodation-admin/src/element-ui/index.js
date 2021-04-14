import {
    // 布局容器组件
    Container,
    Header,
    Aside,
    Main,
    // 侧边导航栏插件
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    // 标记点
    Badge,
    // 行布局
    Row,
    // 列布局
    Col,
    // 滑块组件
    Scrollbar,
    // 表单组件
    Form,
    FormItem,
    Input,
    InputNumber,
    Select,
    Option,
    OptionGroup,
    Button,
    ButtonGroup,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Radio,
    RadioGroup,
    RadioButton,
    // 通知
    Dialog,
    MessageBox,
    Message,
    // 表格
    Table,
    TableColumn,
    //标签
    Tag,
    // 图片
    Image,
    // 上传
    Upload,
    // 下拉菜单
    Dropdown,
    DropdownMenu,
    DropdownItem,
    // 加载
    Loading,
    // 分页
    Pagination
} from 'element-ui';


const element = {
    install: (Vue) => {
        Vue.prototype.$confirm = MessageBox.confirm
        Vue.prototype.$message = Message
        Vue.use(Container)
        Vue.use(Header)
        Vue.use(Aside)
        Vue.use(Main)
        Vue.use(Menu)
        Vue.use(Submenu)
        Vue.use(MenuItem)
        Vue.use(MenuItemGroup)
        Vue.use(Badge)
        Vue.use(Row)
        Vue.use(Col)
        Vue.use(Scrollbar)
        Vue.use(Form)
        Vue.use(FormItem)
        Vue.use(Input)
        Vue.use(InputNumber)
        Vue.use(Select)
        Vue.use(Option)
        Vue.use(OptionGroup)
        Vue.use(Button)
        Vue.use(ButtonGroup)
        Vue.use(Checkbox)
        Vue.use(CheckboxButton)
        Vue.use(CheckboxGroup)
        Vue.use(Radio)
        Vue.use(RadioGroup)
        Vue.use(RadioButton)
        Vue.use(TableColumn)
        Vue.use(Table)
        Vue.use(Tag)
        Vue.use(Dialog)
        Vue.use(Image)
        Vue.use(Upload)
        // Vue.use(MessageBox)
        Vue.use(Dropdown)
        Vue.use(DropdownMenu)
        Vue.use(DropdownItem)
        Vue.use(Pagination)
        Vue.use(Loading.directive)
        Vue.prototype.$loading = Loading.service
        Vue.component(MessageBox.name, MessageBox)
    }
}
export default element