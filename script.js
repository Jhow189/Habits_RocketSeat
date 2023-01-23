const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add) //escuta o cliq e realiza tal funcao
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExist = nlwSetup.dayExists(today)

  if (dayExist) {
    alert("Dia já incluso ❌")
    return
  }
  alert("Dia add com sucesso ✅")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("nlwSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
// const data = {
//   run: ["01-01", "01-02", "01-03", "01-04", "01-05"],
//   takePills: ["01-03"],
//   journal: ["01-02"],
// }

// nlwSetup.setData(data)
// nlwSetup.load()
