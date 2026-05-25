import room407 from '../assets/407.jpg'
import room407Studio from '../assets/407研究生工作室.jpg'
import room408L from '../assets/408L.jpg'
import room408R from '../assets/408R.jpg'
import room409L from '../assets/409L.jpg'
import room409R from '../assets/409R.jpg'
import room410 from '../assets/410.jpg'
import room412 from '../assets/412.jpg'
import room412_2 from '../assets/412（2）.jpg'
import room414 from '../assets/414.jpg'
import room416 from '../assets/416.jpg'
import room416_2 from '../assets/416（2）.jpg'
import room417 from '../assets/417.jpg'
import room418 from '../assets/418.jpg'
import room418L from '../assets/418L.jpg'
import room418R from '../assets/418R.jpg'
import room419 from '../assets/419.jpg'
import room419_2 from '../assets/419（2）.jpg'
import room426 from '../assets/426.jpg'
import room426_2 from '../assets/426（2）.jpg'
import room426_3 from '../assets/426（3）.jpg'
import room428 from '../assets/428.jpg'
import room430 from '../assets/430.jpg'
import room430_2 from '../assets/430（2）.jpg'
import room430_3 from '../assets/430（3）.jpg'
import room432 from '../assets/432.jpg'
import room434 from '../assets/434.jpg'
import room434_2 from '../assets/434（2）.jpg'
import room440 from '../assets/440.jpg'
import room440_2 from '../assets/440（2）.jpg'
import room441 from '../assets/441.jpg'
import room441_2 from '../assets/441（2）.jpg'
import room442 from '../assets/442.jpg'
import room442_2 from '../assets/442（2）.jpg'
import room443 from '../assets/443.jpg'
import room443_2 from '../assets/443（2）.jpg'
import room444 from '../assets/444.jpg'
import room444_2 from '../assets/444（2）.jpg'
import room446 from '../assets/446.jpg'
import room446_2 from '../assets/446（2）.jpg'
import room448 from '../assets/448.jpg'
import room450 from '../assets/450.jpg'
import room450L from '../assets/450L.jpg'
import room450R from '../assets/450R.jpg'
import room451 from '../assets/451.jpg'
import room451_1 from '../assets/451-1.jpg'
import room451_2 from '../assets/451-2.jpg'
import room451_3 from '../assets/451-3.jpg'
import room455 from '../assets/455.jpg'
import room456 from '../assets/456.jpg'
import room507 from '../assets/507.jpg'
import room507L from '../assets/507L.jpg'
import room507L_2 from '../assets/507L（2）.jpg'
import room508 from '../assets/508.jpg'
import room508_2 from '../assets/508（2）.jpg'
import room508_3 from '../assets/508（3）.jpg'
import room509L from '../assets/509L.jpg'
import room509L_2 from '../assets/509L（2）.jpg'
import room509R from '../assets/509R.jpg'
import room510 from '../assets/510.jpg'
import room510_2 from '../assets/510（2）.jpg'
import room510L from '../assets/510L.jpg'
import room511 from '../assets/511.jpg'
import room511_2 from '../assets/511（2）.jpg'
import room512 from '../assets/512.jpg'
import room514 from '../assets/514.jpg'
import room514_2 from '../assets/514（2）.jpg'
import room516 from '../assets/516.jpg'
import room516_2 from '../assets/516（2）.jpg'
import room516_3 from '../assets/516（3）.jpg'
import room517 from '../assets/517.jpg'
import room517_2 from '../assets/517（2）.jpg'
import room517_3 from '../assets/517（3）.jpg'
import room518 from '../assets/518.jpg'
import room518_2 from '../assets/518（2）.jpg'
import room518_3 from '../assets/518（3）.jpg'
import room518L from '../assets/518L.jpg'
import room519 from '../assets/519.jpg'
import room519R from '../assets/519R.jpg'
import room519_2 from '../assets/519（2）.jpg'
import room519_3 from '../assets/519（3）.jpg'
import room520 from '../assets/520.jpg'
import terrace1 from '../assets/露台-1.jpg'
import terrace2 from '../assets/露台-2.jpg'
import type { Room } from '../types/room'

export const rooms: Room[] = [
  {
    id: '407',
    name: '研究生工作室',
    floor: 4,
    thumbnail: room407,
    image: [room407, room407Studio],
    description: '研究生日常办公、学术交流与项目协作空间。',
    usage: '事务办理',
    staffs: [],
    tags: ['教育部工程研究中心实验室'],
  },
  {
    id: '408',
    name: '教师工作室',
    floor: 4,
    thumbnail: room408R,
    image: [room408R, room408L],
    description: '教师日常办公、备课、学生答疑与学术交流空间。',
    usage: '事务办理',
    staffs: [
      { name: '史扬', title: '无' },
      { name: '朱宏明', title: '无' },
      { name: '赵钦佩', title: '无' },
      { name: '唐伟', title: '无' },
      { name: '程颖', title: '无' },
      { name: '汪昱', title: '无' },
      { name: '黄凯锋', title: '无' },
      { name: '李文浩', title: '无' },
      { name: '高嘉尧', title: '无' },
    ],
    tags: ['办公', '咨询'],
  },
  {
    id: '409',
    name: '研究生工作室',
    floor: 4,
    thumbnail: room409L,
    image: [room409L, room409R],
    description: '研究生日常办公、学术交流与项目协作空间。',
    usage: '事务办理',
    staffs: [
      { name: '代玉琢', title: '实验室安全负责人' },
      { name: '朱亚萍', title: '实验室负责人', contact: '15195975598' },
      { name: '叶晨', title: '所属平台负责人' },
    ],
    tags: ['教育部工程研究中心实验室'],
  },
  {
    id: '410',
    name: '教师工作室',
    floor: 4,
    thumbnail: room410,
    image: [room410],
    description: '教师日常办公、备课、学生答疑与学术交流空间。',
    usage: '事务办理',
    staffs: [
      { name: '王冬青', title: '无' },
      { name: '李江峰', title: '无' },
      { name: '夏波涌', title: '无' },
      { name: '张颖', title: '无' },
      { name: '熊明亮', title: '无' },
    ],
    tags: ['办公', '咨询'],
  },
  {
    id: '412',
    name: '教师工作室',
    floor: 4,
    thumbnail: room412,
    image: [room412, room412_2],
    description: '教师日常办公、备课、学生答疑与学术交流空间。',
    usage: '事务办理',
    staffs: [
      { name: '刘岩', title: '无' },
      { name: '张惠娟', title: '无' },
      { name: '孙萍', title: '无' },
      { name: '罗怡桂', title: '无' },
    ],
    tags: ['办公', '咨询'],
  },
  {
    id: '414',
    name: '教师工作室',
    floor: 4,
    thumbnail: room414,
    image: [room414],
    description: '教师日常办公、备课、学生答疑与学术交流空间。',
    usage: '事务办理',
    staffs: [
      { name: '肖国宝', title: '无' },
      { name: '杜庆峰', title: '无' },
      { name: '张苗苗', title: '无' },
    ],
    tags: ['办公', '咨询'],
  },
  {
    id: '416',
    name: '教学机房',
    floor: 4,
    thumbnail: room416,
    image: [room416, room416_2],
    description: '上机相关教学课程场所。',
    usage: '教务支持',
    staffs: [],
    tags: ['教学', '机房'],
  },
  {
    id: '417',
    name: '会议室',
    floor: 4,
    thumbnail: room417,
    image: [room417],
    description: '会议与讨论协作。',
    usage: '研讨空间',
    staffs: [],
    tags: ['研讨', '项目'],
  },
  {
    id: '418',
    name: '教师工作室L、学生创新基地R',
    floor: 4,
    thumbnail: room418,
    image: [room418, room418L, room418R],
    description: '教师日常办公、备课、学生创新与交流基地。',
    usage: '事务办理',
    staffs: [
      { name: '张林', title: '无' },
      { name: '刘琴', title: '无' },
      { name: '陈韩悦', title: '实验室安全责任人' },
      { name: '叶晨', title: '所属平台负责人' },
      { name: '尹长青', title: '实验室负责人', contact: '18901892339' },
    ],
    tags: ['办公', '科研'],
  },
  {
    id: '419',
    name: '计算机系统教学实验室',
    floor: 4,
    thumbnail: room419,
    image: [room419, room419_2],
    description: '计算机系统相关课程教学与实验场所。',
    usage: '教学支持',
    staffs: [],
    tags: ['教学', '科研'],
  },
  {
    id: '426',
    name: '研究生工作室',
    floor: 4,
    thumbnail: room426,
    image: [room426, room426_2, room426_3],
    description: '研究生日常办公、学术交流与项目协作空间。',
    usage: '事务办理',
    staffs: [
      { name: '陟恒', title: '实验室安全负责人' },
      { name: '朱磊', title: '实验室负责人', contact: '15165052783' },
      { name: '叶晨', title: '所属平台负责人' },
    ],
    tags: ['实验室'],
  },
  {
    id: '428',
    name: '实验室',
    floor: 4,
    thumbnail: room428,
    image: [room428],
    description: '学术科研与项目协作空间。',
    usage: '科研支持',
    staffs: [],
    tags: ['实验室'],
  },
  {
    id: '430',
    name: '教学机房',
    floor: 4,
    thumbnail: room430,
    image: [room430, room430_2, room430_3],
    description: '上机相关教学课程场所。',
    usage: '教学支持',
    staffs: [
      { name: '杨旻', title: '实验室安全负责人' },
      { name: '杨旻', title: '实验室负责人', contact: '13918683745' },
    ],
    tags: ['教学', '机房'],
  },
  {
    id: '432',
    name: '党员之家',
    floor: 4,
    thumbnail: room432,
    image: [room432],
    description: '党员活动与学习空间。',
    usage: '党建活动',
    staffs: [],
    tags: ['党建', '活动'],
  },
  {
    id: '434',
    name: '教室',
    floor: 4,
    thumbnail: room434,
    image: [room434, room434_2],
    description: '教学与讲座场所。',
    usage: '教学支持',
    staffs: [],
    tags: ['教学', '讲座'],
  },
  {
    id: '440',
    name: '综合事务管理中心',
    floor: 4,
    thumbnail: room440,
    image: [room440, room440_2],
    description: '综合事务管理与学生服务中心。',
    usage: '事务办理',
    staffs: [
      { name: '张砚秋', title: '无' },
      { name: '闫鹏', title: '无' },
      { name: '钱银飞', title: '无' },
      { name: '陈梁', title: '无' },
      { name: '杨旻', title: '无' },
      { name: '张曦月', title: '无' },
    ],
    tags: ['办公', '咨询'],
  },
  {
    id: '441',
    name: '会议室',
    floor: 4,
    thumbnail: room441,
    image: [room441, room441_2],
    description: '会议与讨论协作。',
    usage: '研讨空间',
    staffs: [],
    tags: ['研讨', '项目'],
  },
  {
    id: '442',
    name: '教学管理中心',
    floor: 4,
    thumbnail: room442,
    image: [room442, room442_2],
    description: '教学管理与教务服务中心。',
    usage: '事务办理',
    staffs: [
      { name: '杨洪念', title: '无' },
      { name: '杨丹', title: '无' },
      { name: '姚仕仪', title: '无' },
      { name: '王彩霞', title: '无' },
      { name: '刘梦露', title: '无' },
      { name: '李慧敏', title: '无' },
      { name: '万亚文', title: '无' },
    ],
    tags: ['办公', '咨询'],
  },
  {
    id: '443',
    name: '综合事务管理中心',
    floor: 4,
    thumbnail: room443,
    image: [room443, room443_2],
    description: '综合事务管理与学生服务中心。',
    usage: '事务办理',
    staffs: [
      { name: '闫志威', title: '无' },
      { name: '张晓雅', title: '无' },
      { name: '陈妍妍', title: '无' },
    ],
    tags: ['办公', '咨询'],
  },
  {
    id: '444',
    name: '教学管理中心、科研管理中心、学科建设与国际合作中心',
    floor: 4,
    thumbnail: room444,
    image: [room444, room444_2],
    description: '教学管理、科研管理、学科建设与国际合作综合服务中心。',
    usage: '事务办理',
    staffs: [
      { name: '俞晓静', title: '无' },
      { name: '郭玉臣', title: '无' },
      { name: '杜博闻', title: '无' },
      { name: '刘鹏飞', title: '无' },
      { name: '范险若', title: '无' },
      { name: '周琳', title: '无' },
    ],
    tags: ['办公', '咨询'],
  },
  {
    id: '446',
    name: '学生思政工作中心',
    floor: 4,
    thumbnail: room446,
    image: [room446, room446_2],
    description: '学生思政工作与心理健康服务中心。',
    usage: '事务办理',
    staffs: [
      { name: '克热木', title: '无' },
      { name: '葛蕾', title: '无' },
      { name: '焦嘉欣', title: '无' },
      { name: '钟梦莹', title: '无' },
      { name: '王晓文', title: '无' },
    ],
    tags: ['办公', '咨询'],
  },
  {
    id: '448',
    name: '无',
    floor: 4,
    thumbnail: room448,
    image: [room448],
    description: '无',
    usage: '无',
    staffs: [],
    tags: ['无'],
  },
  {
    id: '450',
    name: '院长办公室、党委书记办公室',
    floor: 4,
    thumbnail: room450,
    image: [room450, room450L, room450R],
    description: '院长办公室与行政管理中心。',
    usage: '事务办理',
    staffs: [
      { name: '申恒涛', title: '院长' },
      { name: '熊岚', title: '党委书记' },
    ],
    tags: ['办公', '咨询'],
  },
  {
    id: '451',
    name: '副院长办公室',
    floor: 4,
    thumbnail: room451,
    image: [room451, room451_1, room451_2, room451_3],
    description: '副院长办公室与行政管理中心。',
    usage: '事务办理',
    staffs: [
      { name: '王成', title: '副院长' },
      { name: '何良华', title: '副院长' },
      { name: '卫志华', title: '副院长' },
    ],
    tags: ['办公', '咨询'],
  },
  {
    id: '455',
    name: '会议室',
    floor: 4,
    thumbnail: room455,
    image: [room455],
    description: '会议与讨论协作。',
    usage: '研讨空间',
    staffs: [],
    tags: ['研讨', '项目'],
  },
  {
    id: '456',
    name: '党委办公室',
    floor: 4,
    thumbnail: room456,
    image: [room456],
    description: '党委办公室与行政管理中心。',
    usage: '事务办理',
    staffs: [
      { name: '周微微', title: '无' },
      { name: '陆凤兰', title: '无' },
      { name: '赵清瑾', title: '无' },
    ],
    tags: ['办公', '咨询'],
  },
  {
    id: '507',
    name: '教师工作室',
    floor: 5,
    thumbnail: room507,
    image: [room507, room507L, room507L_2],
    description: '教师日常办公、备课、学生答疑与学术交流空间。',
    usage: '事务办理',
    staffs: [
      { name: '陈伟超', title: '无' },
      { name: '王洁', title: '无' },
      { name: '曾进', title: '无' },
      { name: '朱亚萍', title: '无' },
      { name: '杜博闻', title: '无' },
      { name: '韩丰夏', title: '无' },
      { name: '李冰', title: '无' },
      { name: '李文浩', title: '无' },
      { name: '高嘉尧', title: '无' },
    ],
    tags: ['办公', '咨询'],
  },
  {
    id: '508',
    name: '研究生工作室',
    floor: 5,
    thumbnail: room508,
    image: [room508, room508_2, room508_3],
    description: '研究生日常办公、学术交流与项目协作空间。',
    usage: '事务办理',
    staffs: [
      { name: '陈韩悦', title: '实验室安全负责人' },
      { name: '尹长青', title: '实验室负责人', contact: '18901892339' },
      { name: '叶晨', title: '所属平台负责人' },
    ],
    tags: ['实验室'],
  },
  {
    id: '509R',
    name: '教师工作室',
    floor: 5,
    thumbnail: room509R,
    image: [room509R],
    description: '教师日常办公、备课、学生答疑与学术交流空间。',
    usage: '事务办理',
    staffs: [
      { name: '尹长青', title: '无' },
      { name: '沈莹', title: '无' },
      { name: '金博', title: '无' },
    ],
    tags: ['办公', '咨询'],
  },
  {
    id: '509L',
    name: '研究生工作室',
    floor: 5,
    thumbnail: room509L,
    image: [room509L, room509L_2],
    description: '研究生日常办公、学术交流与项目协作空间。',
    usage: '事务办理',
    staffs: [
      { name: '汪曦', title: '实验室安全负责人' },
      { name: '陈知行', title: '实验室安全负责人' },
      { name: '史清江', title: '实验室负责人', contact: '1805792044' },
      { name: '叶晨', title: '所属平台负责人' },
    ],
    tags: ['实验室'],
  },
  {
    id: '510',
    name: '教授办公室',
    floor: 5,
    thumbnail: room510,
    image: [room510, room510L, room510_2],
    description: '教授日常办公、学术交流与项目协作空间。',
    usage: '事务办理',
    staffs: [
      { name: '赵生捷', title: '实验室负责人' },
    ],
    tags: ['实验室'],
  },
  {
    id: '511',
    name: '研究生工作室',
    floor: 5,
    thumbnail: room511,
    image: [room511, room511_2],
    description: '研究生日常办公、学术交流与项目协作空间。',
    usage: '事务办理',
    staffs: [
      { name: '谢尹', title: '实验室安全负责人' },
      { name: '罗怡桂', title: '实验室负责人', contact: '18918031709' },
      { name: '叶晨', title: '所属平台负责人' },
    ],
    tags: ['实验室'],
  },
  {
    id: '512',
    name: '教师工作室',
    floor: 5,
    thumbnail: room512,
    image: [room512],
    description: '教师日常办公、备课、学生答疑与学术交流空间。',
    usage: '事务办理',
    staffs: [],
    tags: ['办公', '咨询'],
  },
  {
    id: '514',
    name: '教师工作室',
    floor: 5,
    thumbnail: room514,
    image: [room514, room514_2],
    description: '教师日常办公、备课、学生答疑与学术交流空间。',
    usage: '事务办理',
    staffs: [
      { name: '黄杰', title: '无' },
      { name: '高珍', title: '无' },
      { name: '冯巾松', title: '无' },
      { name: '范鸿飞', title: '无' },
      { name: '唐剑锋', title: '无' },
      { name: '邓浩', title: '无' },
    ],
    tags: ['办公', '咨询'],
  },
  {
    id: '516',
    name: '教学机房',
    floor: 5,
    thumbnail: room516,
    image: [room516, room516_2, room516_3],
    description: '上机相关教学课程场所。',
    usage: '教学支持',
    staffs: [
      { name: '杨旻', title: '实验室安全负责人' },
      { name: '杨旻', title: '实验室负责人', contact: '13918683745' },
    ],
    tags: ['教学', '机房'],
  },
  {
    id: '517',
    name: '主机服务器机房',
    floor: 5,
    thumbnail: room517,
    image: [room517, room517_2, room517_3],
    description: '机电类中风险实验室',
    usage: '科研支持',
    staffs: [
      { name: '杨旻', title: '实验室安全负责人' },
      { name: '杨旻', title: '实验室负责人', contact: '13918683745' },
    ],
    tags: ['科研', '机房'],
  },
  {
    id: '518L',
    name: '教师工作室',
    floor: 5,
    thumbnail: room518L,
    image: [room518L],
    description: '教师日常办公、备课、学生答疑与学术交流空间。',
    usage: '事务办理',
    staffs: [
      { name: '徐行', title: '无' },
      { name: '曹晓峰', title: '无' },
      { name: '王轩瀚', title: '无' },
    ],
    tags: ['办公', '咨询'],
  },
  {
    id: '518R',
    name: '教师工作室',
    floor: 5,
    thumbnail: room518,
    image: [room518, room518_2, room518_3],
    description: '教师日常办公、备课、学生答疑与学术交流空间。',
    usage: '事务办理',
    staffs: [
      { name: '朱磊', title: '无' },
      { name: '张鹏飞', title: '无' },
      { name: '张奇', title: '无' },
    ],
    tags: ['办公', '咨询'],
  },
  {
    id: '519',
    name: '教学机房',
    floor: 5,
    thumbnail: room519,
    image: [room519, room519_2, room519_3, room519R],
    description: '上机相关教学课程场所。',
    usage: '教学支持',
    staffs: [
      { name: '杨旻', title: '实验室安全负责人' },
      { name: '杨旻', title: '实验室负责人', contact: '13918683745' },
    ],
    tags: ['教学', '机房'],
  },
  {
    id: '520',
    name: '无',
    floor: 5,
    thumbnail: room520,
    image: [room520],
    description: '无',
    usage: '无',
    staffs: [],
    tags: ['无'],
  },
  {
    id: '露台',
    name: '露台',
    floor: 5,
    thumbnail: terrace1,
    image: [terrace1, terrace2],
    description: '无',
    usage: '无',
    staffs: [],
    tags: ['无'],
  },
]
