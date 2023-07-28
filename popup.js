function generateName() {
  const surnames = [
    "赵",
    "钱",
    "孙",
    "李",
    "周",
    "吴",
    "郑",
    "王",
    "冯",
    "陈",
    "褚",
    "卫",
    "蒋",
    "沈",
    "韩",
    "杨",
    "朱",
    "秦",
    "尤",
    "许",
    "何",
    "吕",
    "施",
    "张",
    "孔",
    "曹",
    "严",
    "华",
    "金",
    "魏",
    "陶",
    "姜",
    "戚",
    "谢",
    "邹",
    "喻",
    "柏",
    "水",
    "窦",
    "章",
    "云",
    "苏",
    "潘",
    "葛",
    "奚",
    "范",
    "彭",
    "郎",
    "鲁",
    "韦",
    "昌",
    "马",
    "苗",
    "凤",
    "花",
    "方",
    "俞",
    "任",
    "袁",
    "柳",
    "酆",
    "鲍",
    "史",
    "唐",
    "费",
    "廉",
    "岑",
    "薛",
    "雷",
    "贺",
    "倪",
    "汤",
    "滕",
    "殷",
    "罗",
    "毕",
    "郝",
    "邬",
    "安",
    "常",
    "乐",
    "于",
    "时",
    "傅",
    "皮",
    "卞",
    "齐",
    "康",
    "伍",
    "余",
    "元",
    "卜",
    "顾",
    "孟",
    "平",
    "黄",
    "和",
    "穆",
    "萧",
    "尹",
    "姚",
    "邵",
    "堪",
    "汪",
    "祁",
    "毛",
    "禹",
    "狄",
    "米",
    "贝",
    "明",
    "臧",
    "计",
    "伏",
    "成",
    "戴",
    "谈",
    "宋",
    "茅",
    "庞",
    "熊",
    "纪",
    "舒",
    "屈",
    "项",
    "祝",
    "董",
    "梁",
  ];

  const names = [
    "伟",
    "芳",
    "娜",
    "秀英",
    "敏",
    "静",
    "丽",
    "强",
    "磊",
    "洋",
    "勇",
    "艳",
    "杰",
    "娟",
    "涛",
    "明",
    "超",
    "秀兰",
    "霞",
    "平",
    "刚",
    "桂英",
    "英",
    "华",
    "小红",
    "建华",
    "文",
    "健",
    "玉兰",
    "红",
    "建国",
    "志强",
    "小丽",
    "国强",
    "金凤",
    "秀珍",
    "秀华",
    "丽华",
    "丽丽",
    "晶",
    "荣",
    "军",
    "丹",
    "桂兰",
    "玉英",
    "秀荣",
    "世英",
    "桂珍",
    "雪",
    "凤英",
    "全兰",
    "美丽",
    "淑珍",
    "桂荣",
    "秀梅",
    "桂花",
    "欢",
    "兰英",
    "桂芳",
    "小强",
    "小芳",
    "红梅",
    "明华",
    "兰",
    "丽娟",
    "桂香",
    "小兰",
    "秀云",
    "海燕",
    "芳芳",
    "红霞",
    "玉华",
    "秀芳",
    "桂香",
  ];

  const randomSurname = surnames[Math.floor(Math.random() * surnames.length)];
  const randomName = names[Math.floor(Math.random() * names.length)];

  return randomSurname + randomName;
}

function generateMobile() {
  const prefixList = [
    "130",
    "131",
    "132",
    "133",
    "134",
    "135",
    "136",
    "137",
    "138",
    "139",
    "150",
    "151",
    "152",
    "153",
    "155",
    "156",
    "157",
    "158",
    "159",
    "170",
    "171",
    "172",
    "173",
    "174",
    "175",
    "176",
    "177",
    "178",
    "180",
    "181",
    "182",
    "183",
    "184",
    "185",
    "186",
    "187",
    "188",
    "189",
  ];

  const randomPrefix =
    prefixList[Math.floor(Math.random() * prefixList.length)];
  const randomNumber = Math.floor(Math.random() * 1000000000)
    .toString()
    .padStart(9, "0");

  return randomPrefix + randomNumber;
}

function generateEmail() {
  const domains = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "outlook.com",
    "qq.com",
    "163.com",
    "sina.com",
    "icloud.com",
    "aol.com",
    "mail.com",
  ];

  const randomName = Math.random().toString(36).substring(2, 8);
  const randomDomain = domains[Math.floor(Math.random() * domains.length)];

  return `${randomName}@${randomDomain}`;
}

const generateRandomIDNumber = () => {
  // 生成一个随机的出生日期（1990年到2003年之间）
  const randomYear = Math.floor(Math.random() * (2003 - 1990 + 1)) + 1990;
  const randomMonth = Math.floor(Math.random() * 12) + 1;
  const randomDay = Math.floor(Math.random() * 28) + 1; // 简化处理，假设每个月都取28天

  const birthDate = `${randomYear}${randomMonth
    .toString()
    .padStart(2, "0")}${randomDay.toString().padStart(2, "0")}`;

  // 生成一个随机的地区码（6位）
  const randomRegionCode = Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, "0");

  // 生成一个随机的顺序码（3位）
  const randomSequence = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, "0");

  // 计算校验码（最后一位）
  const baseString = `${randomRegionCode}${birthDate}${randomSequence}`;
  const weightArray = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  const checkCodeMap = {
    0: "1",
    1: "0",
    2: "X",
    3: "9",
    4: "8",
    5: "7",
    6: "6",
    7: "5",
    8: "4",
    9: "3",
    10: "2",
  };
  let checkSum = 0;
  for (let i = 0; i < baseString.length; i++) {
    checkSum += parseInt(baseString[i]) * weightArray[i];
  }
  const checkCode = checkCodeMap[checkSum % 11];

  return `${randomRegionCode}${birthDate}${randomSequence}${checkCode}`;
};

const generateRandomBankCardNumber = () => {
  const bankCardDigits = "0123456789";
  const cardLength = 16;

  let cardNumber = "";
  for (let i = 0; i < cardLength; i++) {
    const randomDigit =
      bankCardDigits[Math.floor(Math.random() * bankCardDigits.length)];
    cardNumber += randomDigit;
  }

  return cardNumber;
};

const generateList = [
  {
    label: "手机号",
    key: "mobile",
    value: "",
  },
  {
    label: "姓名",
    key: "name",
    value: "",
  },
  {
    label: "邮箱",
    key: "email",
    value: "",
  },
  {
    label: "身份证",
    key: "id",
    value: "",
  },
  {
    label: "银行卡",
    key: "bank",
    value: "",
  },
];

const functionList = {
  mobile: generateMobile,
  name: generateName,
  email: generateEmail,
  id: generateRandomIDNumber,
  bank: generateRandomBankCardNumber,
};

// 生成数据
function generate() {
  generateList.forEach((key) => {
    const app = document.getElementById("app");
    key.value = functionList[key.key]();
    app.innerHTML += `<div class="random-item">
    <div class="label">随机生成${key.label}</div>
    <input disabled type="text" id="${key.key}-input" value="${key.value}" placeholder="Type here"  class="input input-bordered input-sm  max-w-xs" />
    <button id="${key.key}-btn" data-key="${key.key}" class="btn btn-xs">生成</button>
  </div>`;
  });
}
window.onload = function () {
  generate();

  // 在popup页面的父元素上添加事件委托
  document.getElementById("app").addEventListener("click", function (event) {
    // 通过判断事件目标是否为按钮，来执行相应的操作
    const target = event.target;
    if (target.tagName === "BUTTON") {
      const key = target.getAttribute("data-key");
      const input = target.parentElement.querySelector(`#${key}-input`);
      const value = functionList[key]();
      input.value = value;
    }
  });

  document.getElementById("close").onclick = function () {
    window.close();
  };
};
