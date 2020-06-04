
//My Details
let myDetails = {
    fullName: "Kabir Abdulsalam",
    internId: "HNG-05020",
    language: "javascript",
    email: "abdulsalamkabir99@gmail.com"
};

let cl = console.log;

//Output
const showText = () => {

    cl(`Hello World, this is ${myDetails.fullName} with HNGi7 ID ${myDetails.internId} using ${myDetails.language} for stage 2 task  and ${myDetails.email}`);
};

showText();
