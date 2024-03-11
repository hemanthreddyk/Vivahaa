export const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = () => {
      resolve(fileReader.result)
    }
    fileReader.onerror = (error) => {
      reject(error)
    }
  })
}

export const convertFileListToBase64 = (fileList) => {
  const promises = []
  for (let i = 0; i < fileList.length; i++) {
    const file = fileList[i]
    promises.push(convertToBase64(file))
  }
  return Promise.all(promises)
}
