userRouter.post('/',(req,res)=>{
    console.log(req.body)
    // let update=users;
    let data=fs.readFileSync('db.json','utf-8');
     let user=JSON.parse(data);
     user=user.users;
    user.push(req.body);

    {dbusers.users=user}
    // fs.writeFile('db.json',JSON.stringify(users),()=>{});
    fs.writeFile('./db.json',JSON.stringify(dbusers),()=>{})
    dbusers
    // this will not work 
    // fs.writeFile('../db.json',JSON.stringify(users),()=>{})
    // let dirpath=path.join(`${__dirname}../db.json`)
        let dirpath=path.join(`path.dirname("db.json")/db.json`);
    console.log(dirpath)
    // fs.appendFile(dirpath,JSON.stringify(users),()=>{})
    res.status(201).send('successfully created');
})