# Webbserver intro

Idag installerade vi WSL, Ubuntu, Node och börjat med ett nytt projet

## Linux commandon

* pwd - För att visa aktiv mapp (print working directory)
* ls - Visa lista på synliga mappar
* ll - Visa lista på även osynliga mappar
* nano - Öppna nån konsol sak
* cd - Gå till ett ställe
* mkdir - Make directory
* history - Se historik på kommandon, !(nummer) för att använda det kommandot
* npm run "script" - Runnar ett script
* cat - Visar vad som finns i en fil
* echo - Printar ut vad man vill i konsolen


## Node 

För att skapa ett nytt node projekt kör man `npm init -y` i en mapp, skapar en package.json fil

För Node installerade vi express och nodemon. 
För att avsluta Node som körs med nodemon tryck `ctrl + c`

Vi skapade även en gitignore fil för att ignorera node modules.  
Skapades med `echo node_modules > .gitignore`

## Server.js

Vi använde oss av Express för att kunna routa requests och responds från servern till klienten. 

Vi skapade också en "public" mapp där filerna och innehållet som vi ska skicka finns.

För responset (res) använde vi oss av "res.send(innehåll)"

## Express

app.get('/', (req, res) => {
    console.log(req)
    res.status(200).sendFile("statuscode")
    console.log(res)
  })
  
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
  })

  #### För att göra en route:<br>
  app.get("/test", (req, res) => { <br>
&nbsp;&nbsp;    res.render("test.njk", { <br>
&nbsp;&nbsp;&nbsp;&nbsp;        message: "Test", <br>
&nbsp;&nbsp;&nbsp;&nbsp;        title: "Test    ", <br>
&nbsp;&nbsp;&nbsp;&nbsp;    })<br>
})




### Har flyttat alla routes från server filen till index.js inuti Routes mappen

Har skapat en search sak med filter och en 404 error sak  