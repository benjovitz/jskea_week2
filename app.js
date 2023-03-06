import { loadTemplate, renderTemplate } from "./util.js"

import{initP2} from "./pages/p2/p2.js"
import{initP3} from "./pages/p3/p3.js"
import{initP4} from "./pages/p4/p4.js"
import{initP5} from "./pages/p5/p5.js"

window.addEventListener("load", async () => {
    const templateP1 = await loadTemplate("./pages/p1/p1.html")
    const templateP2 = await loadTemplate("./pages/p2/p2.html")
    const templateP3 = await loadTemplate("./pages/p3/p3.html")
    const templateP4 = await loadTemplate("./pages/p4/p4.html")
    const templateP5 = await loadTemplate("./pages/p5/p5.html")
     
     document.getElementById("btns").onclick = handleButtonClicks
     renderTemplate(templateP1, "content")
 
     function handleButtonClicks(evt) {
         const target = evt.target
         const isMenuBtn = target.tagName === "BUTTON" && target.id.startsWith("menu-btn-")
         if (!isMenuBtn) {
             console.log("Not a menu button, Remove this line when you know what this block is doing")
             return
         }
         if (target.id === "menu-btn-p1") {
             renderTemplate(templateP1, "content")
         }
         if (target.id === "menu-btn-p2") {
             renderTemplate(templateP2, "content")
             initP2()
         }
         if (target.id === "menu-btn-p3") {
             renderTemplate(templateP3, "content")
             initP3()
         }
         if (target.id === "menu-btn-p4") {
            renderTemplate(templateP4, "content")
            initP4()
        }
        if (target.id === "menu-btn-p5") {
            renderTemplate(templateP5, "content")
            initP5()
        }
     }
 })
 