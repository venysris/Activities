var fs=require("fs");
fs.appendFile("ukinode.txt", "Uki is a Coding School by Yarl IT Hub, which offers a six months long intensive, in class training program that trains students to acquire skills needed to join tech companies as interns/ junior developers or become entrepreneurs. Uki is a life changing program with a proven track record of enabling those who had completed secondary school education to join the tech industry. The outcome based learning experience at Uki is a meticulously designed program which has been developed by tech industry practitioners and skilled teachers. It ensures a transformational development of the technical skills, language skills, business skills and interpersonal skills of each student who completes the course.",
function(err) {
    if (err) throw err;
    console.log("File Created");
});