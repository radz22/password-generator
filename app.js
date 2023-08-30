let paragraph = document.getElementById("paragraph");
let input = document.getElementById("input");
const button = document.getElementById("copytext");

button.addEventListener("click", () => {
  // Create a temporary textarea element
  const textarea = document.createElement("textarea");

  // Set its value to the text of the heading
  textarea.value = paragraph.textContent;

  // Append the textarea to the document
  document.body.appendChild(textarea);

  // Copy the text from the textarea
  textarea.select();
  document.execCommand("copy");

  // Remove the textarea from the document
  document.body.removeChild(textarea);

  // Alert or provide feedback to the user
  alert("Copied!");
});

const passwordCharacter = [
    "kitty", 
    "allblacks", 
    "abfwqc", 
    "Sterling",
    "12345",
"qwerty",
"11111",
"football",
"master",
"boss",
"123",
"superman",
"jordan",
"soccer",
"tigger",
"charlie",
"robert",
"hunter",
"killer",
"mustang",
"666666",
"shadow",
"6969",
"password",
];

const passwordStrong = [
    "1Ki77y", 
    "jelly22fi$h", 
    "$m3llycat", 
    "&ebay.44",
    "J|mjmL(gxQ-D(@",
    "@*,078@,O5WbJTk",
    "Y?9pSj}SC+_OTG",
    "0*4F[`J6@P?Egxa",
"]AH)+Om:A2yD%~?",
"SU31dlv'La1,#`M",
"Rjc!)yqGj)k,bUN",
"%G0LKeaX3UKP`Nt",
"B^98>Np.7k1z6#f",
"DA.hWdenxmKkC",
"r8KMfGN$=kJitg.",
"vXAp_b7g3Oy?D[w",
"t@quL0zd6xnKb6I",
"1e%99Wk@>8c}PpY",
"BMA.-F<anSIfUCO",
"#e~`}We5k)v;MQd",
"D)e`vIf]y#D*d",
":Lc-[c5;A:'2#Kf",
";?XOtu~Bz#YTJ(",
"=%O.SZf7H<42aTV",


];

const PasswordWeak = () => {
  return Math.floor(Math.random() * passwordCharacter.length);
};

const passwordStrongers = () => {
  return Math.floor(Math.random() * passwordStrong.length);
};

function passwordGenerate() {
  let text = input.value;
  const passwordCount = passwordStrongers();
  const passwordCount1 = PasswordWeak();

  switch (text) {
    case "STRONG":
      paragraph.innerText =  passwordStrong[passwordCount]
      paragraph.style.color = "black";
      paragraph.style.fontSize = "40px";
      break;
    case "WEAK":
      paragraph.innerText = passwordCharacter[passwordCount1]
      paragraph.style.color = "black";
      paragraph.style.fontSize = "40px";
      break;
    case "":
      paragraph.innerText = "type STRONG or WEAK Password";
      paragraph.style.color = "red";
      paragraph.style.fontSize = "15px";

      break;
  }
}
