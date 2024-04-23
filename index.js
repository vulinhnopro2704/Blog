const express = require('express') //Nạp thư viện express (đã được lưu ở node_modules và khai báo ở packages)
const app = express() //Trả lại 1 Instance để xây dựng website
const port = 3000 //Chọn cổng muốn chạy website

//Khai báo Route Definition trên website
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}`))

//localhost: 127.0.0.1