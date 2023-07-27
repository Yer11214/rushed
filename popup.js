function generateRandomName() {
    const surnames = ['赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈', '褚', '卫', '蒋', '沈', '韩', '杨', '朱', '秦', '尤', '许', '何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏', '陶', '姜', '戚', '谢', '邹', '喻', '柏', '水', '窦', '章', '云', '苏', '潘', '葛', '奚', '范', '彭', '郎', '鲁', '韦', '昌', '马', '苗', '凤', '花', '方', '俞', '任', '袁', '柳', '酆', '鲍', '史', '唐', '费', '廉', '岑', '薛', '雷', '贺', '倪', '汤', '滕', '殷', '罗', '毕', '郝', '邬', '安', '常', '乐', '于', '时', '傅', '皮', '卞', '齐', '康', '伍', '余', '元', '卜', '顾', '孟', '平', '黄', '和', '穆', '萧', '尹', '姚', '邵', '堪', '汪', '祁', '毛', '禹', '狄', '米', '贝', '明', '臧', '计', '伏', '成', '戴', '谈', '宋', '茅', '庞', '熊', '纪', '舒', '屈', '项', '祝', '董', '梁']
  
    const names = ['伟', '芳', '娜', '秀英', '敏', '静', '丽', '强', '磊', '洋', '勇', '艳', '杰', '娟', '涛', '明', '超', '秀兰', '霞', '平', '刚', '桂英', '英', '华', '小红', '建华', '文', '健', '玉兰', '红', '建国', '志强', '小丽', '国强', '金凤', '秀珍', '秀华', '丽华', '丽丽', '晶', '荣', '军', '丹', '桂兰', '玉英', '秀荣', '世英', '桂珍', '雪', '凤英', '全兰', '美丽', '淑珍', '桂荣', '秀梅', '桂花', '欢', '兰英', '桂芳', '小强', '小芳', '红梅', '明华', '兰', '丽娟', '桂香', '小兰', '秀云', '海燕', '芳芳', '红霞', '玉华', '秀芳', '桂香']
  
    const randomSurname = surnames[Math.floor(Math.random() * surnames.length)]
    const randomName = names[Math.floor(Math.random() * names.length)]
  
    return randomSurname + randomName
  }
  
  function generateRandomPhoneNumber() {
    const prefixList = ['130', '131', '132', '133', '134', '135', '136', '137', '138', '139', '150', '151', '152', '153', '155', '156', '157', '158', '159', '170', '171', '172', '173', '174', '175', '176', '177', '178', '180', '181', '182', '183', '184', '185', '186', '187', '188', '189']
  
    const randomPrefix = prefixList[Math.floor(Math.random() * prefixList.length)]
    const randomNumber = Math.floor(Math.random() * 1000000000).toString().padStart(9, '0')
  
    return randomPrefix + randomNumber
  }
  
  function generateRandomEmail() {
    const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'qq.com', '163.com', 'sina.com', 'icloud.com', 'aol.com', 'mail.com']
  
    const randomName = Math.random().toString(36).substring(2, 8)
    const randomDomain = domains[Math.floor(Math.random() * domains.length)]
  
    return `${randomName}@${randomDomain}`
  }
  
  function generateRandomIDNumber() {
    const randomAreaCode = getRandomAreaCode()
    const randomBirthDate = getRandomBirthDate()
    const randomSequenceCode = getRandomSequenceCode()
    const randomChecksum = calculateChecksum(randomAreaCode + randomBirthDate + randomSequenceCode)
  
    return randomAreaCode + randomBirthDate + randomSequenceCode + randomChecksum
  }
  
  function getRandomAreaCode() {
    // 省、直辖市代码
    const areaCodes = [
      '11', '12', '13', '14', '15', '21', '22', '23', '31', '32', '33', '34', '35', '36', '37', '41', '42', '43',
      '44', '45', '46', '50', '51', '52', '53', '54', '61', '62', '63', '64', '65', '71', '81', '82', '91',
    ]
  
    return areaCodes[Math.floor(Math.random() * areaCodes.length)]
  }
  
  function getRandomBirthDate() {
    // 随机生成一个18岁到70岁之间的出生日期
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const minYear = currentYear - 70
    const maxYear = currentYear - 18
  
    const randomYear = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear
    const randomMonth = Math.floor(Math.random() * 12) + 1
    const randomDay = Math.floor(Math.random() * 28) + 1
  
    const paddedMonth = randomMonth.toString().padStart(2, '0')
    const paddedDay = randomDay.toString().padStart(2, '0')
  
    return `${randomYear}${paddedMonth}${paddedDay}`
  }
  
  function getRandomSequenceCode() {
    // 随机生成3位顺序码
    return Math.floor(Math.random() * 1000).toString().padStart(3, '0')
  }
  
  function calculateChecksum(idNumber) {
    // 计算身份证号的校验码
    const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
    const checksumChars = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
  
    let sum = 0
    for (let i = 0; i < weights.length; i++)
      sum += parseInt(idNumber.charAt(i)) * weights[i]
  
    const checksumIndex = sum % 11
    return checksumChars[checksumIndex]
  }
  

  