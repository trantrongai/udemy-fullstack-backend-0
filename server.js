const http = require('http');//thư viện http đã cài sẵn trong nodejs nên ta chỉ gọi và dùng

// const hostname = '127.0.0.1';//localhost, co the thay so khac cho 1 tu 1 den 255
const hostname = 'localhost';//chữ localhost thay cho 127.0.0.1
const port = 3000;//co the thay so khác từ 0 đến 65355 cho số 3000 và phải né các port ở bài 11
//các hàm bên dưới dòng const server.. dùng để define 1 server, còn lại dùng để render ra nội dung của website
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\nHoi dan IT voi AI');
});
//hàm server.listen dùng để chạy server đã define nên nó càn 2 tham số port và hostname có giá trị ở trên
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
