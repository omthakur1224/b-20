// Start here

const express=require('express');
const fs=require('fs');

const app = express();

app.use(express.json());

app.get("/person", (req, res) => {

  const data = JSON.parse(
    fs.readFileSync("./person.json", { encoding: "utf-8" })
  );

  let query = req.query;

 // console.log(query)

    const filter = data.filter((el ,ind )=>{

            if(query.birth){
                return el.birth === query.birth

            }else if (query.current){
                return el.current === query.current
            }else if(query.visited){

                let check = el.visited.includes(query.visited);
                    if(check){
                        return el 
                    }
            }else if (query.birth && query.visited ){

                let check = el.visited.includes(query.visited);
                    if(check){
                     return el.birth === query.birth;
                        }
            }else{
                return el ;
            }

    });
    res.status(200).send({
      success: true,
      filter,
    });

});




app.get("/person/:id", (req, res) => {
  const id = Number(req.params.id);
  const data = JSON.parse(
    fs.readFileSync("./person.json", { encoding: "utf-8" })
  );

  console.log(data);

  const single = data.filter((el, ind) => {
    return el.id === id;
  });

  res.status(200).send({
    success: true,
    single,
  });
});


app.delete("/person/:id", (req, res) => {
  const id = Number(req.params.id);
  const data = JSON.parse(
    fs.readFileSync("./person.json", { encoding: "utf-8" })
  );

  console.log(data);

  const single = data.filter((el, ind) => {
    return el.id !== id;
  });

  fs.writeFileSync("./person.json", JSON.stringify(single), {
    encoding: "utf-8",
  });

  res.status(200).send({
    success: true,
    single,
  });
});

app.post("/person", (req, res) => {
  const obj = req.body;
  let d = new Date();
  obj.id = d

  const data = JSON.parse(
    fs.readFileSync("./person.json", { encoding: "utf-8" })
  );

  console.log(data);

  data.push(obj);

  fs.writeFileSync("./person.json", JSON.stringify(data), {
    encoding: "utf-8",
  });

  res.status(200).send({
    success: true,
    data,
  });
});


 


const PORT = "8000";
app.listen(PORT, async () => {
  try {
    console.log(`http://localhost:${PORT}`);
  } catch (error) {
    console.log(error.message);
  }
})