const fs =  require("fs")
// sync is a method that allows you to write to a file synchronously
// The first argument is the file name and the second is the content
// fs.writeFileSync("text.txt", "You did it!") 

// async is a method that allows you to write to a file asynchronously
// fs.writeFile("./contact.txt", "You did it! again",(err)=>{
//     console.log((err))
// } )

// const resuult = fs.readFile("./contact.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("err",err)
//     }else{
//         console.log(result)
//     }
// });
// console.log(resuult)

// fs.appendFileSync("./contact.txt", ` ${Date.now()}\n`)
// console.log("File updated successfully!")

// fs.copyFile("./contact.txt", "./contact4.txt")
// fs.unlinkSync("./contact2.txt")
// console.log("File deleted successfully!")
console.log(fs.statSync("./contact.txt").isFile())


