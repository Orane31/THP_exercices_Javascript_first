let data
let data_name
function check_data(data){
  switch(data){
    default:
      data_name = "Unknown"
    case "UCU":
    case "UCC":
    case "UCA":
    case "UCG":
    case "AGU":
    case "AGC":
      data_name = "Sérine"
      break;
    case "CCU":
    case "CCC":
    case "CCA":
    case "CCG":
      data_name = "Proline"
      break;
    case "UUA":
    case "UUG":
      data_name = "Leucine"
      break
    case "UUU":
    case "UUC":
      data_name = "Phénylalanine"
      break;
    case "CGU":
    case "CGC":
    case "CGA":
    case "CGG":
    case "AGA":
    case "AGG":
      data_name = "Arginine"
      break;
    case "UAU":
    case "UAC":
      data_name = "Tyrosine"
      break;
  }
  return data_name
}

function extract_from_string(string){
  let l = string.length
  console.log("Length : " + l)
  arr = []
  let j = 0
  let data
  for(i = 0; i < l; i += 3){ 
    data = string.substr(i,3)
 
    arr[j] = check_data(data) 
    j ++
  }
  console.log("Analyzing :");
  console.log(arr.join('-'));
}
console.log("*".repeat(60));
console.log("# First: CCG-UCG-UUG-CGC-UAC-AGC");
extract_from_string("CCGUCGUUGCGCUACAGC");
console.log("*".repeat(60));
console.log("# Second: CCU-CGC-CGG-UAC-UUC-UCG");
extract_from_string("CCUCGCCGGUACUUCUCG");
console.log("*".repeat(60));
console.log("# Third: UUA-CGC-AGU-AGA");
extract_from_string("UUACGCAGUAGA");
console.log("*".repeat(60));