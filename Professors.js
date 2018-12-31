//import React from 'react';
const request = require("request")
const cheerio = require("cheerio")



request("https://www.ratemyprofessors.com/search.jsp?queryBy=schoolId&schoolName=Texas+A%26M+University+at+College+Station&schoolID=1003&queryoption=TEACHER",(error,response,html)=>{

    if(!error && response.statusCode == 200)
    {
        const $ = cheerio.load(html);
   
        const resultList = $('.result-list')
        resultList.each((i,el)=>{

            const item = $(el).text();
            console.log(item);
        });
    }
});
/*
export default class Professors extends React.Component {
render(){ 
request("https://www.ratemyprofessors.com/search.jsp?queryBy=schoolId&schoolName=Texas+A%26M+University+at+College+Station&schoolID=1003&queryoption=TEACHER",(error,response,html)=>{

    if(!error && response.statusCode == 200)
    {
        const $ = cheerio.load(html);
   
        const resultList = $('.result-list')
    }
});
return <h1></h1>

}
}
*/