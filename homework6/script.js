console.log("--Homeworks--")
var homeworks=document.getElementsByType("http://milowski.com/syllabus/Homework")
for (var i=0; i< homeworks.length; i++)
{console.log("Title - "+document.data.getValues(homeworks[i].data.id, "http://milowski.com/syllabus/title")+" Due -"+document.data.getValues(homeworks[i].data.id, "http://milowski.com/syllabus/due"));}
console.log("--Presentations--")
var presentations = document.getElementsByType("http://milowski.com/syllabus/Presentation")
for (var ij=0; ij< presentations.length; ij++)
{console.log("Title - "+document.data.getValues(presentations[ij].data.id, "http://milowski.com/syllabus/title") +" Due -"+document.data.getValues(presentations[ij].data.id, "http://milowski.com/syllabus/due"));}