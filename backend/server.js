//server.js
const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json());

app.post('/api/items',(req,res)=>{
    console.log("Received:", req.body);
    const itemId = "item-" + Date.now();
    res.json({itemId}); //QR 생성
});

app.get('/',(req,res)=>{
    res.send("분실물 찾기 백엔드 서버");
});

app.listen(8081, '0.0.0.0',()=>{
    console.log('서버 열림');
});