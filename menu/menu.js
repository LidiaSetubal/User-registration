let option = "5"

do {
  option = prompt(
  "Welcome\n" +
  "\n1.Option one" +
  "\n2.Option two" +
  "\n3.Option three" +
  "\n4.Option four" +
  "\n5.close"
  )

  switch (option) {
    case "1":
     alert("you chose option 1")
     break
    case "2":
     alert("you chose option 2")
     break
    case "3":
     alert("you chose option 3")
     break
    case "4":
     alert("you chose option 4")
     break
    case "5":
     alert("you chose close ")
     alert("close...")
    break
    default:
      alert("invalid option")

  }
} while (option !== "5")
